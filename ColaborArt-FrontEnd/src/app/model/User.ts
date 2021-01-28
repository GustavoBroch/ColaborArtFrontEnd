import { Produto } from "./Produto"

export class User {
  public idUsuario: number
  public nomeCompleto: string
  public email: string
  public senha: string
  public cpf: string
  public cep: number
  public foto: string
  public tipo: string
  public produto: Produto[]
}