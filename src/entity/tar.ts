import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Potencia } from "./potencia";
import { Tarifario } from "./tarifario";

@Entity()
export class Tar {
    @PrimaryGeneratedColumn()
    id: number

    @OneToMany(() => Potencia, (potencia) => potencia.id)
    idPotencia: Potencia

    @OneToMany(() => Tarifario, (tarifario) => tarifario.id)
    idTarifario: Tarifario

    @Column()
    valorPotencia: number

    @Column()
    valorTarifario: number

}