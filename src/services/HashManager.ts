import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

export class HashManager {
    public hash = async (plaintext: string) => {// gerar o hash
        const rounds = Number(process.env.BCRYPT_COST)//qual custo/nivel de segurança
        const salt = await bcrypt.genSalt(rounds)//quantidade de hash possivel para essa senha
        const hash = await bcrypt.hash(plaintext, salt)
                                 //senha criada, nivel de segurança
        return hash
    }

    //verificar se a senha esta correta
    public compare = async (plaintext: string, hash: string) => {
				// aqui não precisa do await porque o return já se comporta como um
        return bcrypt.compare(plaintext, hash)
    }
}