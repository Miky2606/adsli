<template>
  <v-layout>

<perfilesOut
v-if="this.perfiles != ''"
:name="perfiles"

/>

<perfil404 v-else />




  </v-layout>
</template>

<script>


import perfilesOut from "../../components/perfiles/perfilesOut"
import perfil404 from "../../components/perfiles/perfil404"
import axios from "axios"
const api = require("../../components/api.js")
export default {

  components:{

    perfilesOut,
    perfil404
  },
  data(){
    return{
      perfiles:this.$route.params.perfiles


    }
  },mounted(){
    this.getUser()
  },
  methods:{

        getUser(){


          axios.get(api+this.perfiles)
          .then(res=>{

 console.log(res.data)
            if(res.data == ""){
               this.perfiles = res.data;

            }






          })

        }


  }


}
</script>
