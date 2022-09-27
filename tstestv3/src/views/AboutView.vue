<template>
  <div class="AppTwo">
    <!-- <h1>{{test1}} - {{age}}</h1>
    <button @click="changeTest('Billy')">testChange</button>
    <button @click="changeAge(35.4)">AgeChange</button>
    <VTSComp1></VTSComp1> -->
    <!-- <p> {{shells[0].title}}</p> -->
    <header class='"order"'>
      <Button @click="handleClick('title')">By Type</Button>
      <Button @click="handleClick('pen')">By Pen</Button>
      <Button @click="handleClick('info')">By Type (Letters)</Button>
    </header>
    <VTSComp1 :shells="shells" :order="order"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import VTS from '../types/VTS'
import OrderTerm from '../types/OrderTerm'
import VTSComp1 from '../components/VTSComp1.vue'

export default defineComponent({
  name: 'AppTwo',
  components: { VTSComp1 },
  setup () {
    // const state = reactive({
    //   test1: 'Bill Nye',
    //   age: 25 as string|number
    // })
    // state.age = 40
    // return { ...toRefs(state) }

    // const test1 = ref('Krog')
    // const age = ref<number|string>(29) // returns  a refrence object not actual value?????
    // return { test1, age }
    const shells = ref<VTS[]>([ // VTS[] the brakets are there since its  an array of TVS objects
      {
        title: 'APBC',
        info: 'Armor-piercing ballistic capped',
        pen: 100,
        id: '1'
      },
      {
        title: 'APC',
        info: 'Armor-piercing capped',
        pen: 150,
        id: '2'
      },
      {
        title: 'APCBC',
        info: 'Armor-piercing capped ballistic capped',
        pen: 200,
        id: '3'
      },
      {
        title: 'APDS',
        info: 'Armor-piercing discarding sabot',
        pen: 300,
        id: '4'
      },
      {
        title: 'HEAT',
        info: 'High-explosive anti-tank',
        pen: 400,
        id: '5'
      }
    ])
    const order = ref<OrderTerm>('title')
    const handleClick = (term: OrderTerm) => { // custom type that only allows 3 strings in
      order.value = term
    }

    return { shells, handleClick, order }
  },
  methods: {
    // changeTest (test1: string) {
    //   this.test1 = test1
    // },
    // changeAge (Age: number) { // doesnt matter if i type number or string here since i said it can be either
    //   this.age = Age
    // }
  }
})
</script>

<style>
header {
  text-align: center;
}
header .order {
  margin-top: 20px;
}
button {
  margin: 0 10px;
  color: #1195c9;
  border: 3px solid #1195c9;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
@import '../assets/global.css'
</style>
