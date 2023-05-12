import { ref } from 'vue'



const items = ref([
  {
    id: 1,
    name: 'Camisa',
    details: { description: 'Camisa Social do Bolsonaro', price: 50.0 },
    quantidade: 0
  },
  {
    id: 2,
    name: 'Calça',
    details: { description: 'Calça super confortavel do Mito', price: 20.0 },
    quantidade: 0
  },
  { id: 3, name: 'Meia', details: { description: 'Meia Patriota', price: 20.0 }, quantidade: 0 },
  { id: 4, name: 'Caneca', details: { description: 'Caneca DO MITO', price: 20.0 }, quantidade: 0 },
  {
    id: 5,
    name: 'Calendario',
    details: { description: 'Calendario do Capitão', price: 20.0 },
    quantidade: 0
  },
  { id: 6, 
    name: 'Toalha', 
    details: { description: 'Toalha Patriota', price: 20.0 }, 
    quantidade: 0 }

])

export default items
