<template>
  <div class="age">
    <div class="place-image-wrap">
      <div class="overlay"></div>
    </div>
    <div class="content-wrap">
      <div class="container">
          <div class="title">
            <h1>KİŞİSEL BİLGİLER</h1>
          </div>
          <div class="content">
            <div class="ask-age">
              <label href="#" for="age15" :class="{'clicked': howAge == '15-18'}">15 - 18</label>              
              <label href="#" for="age19" :class="{'clicked': howAge == '19-25'}">19 - 25</label>              
              <label href="#" for="age26" :class="{'clicked': howAge == '26-35'}">26 - 35</label>              
              <label href="#" for="age36" :class="{'clicked': howAge == '36+'}">36 +</label>              
            </div>
            <div class="form">
              <input type="radio" name="erkan" id="age15" v-model="howAge" value="15-18">
              <input type="radio" name="erkan" id="age19" v-model="howAge" value="19-25">
              <input type="radio" name="erkan" id="age26" v-model="howAge" value="26-35">
              <input type="radio" name="erkan" id="age36" v-model="howAge" value="36+">
            </div>
          </div>
          <div class="button">
            <router-link to="/age" :class="{'disable': howAge == ''}">DEVAM</router-link>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Age",
  data() {
    return {
      howAge: ""
    };
  }
};
</script>

<style lang="scss">
@import "../assets/css/responsive-mixin.scss";

.age {
  height: 100vh !important;
  display: flex;
  overflow: hidden;

  & .place-image-wrap {
    position: relative;
    width: 30%;
    overflow: hidden;
    background: url("../assets/img/place.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 0%;

    @include mq("mobile") {
      display: none;
    }
  }

  & .content-wrap {
    width: 70%;

    @include mq("mobile") {
      width: 100%;
    }
  }
}

.content-wrap {
  .title {
    margin-bottom: 10px;

    h1 {
      font-size: 58px;
      margin: 0;
      text-align: center;

      @include mq("tablet") {
        font-size: 46px;
      }
    }
  }

  .content {
    width: 100%;
    display: flex;
    justify-content: center;

    .form {
      position: absolute;
      right: 999999px;
    }

    .ask-age {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      width: 80%;
      justify-content: space-between;
      align-items: center;

      & label {
        width: calc(50% - 42px);
        background: #fff;
        border: 2px solid #915eeb;
        padding: 10px 15px;
        color: #915eeb;
        text-decoration: none;
        font-size: 36px;
        text-align: center;
        margin-bottom: 15px;
        margin-right: 15px;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          background: #915eeb;
          border: 2px solid #915eeb;
          color: #fff;
        }

        &.clicked {
          background: #915eeb;
          border: 2px solid #915eeb;
          color: #fff;
        }

        @include mq("mobile") {
          width: 100%;
        }

        &:nth-child(2) {
          margin-right: 0;
          @include mq("mobile") {
            margin-right: 15px;
          }
        }

        &:last-child {
          margin-right: 0;
          @include mq("mobile") {
            margin-right: 15px;
          }
        }
      }
    }
  }

  .button {
    display: block;

    a {
      background: #7d40e6;
      border: 2px solid #fff;
      color: #fff;
      text-decoration: none;
      font-size: 24px;
      transition: 0.3s;
      padding: 10px 70px;

      &.disable {
        pointer-events: none;
        opacity: 0.5;
        cursor: no-drop;
      }

      &:hover {
        background: #fff;
        border: 2px solid #7d40e6;
        color: #7d40e6;
      }
    }
  }
}
</style>
