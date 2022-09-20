<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <p>The rat danced {{ratDanced.length}} times</p>
    <ratShop @ratBack1E='ratBack1_change' :RatVIP='RatVIP' @ratRancedEmit='ratBack1E'>
      <rat-comments/>
      <ratCDisplay/>
    </ratShop>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ratShop from '@/components/ratShop.vue'
import ratCDisplay from '@/components/ratCDisplay.vue'
import ratComments from '@/components/ratComments.vue' // @ is an alias to /src

@Options({
  /* eslint-disable */
  components: {
    ratShop,
    ratComments,
    ratCDisplay
  },
  data () {
    return {
      backGrd: 'https://c.tenor.com/aaEMtGfZFbkAAAAi/rat-spinning.gif',
      bkc: 'green',
      ratDanced: [],
      RatVIP: true
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

    },
    ratBack1E (id:number) {
      this.ratDanced.push(id)
      console.log('emmit recived')
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
