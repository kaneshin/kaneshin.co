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
        <terminal />
      </div>
    </section>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Terminal from '~/components/Terminal.vue'

@Component({
  components: {
    Terminal
  }
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
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
</style>
