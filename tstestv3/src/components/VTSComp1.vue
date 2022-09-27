
<template>
  <div class="shell-list">
    <p> Ordered By {{ order }}</p>
    <p>{{orderedShells}}</p>
    <ul>
      <li v-for='shell in orderedShells' :key='shell.id'>
          <h2>{{shell.title}} is a {{shell.info}}</h2>
          <div class='pen'>
            <p>It can pen {{shell.pen}}</p>
          </div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas doloremque voluptatibus quidem atque animi possimus corporis ipsa incidunt. Optio quia sunt architecto officiis eos accusantium explicabo necessitatibus cupiditate ducimus accusamus?</div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import VTS from '../types/VTS'
import OrderTerm from '../types/OrderTerm'

export default defineComponent({
  props: {
    shells: {
      required: true,
      type: Array as PropType<VTS[]>
    },
    order: {
      required: true,
      type: String as PropType<OrderTerm>
    }
  },
  setup (props) {
    const orderedShells = computed(() => {
      return [...props.shells].sort((a: VTS, b: VTS) => {
        return a[props.order] > b[props.order] ? +1 : -1
      }) // new array to avoid mutating original array ... spreads out the elements inside the array into a new temp array
    })

    return { orderedShells }
  }
})
</script>
<style scoped>
  .shell-list {
    max-width: 960px;
    margin: 40px auto;
  }
  .shell-list ul {
    padding: 0;
  }
  .shell-list li {
    list-style-type: none;
    background: white;
    padding: 16px;
    margin: 16px 0;
    border-radius: 4px;
  }
  .shell-list h2 {
    margin: 0 0 10px;
    text-transform: capitalize;
  }
  .pen {
    display: flex;
  }
  .pen img {
    width: 30px;
  }
  .pen p {
    color: #17bf66;
    font-weight: bold;
    margin: 10px 4px;
  }
</style>
