<template>
  <div class="box flex items-center justify-center">
    <div class="inner-box text-center">
      <h1 class="text-6xl font-extrabold">Error 404</h1>
      <p class="text-xl text-center">ups! Esta página no existe...</p>
      <router-link
        to="/"
        class="yellow-text mt-5 text-xl font-bold hover:underline"
      >
        Volve al home desde acá
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap');

$primary-color: #ffb400;

.box {
  font-family: 'Poppins', sans-serif;
  background-image: var(--background-img);
  position: relative;
  color: white;
  height: calc(100vh - (var(--header-height) + var(--footer-height)));

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(#333, 0.7);
  }
  h1 {
    font-family: 'Rubik', sans-serif;
  }
}

.inner-box {
  position: relative;
}

.yellow-text {
  color: $primary-color;
}
</style>
