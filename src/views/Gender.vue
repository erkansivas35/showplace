<template>
  <div class="age">
    <LeftImage />

    <div class="content-wrap">
      <div class="container">
          <div class="title">
            <h1>CİNSİYETİNİZ</h1>
          </div>
          <div class="content">
            <div class="ask-age">
              <label for="genderWomen" :class="{'clicked': howGender == 'Women', 'notClicked': notClick == 'women'}" @click="isClicked('men')">
                <img src="../assets/img/girl.svg" alt="">
              </label>              
              <label for="genderMen" :class="{'clicked': howGender == 'Men', 'notClicked': notClick == 'men'}" @click="isClicked('women')">
                <img src="../assets/img/man.svg" alt="">  
              </label>                           
            </div>
            <div class="form">
              <input type="radio" name="gender" id="genderWomen" v-model="howGender" value="Women">
              <input type="radio" name="gender" id="genderMen" v-model="howGender" value="Men">
            </div>
          </div>
          <div class="button">
            <router-link to="/gender" :class="{'disable': howGender == ''}">DEVAM</router-link>
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
      howGender: "",
      notClick: ""
    };
  },
  methods: {
    isClicked(gender) {
      this.notClick = gender;
    }
  },
  components: { LeftImage }
};
</script>

<style lang="scss" scoped>
.content-wrap .content .ask-age {
  justify-content: center;

  label {
    width: auto;
    border: none;
    background: none;
    margin-right: 30px;

    &.clicked {
      filter: blur(0px);
    }

    &.notClicked {
      filter: blur(5px);
    }

    &:hover {
      border: none;
      background: none;
    }
  }
}
</style>

