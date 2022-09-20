<template>
  <div id="app">
    <div class="rat-container">
      <form class="review-form" @submit.prevent="onSubmit">
        <!-- prevent browser refresh -->
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">

        <label for="review">Review:</label>
        <textarea id="review"  v-model="review"></textarea>

        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
        <input class="button" type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
  },
  data () {
    return {
      name: '',
      review: '',
      rating: null
    }
  },
  methods: {
    onSubmit () {
      const productReview = {
        // is never reassigned. Use 'const' instead  prefer-const. Const can be used since productReview isnt being changed but productReview.name etc
        name: this.name,
        review: this.review,
        rating: this.rating
      }
      this.$emit('review-submitted', productReview)

      this.name = ''
      this.review = ''
      this.rating = null
      // save, send and clear
    }
  }
})
export default class ratShop extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/style.css';

</style>
