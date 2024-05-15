import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate} from "typeorm"
import { scrypt, randomBytes } from "crypto"

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