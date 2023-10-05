export type Produto = {
  nome: string;
  preco: number;
};

export type ProdutoCarrinho = {
  produto: Produto;
  quantidade: number;
};

export type Carrinho = {
  produtos: ProdutoCarrinho[];
  total: number;
};
