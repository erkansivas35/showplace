<template>
  <div id="app">
    <transition 
        :name="transitionName"
         mode="out-in"
         @beforeLeave="beforeLeave"
         @enter="enter">
      <router-view/>
    </transition>
  </div>
</template>

<script>
const DEFAULT_TRANSITION = "fade";

export default {
  name: "App",
  data() {
    return {
      prevHeight: 0,
      transitionName: DEFAULT_TRANSITION
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;
      if (transitionName === "slide") {
        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;
        transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
      }
      this.transitionName = transitionName || DEFAULT_TRANSITION;
      next();
    });
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    }
  }
};
</script>


<style lang="scss">
@import './assets/css/normalize.css';
@import url("https://fonts.googleapis.com/css?family=Oswald:300,400,700");

html,
body {
  font-family: "Oswald", sans-serif;
  overflow: hidden;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}

.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: #333;
}

.overlay {
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(125, 64, 230, 0.16);
  z-index: 0;
}
</style>
