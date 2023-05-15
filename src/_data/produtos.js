import { ref } from 'vue'

const produtos = ref([
  {
    id: 1,
    name: 'Camisa',
    details: { description: 'Camisa Social do Bolsonaro', price: 50.0 },
    quantidade: 1,
   
  },
  {
    id: 2,
    name: 'Calça',
    details: { description: 'Calça super confortavel do Mito', price: 20.0 },
    quantidade: 1,
   
  },
  { id: 3,
    name: 'Meia',
    details: { description: 'Meia Patriota', price: 20.0 },
    quantidade: 1,
    
      },
  { id: 4,
    name: 'Caneca',
    details: { description: 'Caneca DO MITO', price: 20.0 },
    quantidade: 1,
    
       },
  {
    id: 5,
    name: 'Calendario',
    details: { description: 'Calendario do Capitão', price: 20.0 },
    quantidade: 1,
   
  },
  { 
    id: 6,
    name: 'Toalha',
    details: { description: 'Toalha Patriota', price: 20.0 },
    quantidade: 1,
     },
])

export default produtos
