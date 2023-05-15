<script setup>
import produtos from '@/_data/produtos'
import { ref } from 'vue'

const mostrar = ref(false)

const carrinho = ref({
  items: []
})


function limparCarrinho() {
  carrinho.value.items = []
}
function removerItem(item) {
  carrinho.value.items.quantidade = 1
  carrinho.value.items.splice(carrinho.value.items.indexOf(item), 1)
  produtos.value[item.id - 1].adicionado = false
}

function adicionarItem(item) {
  let itemCarrinho = carrinho.value.items.find((produto) => produto.id == item.id)
  if (itemCarrinho) {
    itemCarrinho.quantidade += 1
  } else {
    carrinho.value.items.push(item)
    carrinho.value.items.item.quantidade++
  }
}

function incrementaCompra(index) {
  index.value.quantidade++
}

function decrementaCompra(index) {
  if (index.value.quantidade <= 0) {
    alert('Os itens ja foram retirados')
  } else index.value.quantidade--
}

const total = ref(0.0)

function calcularTotal() {
  total.value = 0.0
  for (let item of carrinho.value.items) {
    total.value += item.quantidade * item.details.price
  }
  return (total.value = total.value.toFixed(2))
}

</script>
<template>
  <header>
    <div class="container">
      <button
        @click="mostrar = !mostrar"
        class="btn btn-warning"
      >
        Mostrar Carrinho
      </button>

      <div v-if="mostrar">
        <div>
          <h1>CARRINHO</h1>
          <p>O valor total é de R$: {{ calcularTotal() }}</p>
        </div>
        <button class="btn btn-outline-success" @click="limparCarrinho()">Limpar Carrinho</button>
        <div class="row">
          <div class="col-4" v-for="(index, item) in carrinho.items" :key="item.id">
            <div id="cardCarrinho" class="card">
              <p>{{ index.name }}, R$:{{ index.details.price }}</p>
              <p>A quantidade adicionada do item é: {{ index.quantidade }}</p>
              <button class="btn btn-warning" @click="incrementaCompra(ref(index))">+</button>
              <button class="btn btn-danger" @click="decrementaCompra(ref(index))">-</button>
              <button class="btn btn-warning" @click="removerItem(item)">Remover item</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <main>
    <div class="container">
      <div><h1>ITENS</h1></div>
      <div class="row">
        <div class="col-4" v-for="item in produtos" :key="item.id">
          <div id="card-inicial" class="card">
            <h5>{{ item.name }}</h5>
            <p>{{ item.details.description }}</p>
            <p>price:R$:{{ item.details.price }}</p>
            <button class="btn btn-success" @click="incrementaCompra(ref(item))">+</button>
            <button class="btn btn-primary" @click="decrementaCompra(ref(item))">-</button>
            <button class="btn btn-success" @click="adicionarItem(item)">Adicionar item</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
#card-inicial {
  background-color: yellow;
}

#cardCarrinho {
  background-color: green;
}

h5 {
  font-weight: bold;
}
p {
  font-weight: bold;
}

h1 {
  text-align: center;
  margin: 0%;
}
</style>
