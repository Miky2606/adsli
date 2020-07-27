<template>

<v-container>
    <v-row class="text-center">
            <v-col cols="12">
                 <h1>Buscador</h1>
            </v-col>

        <v-col cols="12"
        lg="4"
        v-for="perfil in items"
        :key="perfil.id"
        >

  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Followers: {{perfil.followers}}</div>
        <v-list-item-title class="headline mb-1">{{perfil.name}}</v-list-item-title>
        <v-list-item-subtitle>Precio por anuncio: ${{perfil.precio}}</v-list-item-subtitle>

      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"


      >
    <v-img

    src="/img/iconos/cabello.png"/>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn icon

      :href="perfil.perfil"
      ><v-icon>mdi-account</v-icon></v-btn>
      <v-btn icon
      target="_blank"
      :href="perfil.perfilInstagram"><v-icon>mdi-instagram</v-icon></v-btn>
    </v-card-actions>
  </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    data(){
        return{
            items:[
                {
                    id:'5',
                    name: "maria",
                    perfilInstagram: 'https://www.instagram.com/miky__2606/',
                    perfil:"http://10.0.0.114:8100/Maria",
                    followers:'3000',
                    precio:"5"
                },
                  {
                    id:'8',
                    name: "Felipe",
                    perfil: 'http://10.0.0.114:8100/felipe',
                    perfilInstagram: 'https://www.instagram.com/libet_2606/',
                    followers:'1000',
                    precio:"5"
                }
            ]
        }
    }

}
</script>