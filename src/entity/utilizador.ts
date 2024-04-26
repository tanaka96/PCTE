import { Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Utilizador {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    email: string

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    admin: boolean
}