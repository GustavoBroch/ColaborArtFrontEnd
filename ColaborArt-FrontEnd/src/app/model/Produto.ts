import { Categoria } from "./Categoria"
import { User } from "./User"

export class Produto {
    public nome: string
    public idProduto: number
    public descricaoProduto: string
    public tamanho: string
    public valor: number
    public disponivel: boolean
    public estoque: number
    public urlProduto: string
    public usuario: User
    public categoria: Categoria
}
    