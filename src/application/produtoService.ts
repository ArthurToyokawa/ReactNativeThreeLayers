import Database from '../data/database';
import {Carrinho, Produto, ProdutoCarrinho} from '../data/models';

export default class ProdutoService {
  private model: Database;
  private observers: Function[] = [];

  constructor() {
    this.model = Database.getInstance();
  }

  getProdutos = () => {
    return this.model.getProdutos();
  };

  addProduto = (produto: Produto) => {
    this.model.addProduto(produto);
    return this.generateCarrinho(this.model.getProdutosCarrinho());
  };

  private generateCarrinho = (pCarrinho: ProdutoCarrinho[]) => {
    const total = pCarrinho.reduce((curr, p) => {
      return curr + p.produto.preco * p.quantidade;
    }, 0);
    console.log('total');
    const carrinho: Carrinho = {
      produtos: pCarrinho,
      total,
    };
    return carrinho;
  };
}
