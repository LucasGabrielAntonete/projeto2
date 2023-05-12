<script setup>
import items from '@/_data/produtos'
import { ref } from 'vue'

const carrinho = ref({
  items: [],
  
  valorTotal: 0
});



function adicionarItem(item) {
  let itemCarrinho = carrinho.value.items.find(produto => produto.id == item.id )
  if (itemCarrinho) {
    itemCarrinho.quantidade += 1;
  } else {
    carrinho.value.items.push(item)
  }

}
</script>
<template>
  <main>
    <div>
      <ul>
        <li class="card" v-for="item in items" :key="item.id">
          <div>
            <h5>Nome: {{ item.name }}</h5>
            <p>detalhes: {{ item.details.description }}</p>
            <p>price:R$:{{ item.details.price }}</p>
            <button class="" @click="item.quantidade++">+</button>
            <button @click="item.quantidade--">-</button>
            <button @click="adicionarItem(item)">Adicionar item</button>
            <p>{{ item.quantidade }}</p>
            <img src="" alt="">
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>
<style scoped></style>
