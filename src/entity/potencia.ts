import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import {Tar} from "./tar";

@Entity()
export class Potencia {
    @PrimaryGeneratedColumn()
    id: number

    @Column("decimal", { precision: 4, scale: 2 })
    potencia_contratada: number
}