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
                <label for="howUse1" :class="{'clicked': howDiscovery == 'kilise'}">KİLİSE</label>              
                <label for="howUse2" :class="{'clicked': howDiscovery == 'cami'}">CAMİ</label>                           
                <label for="howUse3" :class="{'clicked': howDiscovery == 'saray'}">SARAY</label>                           
                <label for="howUse4" :class="{'clicked': howDiscovery == 'tarihi'}">TARİHİ</label>                          
              </div>
            </div>
            <div class="form">
              <input type="radio" name="erkan" id="howUse1" v-model="howDiscovery" value="kilise">
              <input type="radio" name="erkan" id="howUse2" v-model="howDiscovery" value="cami">
              <input type="radio" name="erkan" id="howUse3" v-model="howDiscovery" value="saray">
              <input type="radio" name="erkan" id="howUse4" v-model="howDiscovery" value="tarihi">
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
      title: "KEŞİF ZAMANI",
      howDiscovery: ""
    };
  },
  methods: {
    classBind() {
      if (this.howDiscovery != "") {
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
    width: calc(20% - 13px);
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
