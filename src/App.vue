<script setup>
import items from '@/_data/produtos'
import { ref } from 'vue'

const carrinho = ref([]);

function adicionarItem() {
  const itemCarrinho = carrinho.value.items
}

 

</script>
<template>
  <main>
    <div>
      <ul>
        <li class="card" v-for="item in items" :key="item.id">
          <div>
            <h5>Nome: {{ item.name }}</h5>
            <p>detalhes: {{ item.details }}</p>
            <p>price:R$:{{ item.details.price }}</p>
            <button class="bnt bnt-primary" @click="item.value.quantidade++">+</button>
            <button @click="item.value.quantidade--">-</button>
            <button @click="adicionarItem">Adicionar item</button>
            <p>{{ item.quantidade }}</p>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>
<style scoped></style>
