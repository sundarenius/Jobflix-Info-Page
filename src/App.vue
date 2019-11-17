<template>
  <v-app
    id="inspire"
    light
  >
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
    >
      <v-list class="mt-2" dense>
        <v-btn :to="item.link" class="secondary--text mb-2" block flat v-for="item in items" :key="item.text">
            <v-icon class="mr-4">{{ item.icon }}</v-icon>
              {{ item.text }}
            <v-spacer></v-spacer>
        </v-btn>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>

    <v-toolbar
      color="lightgrey"
      dense
      fixed
      clipped-left
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title @click="$router.push('/')" class="mr-5 align-center pointer">
          <span class="jobflix-title">
            <v-icon class="black--text play-icon-title">play_arrow</v-icon>
            <span class="jobflix-title1">Job</span><span class="jobflix-title2">flix</span>
          </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
      </v-layout>
    </v-toolbar>
    <v-content>
      <router-view style="margin-bottom:180px"/>
          <v-footer
            dark
            absolute
          >
          <v-card
            style="width:100vw;margin-top:-95px!important"
            flat
            tile
            class="indigo lighten-1 white--text text-xs-center"
          >
            <v-card-text>
              <a target="_blank" href="https://business.jobflix.se/">
                <v-btn
                  class="mx-3 white--text"
                  round
                  flat
                >
                  Företag
                </v-btn>
              </a>
              <a target="_blank" href="https://www.jobflix.se/">
                <v-btn
                  class="mx-3 white--text"
                  round
                  flat
                >
                  Arbetssökande
                </v-btn>
              </a>
                <v-btn
                  to="/kontakt"
                  class="mx-3 white--text"
                  round
                  flat
                >
                  Kontakt
                </v-btn>
              <v-btn
                to="/userterms"
                class="mx-3 white--text"
                round
                flat
              >
                Användarvillkor
              </v-btn>
              <v-btn
                to="/policy"
                class="mx-3 white--text"
                round
                flat
              >
                Sekretesspolicy
              </v-btn>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
              &copy;{{ new Date().toISOString().substr(0, 4) }} — <strong>Jobflix</strong>
            </v-card-text>
          </v-card>
        </v-footer>
    </v-content>

  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
        { icon: 'home', text: 'Start', link: '/' },
        { icon: 'help', text: 'Frågor & Svar', link: '/faq' },
        { icon: 'person', text: 'Kontakt', link: '/kontakt' },
        { icon: 'enhanced_encryption', text: 'Användarvillkor', link: '/userterms' },
        { icon: 'security', text: 'Sekretesspolicy', link: '/policy' }
      ]
    }),
    props: {
      source: String
    }
  }
</script>

<style>
.jobflix-title {
  padding-right: 1px;
  padding-left: 15px;
  border-radius: 3px;
  font-family: unset;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 25px;
  letter-spacing: 2px;
  position: relative;
}
.jobflix-title1 {
  color: #000;
}
.jobflix-title2 {
  color: #FF9800;
}
.play-icon-title {
  position: absolute;
  z-index: 2;
  left: -4px;
  top: 1px;
}
.pointer {
  cursor: pointer;
}
.display-1 {
  font-weight: bold;
}
a {
  text-decoration: none!important;
}
</style>
