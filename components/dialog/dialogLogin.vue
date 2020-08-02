<template>
  <v-row justify="center">
    <v-dialog  persistent max-width="490" :value="$store.state.dialoglogin">

      <v-card
      style="padding:2%"
      class="text-center"
      >

      <v-icon
      size="90">mdi-account</v-icon>

      <div v-if="error.dialogLogin">
          {{error.dialogLogin}}
      </div>

  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >


    <v-text-field
      v-model="emailLogin"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="passwordLogin"
      :counter="10"
      :rules="nameRules"
      label="Name"
      type="password"
      required
    ></v-text-field>



    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
     @click="loginUser"
    >
      Validate
    </v-btn>




  </v-form>
<v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="$store.commit('dialogLogin')">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import methodsAuth from "~/assets/methodsAuth";

export default {
    mixins:[methodsAuth],
        data: () => ({
      valid: true,
      passwordLogin: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      emailLogin: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),
}
</script>