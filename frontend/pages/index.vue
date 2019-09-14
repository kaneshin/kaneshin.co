<template>
  <div>
    <section class="section home">
      <div class="container">
        <div class="profile">
          <img src="~assets/images/icons/shintaro.kaneko.jpg" />
        </div>
        <h1>
          Shintaro Kaneko (a.k.a kaneshin)
        </h1>
        <p class="location">
          <span class="marker-icon">
            <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
          </span>
          Tokyo, Japan
        </p>
        <p class="intro">
          I'm kaneshin who is the CTO at <a target=_blank href="https://eure.jp">Eureka</a>. I relish building things with Go, Vue.js (Nuxt.js), C and so on. I have strong experiences in my career. One is <a target=_blank href="https://golang.org/">the Go programming language</a>, another is <a target=_blank href="https://cloud.google.com/gcp/">Google Cloud Platform</a>, another is engineering management and the other is mathematics especially operating research.
        </p>
      </div>
    </section>

    <section class="her">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            "Be Natural"
          </h1>
          <h2 class="subtitle">
            what I mean by "This is be yourself".
          </h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="terminal is-size-7-mobile">
          <div class="window">
            <span class="circle red" />
            <span class="circle yellow" />
            <span class="circle green" />
          </div>
          <div v-show="lastLogin()">
            <p class="stdout">Last login: {{lastLogin()}} on kaneshin.co</p>
            <p>&nbsp;</p>
          </div>
          <p class="command">whoami</p>
          <p class="stdout">kaneshin</p>
          <p class="command">pwd</p>
          <p class="stdout">{{ location }}</p>
          <p class="command">ls -l</p>
          <p v-for="(link, key) in links" :key="key" class="stdout">
            {{link.name}}@ -> <a target="_blank" :href="link.href">{{link.href}}</a>
          </p>
          <p class="command">sudo -u root rm -rf /</p>
          <p class="stdout">rm: it is dangerous to operate recursively on ‘/’</p>
          <p class="stdout">rm: use --no-preserve-root to override this failsafe</p>
          <p class="command">sudo -i</p>
          <p class="as-root command">pwd</p>
          <p class="as-root stdout">/root</p>
          <p class="as-root command cursor">rm --no-preserve-root -rf /</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Link from '~/models/Link'
import { links } from '~/utils'

@Component({})
export default class Index extends Vue {

  private location: string = window.location.href

  private links: Link[] = links

  private lastLogin(): string {
    const val = this.$store.state.lastLogin
    const now = (new Date()).toString().slice(0, 24)
    this.$store.commit('setLastLogin', now)
    return val
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/variables";

.hero {
  min-height: 40px;
}

.home {
  .profile {
    margin: 0 auto 40px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
  }
  h1 {
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 1.1px;
    margin-bottom: 8px;
  }
  .location {
    margin-bottom: 20px;
    .marker-icon {
      margin-right: 4px;
    }
    text-align: center;
    font-size: 1rem;
  }

  .intro {
    line-height: 32px;
  }
}

.terminal {
  overflow: hidden;
  margin-top: 40px;
  padding: 6px 18px 18px;
  color: #fff;
  font-size: 1rem;
  font-family: $family-monospace;
  font-weight: bold;
  background: #000;
  border-radius: 4px;

  .window {
    margin-bottom: 12px;
    .circle {
      height: 12px;
      width: 12px;
      border-radius: 50%;
      display: inline-block;
      &.red {
        background-color: #FF5F56;
        border-color: #E0443E;
      }
      &.yellow {
        background-color: #FFBD2E;
        border-color: #DEA123;
      }
      &.green {
        background-color: #27C93F;
        border-color: #1AAB29;
      }
    }
  }

  a { color: #fff; }

  p {
    line-height: 1.45;
    $name-color: #5dea62;
    &.command {
      &:before {
        content: "kaneshin@localhost% ";
        color: $name-color;
      }
      &.as-root {
        &:before {
          content: "root@localhost:~# ";
          color: $name-color;
        }
      }
    }
    &.cursor {
      &:after {
        content: "_";
        background-color: #fff;
        animation: blink-animation 1170ms steps(2, start) infinite;
      }
    }
  }

  @keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
}
</style>
