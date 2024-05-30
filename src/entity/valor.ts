import { Entity, Column, PrimaryGeneratedColumn, OneToMany, UpdateDateColumn } from "typeorm"
import { Comercializador } from "./comercializador";
import { Potencia } from "./potencia";
import { Tarifario } from "./tarifario";

@Entity()
export class Valor {
    @PrimaryGeneratedColumn()
    id: number

    @OneToMany(() => Comercializador, (comercializador) => comercializador.id)
    idComercializador: Comercializador

    @OneToMany(() => Potencia, (potencia) => potencia.id)
    idPotencia: Potencia

    @OneToMany(() => Tarifario, (tarifario) => tarifario.id)
    idTarifario: Tarifario

    @Column()
    valorPotencia: number

    @Column()
    valorEnergia: number

    @UpdateDateColumn()
    atualizacao: Date






}