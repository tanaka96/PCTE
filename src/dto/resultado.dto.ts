export class ResultadoResponce{
    comercializador: string;
    precoTotal: number;
    preco100kW: number;
    precoResto: number;
    precoVazio: number;
    precoNaoVazio: number;
    precoEnergia: number;
    precoPotencia: number;
    impostos: { audiovisual: number, DGEG: number, IEC: number, IVA: number };
    TAR: number;
    desconto: number;
    valor: string;
}