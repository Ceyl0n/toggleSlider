<template>
  <div class="container">
    <button v-on:click="toggle">Toggle: {{ toggleType }}</button>
    <button v-on:click="showSlider = !showSlider">Show: {{ showSlider }}</button>

    <hr />
    <template v-if="showSlider">
      <Slider v-bind:slides="slides" />
    </template>
  </div>
</template>

<script>
import Slider from "~/components/Slider.vue";

export default {
  components: {
    Slider
  },

  data() {
    return {
      toggleType: "one",
      toggleOne: "one",
      toggleTwo: "two",

      showSlider: true
    };
  },

  computed: {
    slides() {
      if (this.toggleType === this.toggleOne) {
        return this.$store.getters["slidesOne"];
      } else {
        return this.$store.getters["slidesTwo"];
      }
    }
  },

  methods: {
    toggle() {
      if (this.toggleType == this.toggleOne) {
        this.toggleType = this.toggleTwo;
      } else {
        this.toggleType = this.toggleOne;
      }

      console.log(this.toggleType);
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  width: 600px;
}
</style>
