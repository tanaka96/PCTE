import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate} from "typeorm"
import { IsEmail } from "class-validator"
import { scrypt, randomBytes } from "crypto"

@Entity()
export class Utilizador {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column({nullable: false})
    first_name: string

    @Column({nullable: false})
    last_name: string

    @Column({nullable: false})
    @IsEmail()
    email: string

    @Column({nullable: false})
    username: string

    @Column({nullable: false})
    password: string

    @Column()
    admin: boolean

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        return new Promise((resolve,reject)=>{
            const salt = randomBytes(16).toString("hex");
            scrypt(this.password, salt, 64, (err, derivedKey) => {
                console.log(this.password);
                err ? reject(err) : resolve(this.password = salt + ":" + derivedKey.toString("hex"));
            });
        });
    }
}