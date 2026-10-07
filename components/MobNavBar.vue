<template>
  <!-- Simulate a smartphone / tablet -->
  <div class="mobile-container" id="mob-navbar">
    <!-- Top Navigation Menu -->
    <div class="topnav btn-group mb-2 dropstart .shadow-5">
      <button
        type="button"
        class="btn btn-secondary dropdown-toggle icon"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="fa fa-bars"></i>
      </button>
      <ul class="dropdown-menu">
        <li><NuxtLink class="dropdown-item" to="/">home</NuxtLink></li>
        <li><NuxtLink class="dropdown-item" to="/about/">about</NuxtLink></li>
        <li><NuxtLink class="dropdown-item" to="/services/">services</NuxtLink></li>
        <li><NuxtLink class="dropdown-item" to="/contact/">contact</NuxtLink></li>
        <li><NuxtLink class="dropdown-item" to="/gallery/">gallery</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<style>
/* .topnav {
  overflow: hidden;
  background-color: #333;
  position: relative;
} */

.topnav #myLinks {
  display: none;
}

.topnav button.icon {
  background-color: #fde68a;
  display: block;
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  border-radius: 10px;
  padding: 15px 15px;
  font-size: 27px;
  color: black;
}

.topnav button:hover {
  background-color: #fde68a;
  color: black;
}

.active {
  background-color: lightseagreen;
}

#mob-navbar {
  display: none;
}

#mob-navbar .dropdown-menu {
  font-size: 2rem;
  font-weight: 100;
  text-decoration: underline;
  background: bisque;
  text-shadow: 2px 2px 33px #713f12;
  width: 17rem;
  text-align: center;
  margin-top: 0.5rem;
}

#mob-navbar a.dropdown-item:active {
  font-size: 40px;
  transition-property: font-size;
  transition-duration: 1s;
  transition-delay: 0.5s;
}

#mob-navbar a.dropdown-item:active {
  background-color: red;
}

@media all and (max-width: 1150px) and (min-width: 400px) {
  #mob-navbar {
    display: block;
  }
}

@media all and (min-width: 300px) and (max-width: 399px) {
    #mob-navbar {
    display: block;
  }
  .topnav button.icon {
    right: 12px;
    padding: 8px;
    font-size: 20px;
  }
}
</style>

<script>
export default {
  methods: {
    navFunction () {
      console.log('hello')
      const x = document.getElementById('myLinks')
      if (x.style.display === 'block') {
        x.style.display = 'none'
      } else {
        x.style.display = 'block'
      }
    }
  }
}
</script>
