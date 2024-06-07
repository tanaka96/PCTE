import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Tar {
    @PrimaryGeneratedColumn()
    id: number

    @Column("decimal", {precision: 4, scale: 2})
    potencia: number

    @Column()
    tarifario: string

    @Column("decimal", {precision: 5, scale: 4})
    valorPotencia: number

    @Column("decimal", {precision: 5, scale: 4})
    simples: number

    @Column("decimal", {precision: 5, scale: 4})
    vazio: number

    @Column("decimal", {precision: 5, scale: 4})
    naoVazio: number

}