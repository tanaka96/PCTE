import { Comercializador } from "./comercializador";
import { Potencia } from "./potencia";
import { Tarifario } from "./tarifario";
export declare class Valor {
    id: number;
    idComercializador: number;
    idPotencia: number;
    idTarifario: number;
    valorPotencia: number;
    valorEnergia: number;
    atualizacao: string;
    comercializador: Comercializador;
    potencia: Potencia;
    tarifario: Tarifario;
}
