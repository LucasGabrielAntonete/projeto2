<script setup>
import produtos from '@/_data/produtos'
import { ref } from 'vue'

const mostrar = ref(true)

const carrinho = ref({
  items: [],

  valorTotal: 0
})

function limparCarrinho() {
  carrinho.value.items = []
}

function adicionarItem(item) {
  let itemCarrinho = carrinho.value.items.find((produto) => produto.id == item.id)
  if (itemCarrinho) {
    itemCarrinho.quantidade += 1
  } else {
    carrinho.value.items.push(item)
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


// Fazer a função de valor total e mexer no css e template// 

</script>
<template>
  <main>
    <ul>
      <li class="container" v-for="item in produtos" :key="item.id">
        <div class="row">
          <div class="col">
            <div class="card">
              <h5>Nome: {{ item.name }}</h5>
              <p>detalhes: {{ item.details.description }}</p>
              <p>price:R$:{{ item.details.price }}</p>
              <button class="" @click="incrementaCompra(ref(item))">+</button>
              <button @click="decrementaCompra(ref(item))">-</button>
              <button @click="adicionarItem(item)">Adicionar item</button>
              <p>{{ item.quantidade }}</p>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </li>
    </ul>

    <div>
      <button @click="mostrar =! mostrar">Mostrar Carrinho</button>
    <div v-if="mostrar">
      <button @click="limparCarrinho()">Limpar Carrinho</button>
      
      <div v-for="(index, item) in carrinho.items" :key="item.id">
        {{ index }}
        <button @click="incrementaCompra(ref(index))">+</button>
        <button @click="decrementaCompra(ref(index))">-</button>
    
     
      </div>
    </div>
  </div>
  </main>
</template>
<style scoped></style>
