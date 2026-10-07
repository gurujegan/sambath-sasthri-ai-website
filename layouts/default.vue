<template>
<div>
  <NavBar />
  <Nuxt />
  <Footer />
  </div>
</template>

<style>
html,body {
  background: #fde68a;
  height: 100%;
  font-family: adobe-garamond-pro, serif;
}

/* Smooth scroll effect */
html {
  scroll-behavior: smooth;
}

body > footer {
  position: sticky;
  top: 100vh;
}

</style>
