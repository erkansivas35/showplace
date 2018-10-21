<template>
  <div class="survey">
    <LeftImage />

    <div class="content-wrap">
      <div class="container">
          <div class="title">
            <h1>{{ title }}</h1>
          </div>
          <div class="content">
            <div class="ask-age">
              <div class="ask-age">
                <label for="howUse1" :class="{'clicked': howRestoration == '1'}">1</label>              
                <label for="howUse2" :class="{'clicked': howRestoration == '2'}">2</label>                           
                <label for="howUse3" :class="{'clicked': howRestoration == '3'}">3</label>                           
                <label for="howUse4" :class="{'clicked': howRestoration == '4'}">4</label>                           
                <label for="howUse5" :class="{'clicked': howRestoration == '5'}">5</label>                           
              </div>
            </div>
            <div class="form">
              <input type="radio" name="erkan" id="howUse1" v-model="howRestoration" value="1">
              <input type="radio" name="erkan" id="howUse2" v-model="howRestoration" value="2">
              <input type="radio" name="erkan" id="howUse3" v-model="howRestoration" value="3">
              <input type="radio" name="erkan" id="howUse4" v-model="howRestoration" value="4">
              <input type="radio" name="erkan" id="howUse5" v-model="howRestoration" value="5">
            </div>
          </div>
          <div class="button">
            <router-link to="/discovery" :class="classBind()">DEVAM</router-link>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftImage from "@/components/LeftImage";

export default {
  name: "restoration",
  data() {
    return {
      title: "RESTORASYON'U BEĞENDİNİZ Mİ ?",
      howRestoration: ""
    };
  },
  methods: {
    classBind() {
      if (this.howRestoration != "") {
        return "";
      }
      return "disable";
    }
  },
  components: { LeftImage }
};
</script>

<style lang="scss" scoped>
.content-wrap .content .ask-age {
  justify-content: center;

  label {
    width: calc(20% - 46px);
    margin-right: 15px;

    &:nth-child(2) {
      margin-right: 15px;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
