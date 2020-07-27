<template>
<div>

          <v-dialog
      v-model="dialog"
      max-width="490"
      v-if="login=true"

    >

    <v-card
    width="100%"
    class="text-center"
    style='padding:2%'
    >

    <v-icon
    size="90"

    >mdi-account</v-icon>
    <h1>User</h1>

    <v-form

      ref="form"
      v-model="valid"
      width="200px"

    >
      <v-text-field
        v-model="user.name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
        width="100px"
      ></v-text-field>

      <v-text-field
        v-model="user.email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="user.password"
        :rules="passwordRules"
        label="Password"
        type="password"
        required
      ></v-text-field>




      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="createUser()"
        style="margin-bottom:10px;"
      >
        Validate
      </v-btn>


    </v-form>

    <v-divider></v-divider>
          <h1>Adslier</h1>
 <v-form

      ref="form"
      v-model="validInstagram"
      width="200px"

    >
      <v-text-field
        v-model="nameAdslier"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
        width="100px"
      ></v-text-field>

      <v-text-field
        v-model="emailAdslier"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="Instagram"
        :rules="nameRules"
        label="Instagram"
        required
      ></v-text-field>




      <v-checkbox
        v-model="checkboxInstagram"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <v-btn
        :disabled="!validInstagram"
        color="success"
        class="mr-4"

        style="margin-bottom:10px;"
      >
        Validate
      </v-btn>


    </v-form>
    </v-card>

          </v-dialog>


          <v-dialog
      v-model="dialogLogin"
      max-width="490"


    >
    hola

          </v-dialog>
          </div>
</template>


<script>
const api = require("../../components/api.js")
import axios from "axios"


class User{
    constructor(name,email,password){
        this.email=email,
        this.name=name,
        this.password=password
    }
}

export default {
    props:["dialog","dialogLogin"],
    data(){
return{
    user: new User(),
    error:"",

  Instagram:"",
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
      ],

      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ]

}
    },

    methods:{
        createUser(){
            const datos={
                  user:this.user.name,
                  email:this.user.email,
                  password:this.user.password,
                  userType:"user",
                  userVerified:"0"
            }
            axios.post(api+"createUser", datos)
            .then(res=>{

                if(res.data == ""){
                    this.error="yes"
                }

                this.$cookies.set("token",res.data.token, {
                    maxAge:60 * 60 * 24
                    })


            })
        }
    }
}
</script>