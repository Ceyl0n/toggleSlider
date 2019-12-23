<template>
  <div id="glide-slider" class="glide">
    <div data-glide-el="track" class="glide__track">
      <ul class="glide__slides">
        <li v-for="item in slides" v-bind:key="item.id" class="glide__slide">{{ item.title }}</li>
      </ul>
    </div>
  </div>
</template>


<script>
import "@glidejs/glide/dist/css/glide.core.css";
import "@glidejs/glide/dist/css/glide.theme.css";
import Glide from "@glidejs/glide";

export default {
  props: {
    slides: {
      type: Array,
      default: []
    }
  },

  data() {
    return {
      glideSlider: null
    };
  },

  mounted() {
    this.handleLoad();
  },

  methods: {
    handleLoad() {
      let elem = document.getElementById("glide-slider");

      if (elem) {
        this.glideSlider = new Glide(elem, {
          type: "slider", // carousel slider
          gap: 30,
          perView: 5,
          perTouch: 1,
          peek: 0
        }).mount();
      }
    }
  }
};
</script>
<style>
</style>
