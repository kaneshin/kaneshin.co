<template>
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
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Link from '~/models/Link'
import { links } from '~/utils'

@Component
export default class Terminal extends Vue {

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

.terminal {
  overflow: hidden;
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
