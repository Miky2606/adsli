<template>
<v-flex>
   <v-card
      color="pink"

      class="mb-5 text-center">

      <img
        src="/img/iconos/cabello.png"
        width="200px"

        class="mb-5 rounded"
      >

      <h1>Maria</h1>
      <h3>User</h3>

         <v-container>
             <v-row
             justify="center">

   <v-card
   class='text-center'>
    <v-tabs

      v-model="tab"
      background-color="primary"
      dark
    >
      <v-tab

        v-for="item in items"
        :key="item.tab"
      >
        <v-icon>{{item.tab}}</v-icon>
      </v-tab>
    </v-tabs>


  </v-card>

          </v-row>
      </v-container>

      </v-card>

 <v-tabs-items v-model="tab"
 >
      <v-tab-item
        v-for="item in items"
        :key="item.tab"
      >
      <v-container fluid>
           <v-row

          justify="center"
           >
          <v-col cols="12"
          lg="4">
          <v-list


          three-line>


        <v-divider
        ></v-divider>

        <v-list-item
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content v-if="item.name">
            <v-list-item-title v-html="item.name"></v-list-item-title>
            <v-list-item-subtitle v-html="item.content"></v-list-item-subtitle>
           <v-spacer />
               <v-btn
               v-if="item.perfil"
               :href="item.perfil"
               target="_blank">
                   <v-icon>mdi-instagram</v-icon>
               </v-btn>

               <v-col cols="12"
               lg="12"
               v-if="item.tools"
               >

                  <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
    >
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>





      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"

        style="margin-bottom:10px"
      >
        Change
      </v-btn>


    </v-form>

    <v-divider></v-divider>

            <h2 style="margin-top:10px">Change Account to Adslier Account</h2>


                  <v-form
      ref="form"
      v-model="validInstagram"
      :lazy-validation="lazy"
    >
      <v-text-field
        v-model="Instagram"
        :counter="10"
        :rules="nameRules"
        label="Instaram"
        required
      ></v-text-field>




      <v-btn
        :disabled="!validInstagram"
        color="success"
        class="mr-4"
        style="margin-bottom:10px"
      >
       Create<v-icon>mdi-instagram</v-icon>
      </v-btn>

                  </v-form>


               </v-col>

          </v-list-item-content>
        </v-list-item>

    </v-list>
          </v-col>
           </v-row>
      </v-container>
      </v-tab-item>
    </v-tabs-items>



</v-flex>

</template>

<script>
  export default {
        data(){

return{
  tab:true,
  lazy:true,

   items:[

     {
     tab:"mdi-history",
     avatar:"/img/iconos/cabello.png",
     name:"maria",
     content:"200 followers",
     perfil:"https://www.instagram.com/miky__2606/"
     },
   {
     tab:"mdi-heart",
     avatar:"/img/iconos/cabello.png",
     name:"maria",
     content:"200 followers",
     perfil:"https://www.instagram.com/miky__2606/"
   },
   {
   tab:"mdi-tools",
   tools:'true',
   avatar:"/img/iconos/cabello.png",
   name:"maria"
   }

   ],


  email:"",
  Instagram:"",
  name:"",
   emailAdslier:"",
  checkbox:"",
  nameAdslier:"",
  checkboxInstagram:"",

     valid:true,
     validInstagram:true,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
        nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ]
}
    }

  }
</script>