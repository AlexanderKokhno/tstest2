<template>
  <div id="app">
    <div class="nav-bar">
      <div>
        <button @click="ratBack1">Ratify Background</button>
      </div>
      <div>
        <ul>
          <a :href = "rat10HrLink">Rat Spin</a>
        </ul>
      </div>
    </div>
      <div class="product-display">
        <div class="rat-container">
          <div class="rat-image">
            <img :src = "ratPic">
            <div>
              <li v-for = '(variant, index) in variants' :key='variant.id' @mouseover="variantUpdate(index)" :style="{backgroundColor: variant.color}" class="rat-circle">
                {{variant.status}}
              </li>
            </div>
          </div>
          <div class="rat-info">
            <h1>{{ title }} <p v-if='ratDance > 1'>Active!</p></h1>
            <div>
              <p v-if='ratDance > 25 '>Dancing</p>
              <p v-else-if='ratDance > 0 '>Dancing but tired</p>
              <p v-else>💀 no more Dance 💀</p>
              <p> VipWatch: {{VipWatch}}</p>
            </div>
            <div>
              <li v-for = 'detail in details' :key="detail">{{detail}}</li>
            </div>
          </div>
          <div class='rat-dance'>
            <button class='button' @click="ratDancedF" :disabled='!ratDance' :class='{disabledButton: !ratDance}'>Danced?</button>
          </div>
          <div>
            <review-form @review-submitted="addReview"></review-form>
          </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    msg: String,
    RatVIP: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      product: 'Rat',
      classification: 'Meme:',
      // ratEnergy: true,
      // image1: require('../assets/images/rat_1.jpg'),
      selectedRat: 0,
      rat10HrLink: 'https://youtu.be/2TSaAysdHhk',
      // ratDance: 100,
      details: ['low res', 'spinning', 'NYC'],
      variants: [
        {
          id: 1,
          status: 'classic',
          ratPic: require('../assets/images/rat_1.jpg'),
          color: 'gray',
          quantity: 20
        },
        {
          id: 2,
          status: 'dicso',
          ratPic: require('../assets/images/rat_2.jpg'),
          color: 'purple',
          quantity: 0
        }
      ],
      reviews: []
    }
  },
  methods: {
    ratBack1 () {
      this.$emit('ratBack1E')
    },
    ratDancedF () {
      // this.ratDanced += 1
      // // this.ratDance -= 1
      // // if (this.ratDance <= 1) {
      // //   this.ratEnergy = false
      // // }
      // console.log(this.ratDance)
      this.$emit('ratRancedEmit', this.variants[this.selectedRat].id)
      console.log('emitted')
    },
    // ratE () {
    //   this.ratDance = 50
    //   this.ratEnergy = true
    //   if (this.ratDance <= 1) {
    //     this.ratEnergy = false
    //   }
    // },
    variantUpdate (index:any) {
      this.selectedRat = index
    },
    addReview (review:any) {
      this.reviews.push(review)
    }
  },
  computed: {
    title () {
      return this.classification + ' type; ' + this.product
    },
    ratPic () {
      return this.variants[this.selectedRat].ratPic
    },
    ratDance () {
      return this.variants[this.selectedRat].quantity
    },
    VipWatch () {
      if (this.RatVIP) {
        return 'VIP'
      }
      return 'Plebian'
    }
  }
  // created: function () {
  //   this.ratE()
  // }
})
export default class ratShop extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/style.css';

</style>
