import { Request, Response } from "express";
import { myDataSource } from "../app-data-source";
import { Comercializador } from "../entity/comercializador";
import { Desconto } from "../entity/desconto";
import { Potencia } from "../entity/potencia";
import { Tar } from "../entity/tar";
import { Tarifario } from "../entity/tarifario";
import { Taxa } from "../entity/taxa";
import { Valor } from "../entity/valor";
import {ResultadoResponce} from "../dto/resultado.dto";

export class ResultadoController {
    static async Resultado(req: Request, res: Response) {
        try {
            const { potencia, tarifa, dias, vazio, ponta, cheio } = req.body;
            if (!potencia || !tarifa || !dias || ! vazio || !ponta || !cheio) {
                return res.status(500).json({message: "Campos obrigatórios!"})
            }

            const valorRep = myDataSource.getRepository(Valor);
            const valores = await valorRep.find({where: { potencia: potencia, tarifario: tarifa  }});
            const max = await valorRep.createQueryBuilder().select("MAX(id)", "max").getRawOne();
            const taxaRep = myDataSource.getRepository(Taxa);
            const tarRep = myDataSource.getRepository(Tar);
            const audiovisual = await taxaRep.findOne({where: {nome: "Audiovisual" }})
            const dgeg = await taxaRep.findOne({where: {nome: "DGEG"}})
            const iec = await taxaRep.findOne({where: {nome: "Especial/kWh"}})
            const iva6 = await taxaRep.findOne({where: {nome: "IVA", valor: "6"}})
            const iva23 = await taxaRep.findOne({where: {nome: "IVA", valor: "23"}})
            const iva6F: number = iva6.valor
            const iva23F: number = iva23.valor
            const contagem = vazio + ponta + cheio
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
            let desconto: number = 0
            let valor: string

            var i = 1;
            const resultDataSent = []

            if (tarifa == "Simples"){
                if (potencia <= "6.90"){
                    if (potencia == "1.15" || potencia == "2.30" || potencia == "3.45") {
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
                                total = precoEnergia+precoPotencia+audio+dgegTotal+iecTotal
                                resultDataSent[i-1] = new ResultadoResponce()
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
                                resultDataSent[i-1].desconto = desconto.toFixed(2)
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
                                total = precoEnergia+precoPotencia+audio+dgegTotal+iecTotal
                                resultDataSent[i-1] = new ResultadoResponce()
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
                                resultDataSent[i-1].desconto = desconto.toFixed(2)
                                resultDataSent[i-1].valor = valor
                                i++
                            }

                        } while (i <= max.max)

                        const result = resultDataSent.filter(element => element !== null)
                        return res.status(200).json({result})


                    }
                }

            }

        } catch (error) {
            console.error(error);
            return res.status(500).json({message: "Internal server error"});
        }
    }
}