<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout mt-4 px-3 row wrap>
        <v-flex xs12>
          <div class="display-1 black--text">
            Vad är Jobflix?
          </div>
        </v-flex>
        <v-flex class="body-1 py-4" xs12>
          <p>
            Jobflix är en plattform byggd för att underlätta kommunikationen mellan arbetsgivare och arbetssökande under
            en anställningsprocess. Vi skiftar fokus från traditionell rekrytering till ett nyare och modernare sätt att rekrytera på.
            Vi tror starkt att detta är framtiden för rekryteringsbranschen.
          </p>
        </v-flex>
        <v-flex @click="$router.push('/faq')" px-3 mb-2 xs12 md4>
          <v-card style="height:160px" class="navigationCard">
            <v-card-title class="justify-center">
              <div class="title">
                Vanliga frågor &amp; svar
              </div>
            </v-card-title>
            <v-card-text style="border-top:2px solid lightgrey">
              <div class="body-1 text-xs-center">
                Vi besvarar vanliga funderingar gällande tjänsten.
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex @click="$router.push('/kontakt')" px-3 mb-2 xs12 md4>
          <v-card style="height:160px" class="navigationCard">
            <v-card-title class="justify-center">
              <div class="title">
                Kontakt
              </div>
            </v-card-title>
            <v-card-text style="border-top:2px solid lightgrey">
              <div class="body-1 text-xs-center">
                Vi finns alltid tillgängliga på mail och svarar alltid inom 24 timmar. 
                Vi svarar på telefon under arbetstid.
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex @click="$router.push('/userterms')" px-3 mb-2 xs12 md4>
          <v-card style="height:160px" class="navigationCard">
            <v-card-title class="justify-center">
              <div class="title">
                Användarvillkor
              </div>
            </v-card-title>
            <v-card-text style="border-top:2px solid lightgrey">
              <div class="body-1 text-xs-center">
                Vill du först läsa igenom användarvillkoren för tjänsten så kan du göra det här!
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 mt-5 pb-4>
          <div style="font-weight:bold" class="title">
            Feedback
          </div>
        </v-flex>
        <v-flex xs12 pb-4>
          <div class="body-1">
            Har du feedback på något. En bugg du hittat, eller bara övriga funderingar så blir vi glada om du kontaktar oss på
            support@jobflix.se.
          </div>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  methods: {
    toFaq () {
      console.log('toFaq')
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.display-1 {
  font-weight: bold;
}
.navigationCard:hover {
  cursor: pointer;
  box-shadow: 1px 1px 2px 2px lightgrey;
}
</style>
