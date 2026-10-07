<template>
  <div>
    <nav
      id="navbar"
      class="
        navbar
        h-28
        bg-amber-900
        flex
        justify-between
        items-center
        py-4
        px-6
        shadow-2xl
        navbar-expand-lg
        sticky
        lowercase
      "
    >
      <div class="container-fluid">
        <a href="/" class="logo ml-8 navbar-brand">
          <img
            src="/images/ss-new-logo-2.png"
            alt="logo"
            class="mt-6"
          />
          <!-- <h1 class="text-white text-3xl">

          <span class="fname capitalize">SambathSastri</span>
          <span class="fist">&#x1F44A;</span>
        </h1> -->
        </a>
        <address><span class="navbar-text shadow-2xl opacity-80"
          >&#9742; +91 - 94435 03868
        </span></address>
        <MobNavBar class="mobnavbar" />
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            class="
              fixed
              top-0
              justify-between
              items-center
              text-yellow-900
              navbar-nav
              mr-auto
              text-2xl
              font-semimedium
              mt-3
              tracking-wider
            "
          >
            <li
              class="nav-item ml-8 rounded-lg hover:bg-yellow-100 bg-yellow-300"
            >
              <NuxtLink
                to="/"
                class="block nav-link text-amber-900"
                id="nav-link"
                >Home</NuxtLink
              >
            </li>
            <li
              class="
                nav-item
                ml-8
                rounded-lg
                hover:bg-yellow-100 hover:text-amber-900
                bg-yellow-300
              "
            >
              <NuxtLink
                to="/about/"
                class="block nav-link text-amber-900"
                id="nav-link"
                >About</NuxtLink
              >
            </li>
            <li
              class="nav-item ml-8 rounded-lg hover:bg-yellow-100 bg-yellow-300"
            >
              <NuxtLink
                to="/services/"
                class="block nav-link text-amber-900"
                id="nav-link"
                >Services</NuxtLink
              >
            </li>
            <li
              class="nav-item ml-8 rounded-lg hover:bg-yellow-100 bg-yellow-300"
            >
              <NuxtLink
                to="/contact/"
                class="block nav-link text-amber-900"
                id="nav-link"
                >Contact</NuxtLink
              >
            </li>
            <li
              class="nav-item ml-8 rounded-lg hover:bg-yellow-100 bg-yellow-300"
            >
              <NuxtLink
                to="/gallery/"
                class="block nav-link text-amber-900"
                id="nav-link"
                >Gallery</NuxtLink
              >
            </li>
            <!-- <li
              class="nav-item ml-8 rounded-lg"
            >
              <MobNavBar class="mobnavbar" />
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

.logo img {
    width: 270px;
    height: 150px;
    object-fit: cover;
}
/* .logo {
  background: url("~/assets/images/ss-black.png");
  width: 50px;
  height: 50px;
} */

@media all and (min-width: 990px) and (max-width: 1150px) {
  #navbar .nav-item {
    display: none;
  }

  #navbar .navbar-text {
    margin: auto;
    text-align: center;
    margin-top: 2rem;
    width: 100%;
    left: -4px;
  }

  #navbar .logo {
    margin: auto;
    float: none;
    display: block;
    text-align: center;
    width: 100%;
    max-width: none;
    margin-top: -1.5rem;
  }
}

@media all and (max-width: 989px) and (min-width: 400px) {
  #navbar .nav-item {
    display: none;
  }

  #navbar .logo {
    margin: auto;
    float: none;
    display: block;
    text-align: center;
    width: 100%;
    max-width: none;
    margin-top: -4rem;
  }

  #navbar .navbar-text {
    margin: auto;
    text-align: center;
    margin-top: 0.25rem;
    width: 100%;
    left: 0;
  }
}

@media all and (min-width: 275px) and (max-width: 399px) {
  #navbar .logo {
    margin: auto;
    float: none;
    display: block;
    text-align: center;
    width: 100%;
    max-width: none;
    margin-top: -4rem;
  }

  #navbar .navbar-text {
    margin: auto;
    text-align: center;
    width: 100%;
    left: 0;
    margin-top: 0.25rem;
  }
}

/* Style the active link (or home/logo) */
.navbar .nuxt-link-exact-active {
  background-color: #04aa6d;
  color: white;
  border-radius: 5px;
}

.nav-item {
  height: 3rem;
  margin-top: 28px;
  width: 14rem;
  text-align: center;
  margin-left: 1rem;
  border-radius: 5px;
}

/* .nav-link {
  padding-top: 13px !important;
} */

.navbar-text {
  position: absolute;
  right: 7.5rem;
  color: blanchedalmond;
  margin-top: -3rem;
}

#navbarSupportedContent ul{
  width: 66.75%;
  position: absolute;
  right: 7.5rem;
}
</style>

<script>
export default {
  mounted () {
    window.onscroll = function () {
      myFunction()
    }
    // Get the navbar
    const navbar = document.getElementById('navbar')
    // Get the offset position of the navbar
    const sticky = navbar.offsetTop

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction () {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
      } else {
        navbar.classList.remove('sticky')
      }
    }
  },
  methods: {
    myFunction1 () {
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
