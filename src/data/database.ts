// Model.ts

import {Produto, ProdutoCarrinho} from './models';

export default class Database {
  private static instance: Database | null = null;
  private produtos: Produto[] = [
    {nome: 'videogames', preco: 100},
    {nome: 'animes', preco: 10},
    {nome: 'eu', preco: 1},
  ];
  private produtosCarrinho: ProdutoCarrinho[] = [];

  private constructor() {}

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  getProdutos = () => {
    return this.produtos;
  };

  getProdutosCarrinho = () => {
    return this.produtosCarrinho;
  };

  addProduto = (produto: Produto) => {
    const indexOfProduto = this.produtosCarrinho.findIndex(pc => {
      return pc.produto.nome === produto.nome;
    });
    if (indexOfProduto === -1) {
      const newProd: ProdutoCarrinho = {
        produto,
        quantidade: 1,
      };
      this.produtosCarrinho.push(newProd);
    } else {
      this.produtosCarrinho[indexOfProduto].quantidade += 1;
    }
  };
}
