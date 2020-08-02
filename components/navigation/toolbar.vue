<template>
     <v-app-bar
      :clipped-left="clipped"
      fixed
      app

    >
      <v-app-bar-nav-icon

      @click="$store.commit('drawer')"

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
</template>

<script>
export default {
    data(){

    return{

        clipped: false,
        fixed: false,

        miniVariant: false,
        title: 'Adsli',

      }


    }
}
</script>