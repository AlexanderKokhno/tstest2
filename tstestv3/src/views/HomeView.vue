<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <ratShop @ratBack1e = 'ratBack1_change'/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ratShop from '@/components/ratShop.vue' // @ is an alias to /src

@Options({
  /* eslint-disable */
  components: {
    ratShop
  },
  data () {
    return {
      backGrd: 'https://c.tenor.com/aaEMtGfZFbkAAAAi/rat-spinning.gif',
      bkc: 'green'
    }
  },
  computed: {
    cssVars() {
      return {
        'bkcV': this.bkc
      }
    }
  },
  methods: {
    ratBack1_change () {
      console.log('emit is working')
      alert('WPA')

    }
  }
})
export default class HomeView extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.home {
  background-color: var(bkcV);

}
</style>
