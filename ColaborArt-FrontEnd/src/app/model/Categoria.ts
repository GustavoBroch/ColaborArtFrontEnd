import { Produto } from "./Produto"

export class Categoria {
  public idCategoria: number
  public tipoProduto: string
  public descricaoCategoria: string
  public produto: Produto[]
}