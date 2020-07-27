<template>
  <v-app>
         <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      temporary
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-btn v-if="item.type =='sign'"
             @click.stop="dialog = !dialog"
             >
             {{item.title}}
            </v-btn>

            <v-btn v-if="item.type =='log'"
             @click.stop="dialogLogin = !dialogLogin"
             >
             {{item.title}}
            </v-btn>
            <v-list-item-title v-if="item.type=='null'" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon
      @click.stop="drawer = !drawer"
      @click="dialog = false, dialogLogin = false"

      />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
       <v-btn
        icon
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
       <v-btn
        icon
        text
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-main>
        <dialogo :dialog="dialog"
        :dialogLogin="dialogLogin"/>
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
import dialogo from "../components/dialog/dialog"
export default {
  components:{
    dialogo
  },
  data () {
    return {
      dialog:false,
      dialogLogin:false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-account',
          title: 'Guest',
          to: '/perfil',
          type:"null"
        },
        {
          icon: 'mdi-login',
           title:"Log-in",
          click:"true",
          type:"log"

        },
        {
          icon: 'mdi-account-plus',
          title:"Sign-in",
          click:"true",
          type:"sign"
        }
      ],
      miniVariant: false,
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
  }
}
</script>
