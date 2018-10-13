<template>
  <div class="home">
    <div class="overlay"></div>
    <div class="container">
      <div class="title">
        <h1>AYASOFYA</h1>
      </div>
      <div class="content">
        <p>Buradan sonra nereye gideceğini bul.</p>
      </div>
      <div class="button">
        <a href="#">BAŞLA</a>
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss">
.home {
  background: url("../assets/img/375935.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(125, 64, 230, 0.16);
    z-index: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    color: #fff;

    & .title {
      margin-bottom: 10px;

      h1 {
      font-size: 64px;
      margin: 0;
    }
    }

    & .content {
      margin-bottom: 60px;

      p {
        font-size: 24px;
        margin: 0;
      }
    }

    .button {
      display: block;

      a {
        background: #fff;
        border: 2px solid #7d40e6;
        color: #7d40e6;
        text-decoration: none;
        font-size: 24px;
        transition: 0.3s;
        padding: 10px 70px;

        &:hover {
          background: #7d40e6;
          border: 2px solid #fff;
          color: #fff;
        }
      }
    }
  }
}
</style>
