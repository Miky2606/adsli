<template>
  <v-app>


<toolbar
/>
<navigation
v-click-outside="onClickOutside"
/>

     <dialogo
    />


    <v-main>
      <v-main>


        <nuxt />

      </v-main>
    </v-main>
    <v-divider></v-divider>


  <v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.id"
        color="white"
        text
        rounded
        class="my-2"
        :to="link.path"
      >
        {{ link.name }}
      </v-btn>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>{{title}}</strong>
      </v-col>
    </v-row>
  </v-footer>
  </v-app>
</template>

<script>

import navigation from "../components/navigation/navDrawer/index"
import toolbar from "../components/navigation/toolbar"
import dialogo from "../components/dialog/dialog"


export default {


  components:{
    navigation,
    toolbar,
    dialogo
  },
  data(){
    return{
      ref:
      [
        {
          id:"1",
         name:"dialog",

      },
      {
        id:"2",
        name:"dialogLogin"
      }

      ]
      ,
      title: 'Adsli',
        links: [
          {
            id:"1",
            name: "Home",
            path: "/"
          },
          {
            id:"2",
            name: "Perfil",
            path: "/perfiles"
          },

        ]
    }
  },
             methods: {
      onClickOutside () {

           if(this.$store.state.drawer == false){

             this.$store.commit('drawer')

           }



      }
      }

}
</script>
