import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

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