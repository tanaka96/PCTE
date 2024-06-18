import { Request, Response } from "express";
import { myDataSource } from "../app-data-source";
import { Tar } from "../entity/tar";
import { Taxa } from "../entity/taxa";
import { Valor } from "../entity/valor";
import {ResultadoResponse} from "../dto/resultado.dto";
import {Desconto} from "../entity/desconto";

export class ResultadoController {
    static async Resultado(req: Request, res: Response) {
        try {
            const { potencia, tarifa, dias, vazio, ponta, cheio, desconto } = req.body;
            if (!potencia || !tarifa || !dias || ! vazio || !ponta || !cheio) {
                return res.status(500).json({message: "Campos obrigatórios!"})
            }

            const valorRep = myDataSource.getRepository(Valor);
            const max = await valorRep.createQueryBuilder().select("MAX(id)", "max").getRawOne();
            const taxaRep = myDataSource.getRepository(Taxa);
            const tarRep = myDataSource.getRepository(Tar);
            const descRep = myDataSource.getRepository(Desconto);
            const audiovisual = await taxaRep.findOne({where: {nome: "Audiovisual" }})
            const dgeg = await taxaRep.findOne({where: {nome: "DGEG"}})
            const iec = await taxaRep.findOne({where: {nome: "Especial/kWh"}})
            const iva6 = await taxaRep.findOne({where: {nome: "IVA", valor: "6"}})
            const iva23 = await taxaRep.findOne({where: {nome: "IVA", valor: "23"}})
            const desc = await descRep.findOne({where: {tipo: desconto}})
            const iva6F: number = iva6.valor
            const iva23F: number = iva23.valor
            const contagem = vazio + ponta + cheio
            let subtotal: number = 0
            let total: number = 0
            let cemkW: number = 0
            let resto: number = 0
            let precoEnergia: number = 0
            let precoPotencia: number = 0
            let audio:number=0
            let dgegTotal:number=0
            let iecTotal:number=0
            let iva:number = 0
            let tar: number = 0
            let descontoT: number = 0
            let valor: string
            let precoVazio: number = 0
            let precoNaoVazio: number = 0

            var i = 1;
            const resultDataSent = []

            if (tarifa == "Simples"){
                if (potencia < "10.35"){
                    if (potencia <= "3.45") {
                        do {
                            const valPot = await valorRep.findOneBy({id: i})
                            valor = valPot.valor
                            const tarPot = await tarRep.findOneBy({potencia: potencia})
                            const precoPot: number = valPot.valorPotencia
                            const gasto: number = valPot.valorSimples
                            if (potencia != valPot.potencia){
                                i++
                            } else if (contagem <= 100) {
                                cemkW = contagem*gasto*(1+(iva6F/100))
                                precoEnergia = cemkW
                                precoPotencia = (precoPot*dias)*(1+(iva23F/100))
                                audio = audiovisual.valor*(1+(iva6F/100))
                                dgegTotal = dgeg.valor*(1+(iva23F/100))
                                iecTotal = iec.valor*contagem*(1+(iva23F/100))
                                iva = (contagem*gasto*(iva6F/100))+((precoPot*dias)*(iva23F/100))+(audiovisual.valor*(iva6F/100))+
                                    (dgeg.valor*(iva23F/100))+(iec.valor*contagem*(iva23F/100))
                                tar = ((tarPot.valorPotencia*dias)*(1+(iva6F/100)))+((tarPot.simples*contagem)*(1+(iva23F/100)))
                                subtotal = precoEnergia+precoPotencia+audio+dgegTotal+iecTotal
                                if (desc.percentagem == 0){
                                    total=subtotal
                                } else {
                                    descontoT = subtotal*(desc.percentagem/100)
                                    total = subtotal-descontoT
                                }
                                resultDataSent[i-1] = new ResultadoResponse()
                                resultDataSent[i-1].comercializador = valPot.comercializador
                                resultDataSent[i-1].precoTotal = total.toFixed(2)
                                resultDataSent[i-1].preco100kW = cemkW.toFixed(2)
                                resultDataSent[i-1].precoEnergia = precoEnergia.toFixed(2)
                                resultDataSent[i-1].precoPotencia = precoPotencia.toFixed(2)
                                resultDataSent[i-1].impostos = {
                                    audiovisual: audio.toFixed(2),
                                    DGEG: dgegTotal.toFixed(2),
                                    IEC: iecTotal.toFixed(2),
                                    IVA: iva.toFixed(2)}
                                resultDataSent[i-1].tar = tar.toFixed(2)
                                resultDataSent[i-1].desconto = descontoT.toFixed(2)
                                resultDataSent[i-1].valor = valor
                                i++
                            } else if (contagem > 100){
                                cemkW = 100*gasto*(1+(iva6F/100))
                                resto = (contagem-100)*gasto*(1+(iva23F/100))
                                precoEnergia = cemkW+resto
                                precoPotencia = (precoPot*dias)*(1+(iva23F/100))
                                audio = audiovisual.valor*(1+(iva6F/100))
                                dgegTotal = dgeg.valor*(1+(iva23F/100))
                                iecTotal = iec.valor*contagem*(1+(iva23F/100))
                                iva = (100*gasto*(iva6F/100))+((contagem-100)*gasto*(iva23F/100))+((precoPot*dias)*(iva23F/100))+(audiovisual.valor*(iva6F/100))+
                                    (dgeg.valor*(iva23F/100))+(iec.valor*contagem*(iva23F/100))
                                tar = ((tarPot.valorPotencia*dias)*(1+(iva6F/100)))+((tarPot.simples*contagem)*(1+(iva23F/100)))
                                subtotal = precoEnergia+precoPotencia+audio+dgegTotal+iecTotal
                                if (desc.percentagem == 0){
                                    total=subtotal
                                } else {
                                    descontoT = subtotal*(desc.percentagem/100)
                                    total = subtotal-descontoT
                                }
                                resultDataSent[i-1] = new ResultadoResponse()
                                resultDataSent[i-1].comercializador = valPot.comercializador
                                resultDataSent[i-1].precoTotal = total.toFixed(2)
                                resultDataSent[i-1].preco100kW = cemkW.toFixed(2)
                                resultDataSent[i-1].precoResto = resto.toFixed(2)
                                resultDataSent[i-1].precoEnergia = precoEnergia.toFixed(2)
                                resultDataSent[i-1].precoPotencia = precoPotencia.toFixed(2)
                                resultDataSent[i-1].impostos = {
                                    audiovisual: audio.toFixed(2),
                                    DGEG: dgegTotal.toFixed(2),
                                    IEC: iecTotal.toFixed(2),
                                    IVA: iva.toFixed(2)}
                                resultDataSent[i-1].tar = tar.toFixed(2)
                                resultDataSent[i-1].desconto = descontoT.toFixed(2)
                                resultDataSent[i-1].valor = valor
                                i++
                            }

                        } while (i <= max.max)

                        const result = resultDataSent.filter(element => element !== null)
                        return res.status(200).json({result})


                    } else {
                        do {
                            const valPot = await valorRep.findOneBy({id: i})
                            valor = valPot.valor
                            const tarPot = await tarRep.findOneBy({potencia: potencia})
                            const precoPot: number = valPot.valorPotencia
                            const gasto: number = valPot.valorSimples
                            if (potencia != valPot.potencia){
                                i++
                            } else if (contagem <= 100) {
                                cemkW = contagem*gasto*(1+(iva6F/100))
                                precoEnergia = cemkW
                                precoPotencia = (precoPot*dias)*(1+(iva23F/100))
                                audio = audiovisual.valor*(1+(iva6F/100))
                                dgegTotal = dgeg.valor*(1+(iva23F/100))
                                iecTotal = iec.valor*contagem*(1+(iva23F/100))
                                iva = (contagem*gasto*(iva6F/100))+((precoPot*dias)*(iva23F/100))+(audiovisual.valor*(iva6F/100))+
                                    (dgeg.valor*(iva23F/100))+(iec.valor*contagem*(iva23F/100))
                                tar = ((tarPot.valorPotencia*dias)*(1+(iva23F/100)))+((tarPot.simples*contagem)*(1+(iva23F/100)))
                                subtotal = precoEnergia+precoPotencia+audio+dgegTotal+iecTotal
                                if (desc.percentagem == 0){
                                    total=subtotal
                                } else {
                                    descontoT = subtotal*(desc.percentagem/100)
                                    total = subtotal-descontoT
                                }
                                resultDataSent[i-1] = new ResultadoResponse()
                                resultDataSent[i-1].comercializador = valPot.comercializador
                                resultDataSent[i-1].precoTotal = total.toFixed(2)
                                resultDataSent[i-1].preco100kW = cemkW.toFixed(2)
                                resultDataSent[i-1].precoEnergia = precoEnergia.toFixed(2)
                                resultDataSent[i-1].precoPotencia = precoPotencia.toFixed(2)
                                resultDataSent[i-1].impostos = {
                                    audiovisual: audio.toFixed(2),
                                    DGEG: dgegTotal.toFixed(2),
                                    IEC: iecTotal.toFixed(2),
                                    IVA: iva.toFixed(2)}
                                resultDataSent[i-1].tar = tar.toFixed(2)
                                resultDataSent[i-1].desconto = descontoT.toFixed(2)
                                resultDataSent[i-1].valor = valor
                                i++
                            } else if (contagem > 100){
                                cemkW = 100*gasto*(1+(iva6F/100))
                                resto = (contagem-100)*gasto*(1+(iva23F/100))
                                precoEnergia = cemkW+resto
                                precoPotencia = (precoPot*dias)*(1+(iva23F/100))
                                audio = audiovisual.valor*(1+(iva6F/100))
                                dgegTotal = dgeg.valor*(1+(iva23F/100))
                                iecTotal = iec.valor*contagem*(1+(iva23F/100))
                                iva = (100*gasto*(iva6F/100))+((contagem-100)*gasto*(iva23F/100))+((precoPot*dias)*(iva23F/100))+(audiovisual.valor*(iva6F/100))+
                                    (dgeg.valor*(iva23F/100))+(iec.valor*contagem*(iva23F/100))
                                tar = ((tarPot.valorPotencia*dias)*(1+(iva23F/100)))+((tarPot.simples*contagem)*(1+(iva23F/100)))
                                subtotal = precoEnergia+precoPotencia+audio+dgegTotal+iecTotal
                                if (desc.percentagem == 0){
                                    total=subtotal
                                } else {
                                    descontoT = subtotal*(desc.percentagem/100)
                                    total = subtotal-descontoT
                                }
                                resultDataSent[i-1] = new ResultadoResponse()
                                resultDataSent[i-1].comercializador = valPot.comercializador
                                resultDataSent[i-1].precoTotal = total.toFixed(2)
                                resultDataSent[i-1].preco100kW = cemkW.toFixed(2)
                                resultDataSent[i-1].precoResto = resto.toFixed(2)
                                resultDataSent[i-1].precoEnergia = precoEnergia.toFixed(2)
                                resultDataSent[i-1].precoPotencia = precoPotencia.toFixed(2)
                                resultDataSent[i-1].impostos = {
                                    audiovisual: audio.toFixed(2),
                                    DGEG: dgegTotal.toFixed(2),
                                    IEC: iecTotal.toFixed(2),
                                    IVA: iva.toFixed(2)}
                                resultDataSent[i-1].tar = tar.toFixed(2)
                                resultDataSent[i-1].desconto = descontoT.toFixed(2)
                                resultDataSent[i-1].valor = valor
                                i++
                            }

                        } while (i <= max.max)

                        const result = resultDataSent.filter(element => element !== null)
                        return res.status(200).json({result})
                    }
                } else {
                    do {
                        const valPot = await valorRep.findOneBy({id: i})
                        valor = valPot.valor
                        const tarPot = await tarRep.findOneBy({potencia: potencia})
                        const precoPot: number = valPot.valorPotencia
                        const gasto: number = valPot.valorSimples
                        if (potencia != valPot.potencia){
                            i++
                        } else {
                            precoEnergia = contagem*gasto*(1+(iva23F/100))
                            precoPotencia = (precoPot*dias)*(1+(iva23F/100))
                            audio = audiovisual.valor*(1+(iva6F/100))
                            dgegTotal = dgeg.valor*(1+(iva23F/100))
                            iecTotal = iec.valor*contagem*(1+(iva23F/100))
                            iva = (contagem*gasto*(iva23F/100))+((precoPot*dias)*(iva23F/100))+(audiovisual.valor*(iva6F/100))+
                                (dgeg.valor*(iva23F/100))+(iec.valor*contagem*(iva23F/100))
                            tar = ((tarPot.valorPotencia*dias)*(1+(iva23F/100)))+((tarPot.simples*contagem)*(1+(iva23F/100)))
                            subtotal = precoEnergia+precoPotencia+audio+dgegTotal+iecTotal
                            if (desc.percentagem == 0){
                                total=subtotal
                            } else {
                                descontoT = subtotal*(desc.percentagem/100)
                                total = subtotal-descontoT
                            }
                            resultDataSent[i-1] = new ResultadoResponse()
                            resultDataSent[i-1].comercializador = valPot.comercializador
                            resultDataSent[i-1].precoTotal = total.toFixed(2)
                            resultDataSent[i-1].precoEnergia = precoEnergia.toFixed(2)
                            resultDataSent[i-1].precoPotencia = precoPotencia.toFixed(2)
                            resultDataSent[i-1].impostos = {
                                audiovisual: audio.toFixed(2),
                                DGEG: dgegTotal.toFixed(2),
                                IEC: iecTotal.toFixed(2),
                                IVA: iva.toFixed(2)}
                            resultDataSent[i-1].tar = tar.toFixed(2)
                            resultDataSent[i-1].desconto = descontoT.toFixed(2)
                            resultDataSent[i-1].valor = valor
                            i++
                        }

                    } while (i <= max.max)

                    const result = resultDataSent.filter(element => element !== null)
                    return res.status(200).json({result})
                }

            } else {
                if (potencia < "10.35"){
                    if (potencia <= "3.45") {
                        do {
                            const valPot = await valorRep.findOneBy({id: i})
                            valor = valPot.valor
                            const tarPot = await tarRep.findOneBy({potencia: potencia})
                            const precoPot: number = valPot.valorPotencia
                            const valorVazio: number = valPot.valorVazio
                            const valorNaoVazio: number = valPot.valorNaoVazio
                            if (potencia != valPot.potencia){
                                i++
                            } else if (contagem <= 100) {
                                precoVazio = vazio*valorVazio*(1+(iva6F/100))
                                precoNaoVazio = (ponta+cheio)*valorNaoVazio*(1+(iva6F/100))
                                precoEnergia = precoVazio+precoNaoVazio
                                precoPotencia = (precoPot*dias)*(1+(iva23F/100))
                                audio = audiovisual.valor*(1+(iva6F/100))
                                dgegTotal = dgeg.valor*(1+(iva23F/100))
                                iecTotal = iec.valor*contagem*(1+(iva23F/100))
                                iva = (vazio*valorVazio*(iva6F/100))+((ponta+cheio)*valorNaoVazio*(iva6F/100))+((precoPot*dias)*(iva23F/100))+(audiovisual.valor*(iva6F/100))+
                                    (dgeg.valor*(iva23F/100))+(iec.valor*contagem*(iva23F/100))
                                tar = ((tarPot.valorPotencia*dias)*(1+(iva6F/100)))+(((tarPot.vazio*vazio)+(tarPot.naoVazio*(ponta+cheio)))*(1+(iva23F/100)))
                                subtotal = precoEnergia+precoPotencia+audio+dgegTotal+iecTotal
                                if (desc.percentagem == 0){
                                    total=subtotal
                                } else {
                                    descontoT = subtotal*(desc.percentagem/100)
                                    total = subtotal-descontoT
                                }
                                resultDataSent[i-1] = new ResultadoResponse()
                                resultDataSent[i-1].comercializador = valPot.comercializador
                                resultDataSent[i-1].precoVazio = precoVazio.toFixed(2)
                                resultDataSent[i-1].precoNaoVazio = precoNaoVazio.toFixed(2)
                                resultDataSent[i-1].precoTotal = total.toFixed(2)
                                resultDataSent[i-1].precoEnergia = precoEnergia.toFixed(2)
                                resultDataSent[i-1].precoPotencia = precoPotencia.toFixed(2)
                                resultDataSent[i-1].impostos = {
                                    audiovisual: audio.toFixed(2),
                                    DGEG: dgegTotal.toFixed(2),
                                    IEC: iecTotal.toFixed(2),
                                    IVA: iva.toFixed(2)}
                                resultDataSent[i-1].tar = tar.toFixed(2)
                                resultDataSent[i-1].desconto = descontoT.toFixed(2)
                                resultDataSent[i-1].valor = valor
                                i++
                            } else if (contagem > 100){
                                cemkW = (((vazio*100)/contagem)*valorVazio*(1+(iva6F/100)))+((((ponta+cheio)*100)/contagem)*valorNaoVazio*(1+(iva6F/100)))
                                resto = ((vazio-((vazio*100)/contagem))*valorVazio*(1+(iva23F/100)))+(((ponta+cheio)-(((ponta+cheio)*100)/contagem))*valorNaoVazio*(1+(iva23F/100)))
                                precoVazio = (((vazio*100)/contagem)*valorVazio*(1+(iva6F/100)))+((vazio-((vazio*100)/contagem))*valorVazio*(1+(iva23F/100)))
                                precoNaoVazio = ((((ponta+cheio)*100)/contagem)*valorNaoVazio*(1+(iva6F/100)))+(((ponta+cheio)-(((ponta+cheio)*100)/contagem))*valorNaoVazio*(1+(iva23F/100)))
                                precoEnergia = cemkW+resto
                                precoPotencia = (precoPot*dias)*(1+(iva23F/100))
                                audio = audiovisual.valor*(1+(iva6F/100))
                                dgegTotal = dgeg.valor*(1+(iva23F/100))
                                iecTotal = iec.valor*contagem*(1+(iva23F/100))
                                iva = ((((vazio*100)/contagem)*valorVazio*(iva6F/100)))+((((ponta+cheio)*100)/contagem)*valorNaoVazio*(iva6F/100))+((vazio-((vazio*100)/contagem))*valorVazio*(iva23F/100)) +
                                    (((ponta+cheio)-(((ponta+cheio)*100)/contagem))*valorNaoVazio*(iva23F/100))+((precoPot*dias)*(iva23F/100))+(audiovisual.valor*(iva6F/100))+
                                    (dgeg.valor*(iva23F/100))+(iec.valor*contagem*(iva23F/100))
                                tar = ((tarPot.valorPotencia*dias)*(1+(iva6F/100)))+(((tarPot.vazio*vazio)+(tarPot.naoVazio*(ponta+cheio)))*(1+(iva23F/100)))
                                subtotal = precoEnergia+precoPotencia+audio+dgegTotal+iecTotal
                                if (desc.percentagem == 0){
                                    total=subtotal
                                } else {
                                    descontoT = subtotal*(desc.percentagem/100)
                                    total = subtotal-descontoT
                                }
                                resultDataSent[i-1] = new ResultadoResponse()
                                resultDataSent[i-1].comercializador = valPot.comercializador
                                resultDataSent[i-1].precoTotal = total.toFixed(2)
                                resultDataSent[i-1].preco100kW = cemkW.toFixed(2)
                                resultDataSent[i-1].precoResto = resto.toFixed(2)
                                resultDataSent[i-1].precoVazio = precoVazio.toFixed(2)
                                resultDataSent[i-1].precoNaoVazio = precoNaoVazio.toFixed(2)
                                resultDataSent[i-1].precoEnergia = precoEnergia.toFixed(2)
                                resultDataSent[i-1].precoPotencia = precoPotencia.toFixed(2)
                                resultDataSent[i-1].impostos = {
                                    audiovisual: audio.toFixed(2),
                                    DGEG: dgegTotal.toFixed(2),
                                    IEC: iecTotal.toFixed(2),
                                    IVA: iva.toFixed(2)}
                                resultDataSent[i-1].tar = tar.toFixed(2)
                                resultDataSent[i-1].desconto = descontoT.toFixed(2)
                                resultDataSent[i-1].valor = valor
                                i++
                            }

                        } while (i <= max.max)

                        const result = resultDataSent.filter(element => element !== null)
                        return res.status(200).json({result})


                    } else {
                        do {
                            const valPot = await valorRep.findOneBy({id: i})
                            valor = valPot.valor
                            const tarPot = await tarRep.findOneBy({potencia: potencia})
                            const precoPot: number = valPot.valorPotencia
                            const valorVazio: number = valPot.valorVazio
                            const valorNaoVazio: number = valPot.valorNaoVazio
                            if (potencia != valPot.potencia){
                                i++
                            } else if (contagem <= 100) {
                                precoVazio = vazio*valorVazio*(1+(iva6F/100))
                                precoNaoVazio = (ponta+cheio)*valorNaoVazio*(1+(iva6F/100))
                                precoEnergia = precoVazio+precoNaoVazio
                                precoPotencia = (precoPot*dias)*(1+(iva23F/100))
                                audio = audiovisual.valor*(1+(iva6F/100))
                                dgegTotal = dgeg.valor*(1+(iva23F/100))
                                iecTotal = iec.valor*contagem*(1+(iva23F/100))
                                iva = (vazio*valorVazio*(iva6F/100))+((ponta+cheio)*valorNaoVazio*(iva6F/100))+((precoPot*dias)*(iva23F/100))+(audiovisual.valor*(iva6F/100))+
                                    (dgeg.valor*(iva23F/100))+(iec.valor*contagem*(iva23F/100))
                                tar = ((tarPot.valorPotencia*dias)*(1+(iva23F/100)))+(((tarPot.vazio*vazio)+(tarPot.naoVazio*(ponta+cheio)))*(1+(iva23F/100)))
                                subtotal = precoEnergia+precoPotencia+audio+dgegTotal+iecTotal
                                if (desc.percentagem == 0){
                                    total=subtotal
                                } else {
                                    descontoT = subtotal*(desc.percentagem/100)
                                    total = subtotal-descontoT
                                }
                                resultDataSent[i-1] = new ResultadoResponse()
                                resultDataSent[i-1].comercializador = valPot.comercializador
                                resultDataSent[i-1].precoVazio = precoVazio.toFixed(2)
                                resultDataSent[i-1].precoNaoVazio = precoNaoVazio.toFixed(2)
                                resultDataSent[i-1].precoTotal = total.toFixed(2)
                                resultDataSent[i-1].precoEnergia = precoEnergia.toFixed(2)
                                resultDataSent[i-1].precoPotencia = precoPotencia.toFixed(2)
                                resultDataSent[i-1].impostos = {
                                    audiovisual: audio.toFixed(2),
                                    DGEG: dgegTotal.toFixed(2),
                                    IEC: iecTotal.toFixed(2),
                                    IVA: iva.toFixed(2)}
                                resultDataSent[i-1].tar = tar.toFixed(2)
                                resultDataSent[i-1].desconto = descontoT.toFixed(2)
                                resultDataSent[i-1].valor = valor
                                i++
                            } else if (contagem > 100){
                                cemkW = (((vazio*100)/contagem)*valorVazio*(1+(iva6F/100)))+((((ponta+cheio)*100)/contagem)*valorNaoVazio*(1+(iva6F/100)))
                                resto = ((vazio-((vazio*100)/contagem))*valorVazio*(1+(iva23F/100)))+(((ponta+cheio)-(((ponta+cheio)*100)/contagem))*valorNaoVazio*(1+(iva23F/100)))
                                precoVazio = (((vazio*100)/contagem)*valorVazio*(1+(iva6F/100)))+((vazio-((vazio*100)/contagem))*valorVazio*(1+(iva23F/100)))
                                precoNaoVazio = ((((ponta+cheio)*100)/contagem)*valorNaoVazio*(1+(iva6F/100)))+(((ponta+cheio)-(((ponta+cheio)*100)/contagem))*valorNaoVazio*(1+(iva23F/100)))
                                precoEnergia = cemkW+resto
                                precoPotencia = (precoPot*dias)*(1+(iva23F/100))
                                audio = audiovisual.valor*(1+(iva6F/100))
                                dgegTotal = dgeg.valor*(1+(iva23F/100))
                                iecTotal = iec.valor*contagem*(1+(iva23F/100))
                                iva = ((((vazio*100)/contagem)*valorVazio*(iva6F/100)))+((((ponta+cheio)*100)/contagem)*valorNaoVazio*(iva6F/100))+((vazio-((vazio*100)/contagem))*valorVazio*(iva23F/100)) +
                                    (((ponta+cheio)-(((ponta+cheio)*100)/contagem))*valorNaoVazio*(iva23F/100))+((precoPot*dias)*(iva23F/100))+(audiovisual.valor*(iva6F/100))+
                                    (dgeg.valor*(iva23F/100))+(iec.valor*contagem*(iva23F/100))
                                tar = ((tarPot.valorPotencia*dias)*(1+(iva23F/100)))+(((tarPot.vazio*vazio)+(tarPot.naoVazio*(ponta+cheio)))*(1+(iva23F/100)))
                                subtotal = precoEnergia+precoPotencia+audio+dgegTotal+iecTotal
                                if (desc.percentagem == 0){
                                    total=subtotal
                                } else {
                                    descontoT = subtotal*(desc.percentagem/100)
                                    total = subtotal-descontoT
                                }
                                resultDataSent[i-1] = new ResultadoResponse()
                                resultDataSent[i-1].comercializador = valPot.comercializador
                                resultDataSent[i-1].precoTotal = total.toFixed(2)
                                resultDataSent[i-1].preco100kW = cemkW.toFixed(2)
                                resultDataSent[i-1].precoResto = resto.toFixed(2)
                                resultDataSent[i-1].precoVazio = precoVazio.toFixed(2)
                                resultDataSent[i-1].precoNaoVazio = precoNaoVazio.toFixed(2)
                                resultDataSent[i-1].precoEnergia = precoEnergia.toFixed(2)
                                resultDataSent[i-1].precoPotencia = precoPotencia.toFixed(2)
                                resultDataSent[i-1].impostos = {
                                    audiovisual: audio.toFixed(2),
                                    DGEG: dgegTotal.toFixed(2),
                                    IEC: iecTotal.toFixed(2),
                                    IVA: iva.toFixed(2)}
                                resultDataSent[i-1].tar = tar.toFixed(2)
                                resultDataSent[i-1].desconto = descontoT.toFixed(2)
                                resultDataSent[i-1].valor = valor
                                i++
                            }

                        } while (i <= max.max)

                        const result = resultDataSent.filter(element => element !== null)
                        return res.status(200).json({result})


                    }
                } else {
                    do {
                        const valPot = await valorRep.findOneBy({id: i})
                        valor = valPot.valor
                        const tarPot = await tarRep.findOneBy({potencia: potencia})
                        const precoPot: number = valPot.valorPotencia
                        const valorVazio: number = valPot.valorVazio
                        const valorNaoVazio: number = valPot.valorNaoVazio
                        if (potencia != valPot.potencia){
                            i++
                        } else {
                            precoEnergia = ((vazio*valorVazio)+((ponta+cheio)*valorNaoVazio))*(1+(iva23F/100))
                            precoPotencia = (precoPot*dias)*(1+(iva23F/100))
                            audio = audiovisual.valor*(1+(iva6F/100))
                            dgegTotal = dgeg.valor*(1+(iva23F/100))
                            iecTotal = iec.valor*contagem*(1+(iva23F/100))
                            iva = (((vazio*valorVazio)+((ponta+cheio)*valorNaoVazio))*(iva23F/100))+((precoPot*dias)*(iva23F/100))+(audiovisual.valor*(iva6F/100))+
                                (dgeg.valor*(iva23F/100))+(iec.valor*contagem*(iva23F/100))
                            tar = ((tarPot.valorPotencia*dias)*(1+(iva23F/100)))+(((tarPot.vazio*vazio)+(tarPot.naoVazio*(ponta+cheio)))*(1+(iva23F/100)))
                            subtotal = precoEnergia+precoPotencia+audio+dgegTotal+iecTotal
                            if (desc.percentagem == 0){
                                total=subtotal
                            } else {
                                descontoT = subtotal*(desc.percentagem/100)
                                total = subtotal-descontoT
                            }
                            resultDataSent[i-1] = new ResultadoResponse()
                            resultDataSent[i-1].comercializador = valPot.comercializador
                            resultDataSent[i-1].precoTotal = total.toFixed(2)
                            resultDataSent[i-1].precoEnergia = precoEnergia.toFixed(2)
                            resultDataSent[i-1].precoPotencia = precoPotencia.toFixed(2)
                            resultDataSent[i-1].impostos = {
                                audiovisual: audio.toFixed(2),
                                DGEG: dgegTotal.toFixed(2),
                                IEC: iecTotal.toFixed(2),
                                IVA: iva.toFixed(2)}
                            resultDataSent[i-1].tar = tar.toFixed(2)
                            resultDataSent[i-1].desconto = descontoT.toFixed(2)
                            resultDataSent[i-1].valor = valor
                            i++
                        }

                    } while (i <= max.max)

                    const result = resultDataSent.filter(element => element !== null)
                    return res.status(200).json({result})
                }
            }

        } catch (error) {
            console.error(error);
            return res.status(500).json({message: "Internal server error"});
        }
    }
}