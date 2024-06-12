import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Comercializador {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    empresa: string

    @Column()
    logo: string
}