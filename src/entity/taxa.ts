import { Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Taxa {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column("decimal", { precision: 5, scale: 3 })
    valor: number
}