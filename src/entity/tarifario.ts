import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import {Tar} from "./tar";

@Entity()
export class Tarifario {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    tipo: string

    @Column()
    valor: string

    @Column()
    contrato: string
}