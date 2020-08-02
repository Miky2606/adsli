<template>
             <v-dialog


      :value="$store.state.dialog"
      max-width="490"
      content-class="dialog"
       persistent
    >


    <v-card
    class="text-center"
    style='padding:2%'

    >

    <v-icon
    size="90"

    >mdi-account</v-icon>


    <h1>User</h1>
    <div v-if="error.users">
              {{error.users}}
          </div>

    <v-form

      ref="form"
      v-model="valid"
      width="100%"

    >
      <v-text-field
        v-model="user.name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
        width="100%"
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

          <div v-if="error.adslier">
              {{error.adslier}}
          </div>
 <v-form

      ref="form"
      v-model="validInstagram"
      width="200px"

    >
      <v-text-field
        v-model="adslier.nameAds"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
        width="100px"
      ></v-text-field>

      <v-text-field
        v-model="adslier.emailAds"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="adslier.instagram"
        :rules="nameRules"
        label="Instagram"
        required
      ></v-text-field>

      <v-text-field
        v-model="adslier.passwordAds"
        :rules="passwordRules"
        label="Password"
        type="password"
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
        @click="createAdslier()"
        style="margin-bottom:10px;"
      >
        Validate
      </v-btn>


    </v-form>
    <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="$store.commit('dialog')">Close</v-btn>
        </v-card-actions>
    </v-card>

          </v-dialog>
</template>

<script>
import methodsAuth from "~/assets/methodsAuth";

class User{
    constructor(name,email,password){
        this.email=email,
        this.name=name,
        this.password=password


    }
}

class Adslier{
    constructor(name,email,password, instagram,emailAds,nameAds,passwordAds){

        this.emailAds=emailAds,
        this.nameAds=nameAds,
        this.passwordAds=passwordAds,
        this.instagram = instagram



    }
}
export default {

    mixins:[methodsAuth],
 data(){
        return{

            user: new User(),
            adslier: new Adslier(),

            perfilPic:"",
          checkbox:"",

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
            }

}
</script>