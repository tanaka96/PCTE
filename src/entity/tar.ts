import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Potencia } from "./potencia";
import { Tarifario } from "./tarifario";

@Entity()
export class Tar {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    idPotencia: number

    @Column()
    idTarifario: number

    @Column()
    valorPotencia: number

    @Column()
    valorTarifario: number

    @OneToMany(() => Potencia, (potencia) => potencia.id)
    potencia: Potencia

    @OneToMany(() => Tarifario, (tarifario) => tarifario.id)
    tarifario: Tarifario
}