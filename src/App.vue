<template>
  <div id="app"> 
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style>
#app,
html,
body {
  margin: 0;
  padding: 0;
}
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
