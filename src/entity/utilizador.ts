import { Entity, Column, PrimaryGeneratedColumn} from "typeorm"
import { IsEmail } from "class-validator"

@Entity()
export class Utilizador {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false})
    first_name: string

    @Column({nullable: false})
    last_name: string

    @Column({nullable: false, unique: true})
    @IsEmail()
    email: string

    @Column({nullable: false})
    password: string

    @Column({default: "user"})
    admin: string

}