<template>
  <div class="survey">
    <LeftImage />

    <div class="content-wrap">
      <div class="container">
          <div class="title">
            <h1>BURADA OLMAKTAN MUTLU MUSUNUZ?</h1>
          </div>
          <div class="content">
            <div class="ask-age">
              <label for="smile1" :class="{'clicked': howSmile == '1'}">
                <img src="../assets/img/smiles/1.svg" alt="">
              </label>              
              <label for="smile2" :class="{'clicked': howSmile == '2'}">
                <img src="../assets/img/smiles/2.svg" alt="">  
              </label>  
              <label for="smile3" :class="{'clicked': howSmile == '3'}">
                <img src="../assets/img/smiles/3.svg" alt="">  
              </label>  
              <label for="smile4" :class="{'clicked': howSmile == '4'}">
                <img src="../assets/img/smiles/4.svg" alt="">  
              </label>  
              <label for="smile5" :class="{'clicked': howSmile == '5'}">
                <img src="../assets/img/smiles/5.svg" alt="">  
              </label>                           
            </div>
            <div class="form">
              <input type="radio" name="smile" id="smile1" v-model="howSmile" value="1">
              <input type="radio" name="smile" id="smile2" v-model="howSmile" value="2">
              <input type="radio" name="smile" id="smile3" v-model="howSmile" value="3">
              <input type="radio" name="smile" id="smile4" v-model="howSmile" value="4">
              <input type="radio" name="smile" id="smile5" v-model="howSmile" value="5">
            </div>
          </div>
          <div class="button">
            <router-link to="/smile" :class="{'disable': howSmile == ''}">DEVAM</router-link>
          </div>
      </div>
    </div>
  </div>  
</template>

<script>
import LeftImage from "@/components/LeftImage";

export default {
  name: "gender",
  data() {
    return {
      howSmile: ""
    };
  },
  components: { LeftImage }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/responsive-mixin.scss";

.content-wrap .content .ask-age {
  justify-content: center;

  label {
    width: calc(20% - 40px);
    border: none;
    background: none;
    margin-right: 0;
    transition: 0.3s;

    @include mq("tablet") {
      width: calc(30% - 40px);
    }

    @include mq("mobile") {
      width: calc(35% - 40px);
    }

    & img {
      width: 100%;
    }

    &.clicked {
      transform: scale(1.2);
    }

    &:hover {
      border: none;
      background: none;
    }
  }
}
</style>

