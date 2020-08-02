<template>
    <div>



         <v-navigation-drawer
         :value="$store.state.drawer"
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

        <v-list-item-avatar v-if="$auth.loggedIn">
          <img
            :src="$auth.$state.user.perfilPic"
            />
        </v-list-item-avatar>
          <v-list-item-action v-else>

            <v-icon >{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>

        <v-btn
        v-if="item.type =='sign'"
        @click.stop="$store.commit('dialog', dialog)"
       >
       {{item.title}}
        </v-btn>



            <v-btn v-if="item.type =='log'"
            @click.stop="$store.commit('dialogLogin')"

             >
             {{item.title}}
            </v-btn>
            <v-list-item-title v-if="item.type=='null'" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </div>




</template>
   <script>
    export default {
         data(){

      return {

          dialog:false,
          dialogLogin:false,
          clipped:false,
          miniVariant:false,
          items: [
    {
      icon: 'mdi-account',
      title: 'Guest',
      to: '/ssss',
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
    }
    }
 }


    </script>



