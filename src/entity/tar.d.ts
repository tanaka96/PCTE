import { Potencia } from "./potencia";
import { Tarifario } from "./tarifario";
export declare class Tar {
    id: number;
    idPotencia: number;
    idTarifario: number;
    valorPotencia: number;
    valorTarifario: number;
    potencia: Potencia;
    tarifario: Tarifario;
}
