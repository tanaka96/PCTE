import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Comercializador } from "./comercializador";
import { Potencia } from "./potencia";
import { Tarifario } from "./tarifario";

@Entity()
export class Valor {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    idComercializador: number

    @Column()
    idPotencia: number

    @Column()
    idTarifario: number

    @Column()
    valorPotencia: number

    @Column()
    valorEnergia: number

    @Column()
    atualizacao: string

    @OneToMany(() => Comercializador, (comercializador) => comercializador.id)
    comercializador: Comercializador

    @OneToMany(() => Potencia, (potencia) => potencia.id)
    potencia: Potencia

    @OneToMany(() => Tarifario, (tarifario) => tarifario.id)
    tarifario: Tarifario
}