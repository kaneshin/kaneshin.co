<template>
  <div class="loader-balls">
    <div class="loader-balls__item" />
    <div class="loader-balls__item" />
    <div class="loader-balls__item" />
  </div>
</template>

<style lang="scss" scoped>
.loader-balls {
  padding: 14px 20px;
  width: 90px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__item {
    $anim-drt: 0.5s;
    $anim-ease: cubic-bezier(0.6, 0.05, 0.15, 0.95);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: lightgray;

    &:nth-child(1) {
      animation: bouncing $anim-drt alternate infinite $anim-ease;
    }
    &:nth-child(2) {
      animation: bouncing $anim-drt $anim-drt/4 alternate infinite $anim-ease backwards;
    }
    &:nth-child(3) {
      animation: bouncing $anim-drt $anim-drt/2 alternate infinite $anim-ease backwards;
    }
  }
}

@keyframes bouncing {
  0% {
    transform: translate3d(0, 2px, 0);
  }
  100% {
    transform: translate3d(0, -2px, 0);
  }
}
</style>
