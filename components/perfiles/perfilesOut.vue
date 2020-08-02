<template>
<v-flex class="text-center">

   <v-card
      color="pink"

      class="mb-5">

      <img
        src="/img/iconos/cabello.png"
        width="200px"

        class="mb-5 rounded"
      >

      <h1>{{name}}</h1>

      <v-container>
          <v-row>

              <v-col
              v-for="dato in datos"
              :key="dato.titulo"
              cols="12"
              lg="3"
              md="3">
              <h2>{{dato.titulo}}</h2>
              <v-btn :href="dato.path"
              target="_blank">{{dato.subtitulo}}</v-btn>

              </v-col>
          </v-row>
      </v-container>

      </v-card>

      <v-row>
    <v-col cols="12" sm="6" offset-sm="3">
      <v-card>
        <v-container fluid>
          <v-row>
            <v-col
              v-for="n in 9"
              :key="n"
              class="d-flex child-flex"
              cols="4"
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>


</v-flex>

</template>

<script>
export default {
  props:["name"],

    data(){
        return{

            datos:[
                {
                    titulo:"Precio por anuncio",
                    subtitulo:"5$"

            },
            {
                  titulo:"sigueme en instagram",
                  subtitulo:"@miki__2606",
                  path:"https://www.instagram.com/miky__2606/"
            },
            {
                titulo:"Followers en Instagram",
                subtitulo:"2000"

            },
            {
                titulo:"Contacto de whatsapp",
                subtitulo:"2393345678"

            }
            ]
        }
    }
}
</script>