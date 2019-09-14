<template>
  <div>
    <nav class="navbar header" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <div class="logo">
              <img src="~assets/images/icons/logo.png" />
            </div>
            Shintaro Kaneko
          </a>
        </div>
      </div>
    </nav>

    <nuxt />

    <footer>
      <div class="container">
        <div class="level">
          <div class="level-left copyright">
            <p><small>&copy; kaneshin</small></p>
          </div>
          <ul class="level-right links">
            <li v-for="(link, key) in links" :key="key" class="level-item">
              <a target="_blank" :href="link.href">
                <span class="icon">
                  <font-awesome-icon :icon="['fab', link.icon]"  />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Link from '~/models/Link'
import { links } from '~/utils'

@Component
export default class Default extends Vue {
  private links: Link[] = links
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

nav {
  box-shadow: 0 0 40px rgba(0,0,0,.08);
}

.navbar-brand {
  .logo {
    margin-right: 8px;
    border-radius: 50%;
    overflow: hidden;
    img {
      display: block;
    }
  }
  a {
    font-size: 1.25rem;
  }
}

footer {
  padding: 3rem 1.5rem 6rem;
  border-top: 1px solid $color-gray-07;

  .copyright {
    text-align: center;
    font-size: 1rem;
    letter-spacing: 1.5px;
  }
  .level-right {
    font-size: 1.5rem;
    .level-item {
      margin-left: 8px;
    }
  }
}
</style>
