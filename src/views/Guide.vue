<template>
  <div class="survey">
    <LeftImage />

    <div class="content-wrap">
      <div class="container">
          <div class="title">
            <h1>{{ title }}</h1>
          </div>
          <div class="content">
            <div class="ask-age" v-show="!showStep2"> 
              <label for="guideYes" :class="{'clicked': howGuide == 'evet'}" @click="guide('yes')">EVET</label>              
              <label for="guideNo" :class="{'clicked': howGuide == 'hayir'}" @click="guide('no')">HAYIR</label>                           
            </div>
            <div class="form">
              <input type="radio" name="erkan" id="guideYes" v-model="howGuide" value="">
              <input type="radio" name="erkan" id="guideNo" v-model="howGuide" value="hayir">
            </div>

            <div class="step2 ask-age" v-show="showStep2">
              <div class="ask-age">
                <label for="howUse1" :class="{'clicked': howGuideStep2 == '1'}">1</label>              
                <label for="howUse2" :class="{'clicked': howGuideStep2 == '2'}">2</label>                           
                <label for="howUse3" :class="{'clicked': howGuideStep2 == '3'}">3</label>                           
                <label for="howUse4" :class="{'clicked': howGuideStep2 == '4'}">4</label>                           
                <label for="howUse5" :class="{'clicked': howGuideStep2 == '5'}">5</label>                           
              </div>
            </div>
            <div class="step2 form">
              <input type="radio" name="erkan" id="howUse1" v-model="howGuideStep2" value="1">
              <input type="radio" name="erkan" id="howUse2" v-model="howGuideStep2" value="2">
              <input type="radio" name="erkan" id="howUse3" v-model="howGuideStep2" value="3">
              <input type="radio" name="erkan" id="howUse4" v-model="howGuideStep2" value="4">
              <input type="radio" name="erkan" id="howUse5" v-model="howGuideStep2" value="5">
            </div>
          </div>
          <div class="button">
            <router-link to="/guide" :class="classBind()">DEVAM</router-link>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftImage from "@/components/LeftImage";

export default {
  name: "guide",
  data() {
    return {
      title: "DİJİTAL REHBER KULLANDINIZ MI ?",
      howGuide: "",
      howGuideStep2: "",
      showStep2: false
    };
  },
  methods: {
    guide(result) {
      if (result == "yes") {
        this.title = "PEKİ MEMNUN KALDINIZ MI?";
        this.showStep2 = true;
        this.howGuide = "";
      }
    },
    classBind() {
      if (this.howGuide != "" || this.howGuideStep2 != "") {
        return "";
      }

      return "disable";
    }
  },
  components: { LeftImage }
};
</script>

<style lang="scss" scoped>
.content-wrap .content .ask-age.step2 {
  justify-content: center;

  label {
    width: calc(20% - 45px);
    margin-right: 0;
  }
}
</style>
