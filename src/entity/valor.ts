import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Valor {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    comercializador: string

    @Column("decimal", {precision: 4, scale: 2})
    potencia: number

    @Column()
    tarifario: string

    @Column()
    valor: string

    @Column("decimal", {precision: 5, scale: 4})
    valorPotencia: number

    @Column("decimal", {precision: 5, scale: 4})
    valorSimples: number

    @Column("decimal", {precision: 5, scale: 4})
    valorVazio: number

    @Column("decimal", {precision: 5, scale: 4})
    valorNaoVazio: number

    @UpdateDateColumn()
    atualizacao: Date
}