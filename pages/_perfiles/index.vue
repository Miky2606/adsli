<template>
  <v-layout>

<v-col cols="12" class="text-center"
v-if="load"
>

 <v-progress-circular indeterminate color="grey lighten-5" v-if="load"></v-progress-circular>

</v-col>


<v-col cols="12" v-else>
  <perfilesOut
v-if="this.perfiles != ''"
:name="perfiles"

/>

<perfil404 v-else />
</v-col>








  </v-layout>
</template>

<script>


import perfilesOut from "../../components/perfiles/perfilesOut"
import perfil404 from "../../components/perfiles/perfil404"
import axios from "axios"

export default {

  components:{

    perfilesOut,
    perfil404
  },
  data(){
    return{
      perfiles:this.$route.params.perfiles,
      load: true,


    }
  },mounted(){
    this.getUser()
  },
  methods:{

        getUser(){


          this.$axios.get(this.perfiles)
          .then(res=>{

            if(res.data == ""){
               this.perfiles = res.data;
               this.load = false

            }else{
             this.perfiles = res.data[0].user
             console.log(this.perfiles)
             this.load = false


            }






          })

        }


  }


}
</script>
