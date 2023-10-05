// View.tsx

import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import ProdutoService from '../application/produtoService';
import {Carrinho, Produto} from '../data/models';

export default function ProdutoList(): JSX.Element {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carrinho, setCarrinho] = useState<Carrinho>();
  const controller = new ProdutoService();

  const addProduto = (produto: Produto) => {
    console.log(produto);
    const carrinho = controller.addProduto(produto);
    console.log(carrinho);
    setCarrinho(carrinho);
  };

  useEffect(() => {
    setProdutos(controller.getProdutos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      {carrinho && (
        <View>
          <Text style={styles.title}>Carrinho</Text>
          {carrinho?.produtos.map((p, i) => {
            return (
              <View key={i}>
                <View style={styles.divider} />
                <View style={styles.attrContainer}>
                  <Text style={styles.resultLabel}>Produto:</Text>
                  <Text>{p.produto.nome}</Text>
                </View>
                <View style={styles.attrContainer}>
                  <Text style={styles.resultLabel}>Quantidade:</Text>
                  <Text>{p.quantidade}</Text>
                </View>
              </View>
            );
          })}
          <Text style={styles.title}>Total: {carrinho.total} R$</Text>
        </View>
      )}
      <Text style={styles.title}>Lista de produtos</Text>
      {produtos.map((p, i) => {
        return (
          <View key={i}>
            <View style={styles.divider} />
            <View style={styles.attrContainer}>
              <Text style={styles.resultLabel}>Nome:</Text>
              <Text>{p.nome}</Text>
            </View>
            <View style={styles.attrContainer}>
              <Text style={styles.resultLabel}>preco:</Text>
              <Text>{p.preco}</Text>
            </View>
            <Button title="Adicionar" onPress={() => addProduto(p)} />
          </View>
        );
      })}
      {/* <View style={styles.inputContainer}>
        <Text style={styles.label}>Insira o nome:</Text>
        <TextInput
          style={styles.input}
          value={resourceName}
          onChangeText={text => setResourceName(text)}
          placeholder="Nome"
        />
      </View>
      <Button title="Buscar" onPress={handleSearch} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  resultContainer: {
    marginTop: 20,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  attrContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  resultLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 5,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});
