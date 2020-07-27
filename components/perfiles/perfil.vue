<template>
<v-flex class="text-center">
   <v-card
      color="pink"

      class="mb-5">

      <img
        src="img/iconos/cabello.png"
        width="200px"


        class="mb-5 rounded"
      >

      </v-card>

      <div>
        <h1>You don't have logged in</h1>

        <img
        src="img/iconos/logged1.png"
        width="300px"

        />

          <v-divider></v-divider>

             <div v-for="btn in item"
             :key="btn.type">
             <v-btn
             v-if="btn.type=='sign'"

         style="margin-top:10px"
         @click="dialog = !dialog, dialogLogin=false"
         color="primary"
        >
          {{btn.title}}
        </v-btn>

          <v-btn
             v-if="btn.type=='log'"

         style="margin-top:10px"
         @click="dialogLogin = !dialogLogin, dialog=false"
         color="primary"
        >
          {{btn.title}}
        </v-btn>

             </div>






         <dialogo
         :dialogLogin="dialogLogin"
         :dialog="dialog"
         />

      </div>
</v-flex>

</template>

<script>

import dialogo from "../dialog/dialog"
export default {
  middleware:"auth",
  components:{
    dialogo

  },
    data(){
      return{

        dialogLogin:false,
        dialog:false,
        item:[
          {
            title:"Logged in",
            type:"log"
          },
          {
            title:"Sign-In",
            type:"sign"
          }
        ]

      }
    }
}
</script>