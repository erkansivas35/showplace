<template>
  <div class="survey">
    <LeftImage />

    <div class="content-wrap">
      <div class="container">
          <div class="title">
            <h1>{{ title }}</h1>
          </div>
          <div class="content">
            <p>Result page</p>
          </div>
          <!-- <div class="button">
            <router-link to="/result" :class="classBind()">DEVAM</router-link>
          </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import LeftImage from "@/components/LeftImage";

export default {
  name: "result",
  data() {
    return {
      title: "SONUÇ",
    };
  },
  components: { LeftImage }
};
</script>
