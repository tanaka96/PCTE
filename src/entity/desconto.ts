import { Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Desconto {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    tipo: string

    @Column()
    percentagem: number
}