import { Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Desconto {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fatura_eletronica: number

    @Column()
    debito_direto: number
}