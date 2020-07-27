<template>
  <div>
    <v-container>
      <v-row :justify="justify" :align="justify">
        <v-col collg="4" :lg="4" :xl="4">
          <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item
              v-for="(item, i) in items"
              :key="i"
              :color="item.color"
              :icon="item.icon"
              fill-dot
            >
              <v-card :color="item.color" height="120px" dark>
                <v-card-title class="title">{{ item.paso }}</v-card-title>
                <v-card-text>
                  <p>{{ item.title }}</p>
                  <div v-if="item.buton != 'null'">
                    <v-btn depressed small color="success">
                      <a href="/" style="text-decoration:none;">
                        {{ item.buton }}
                      </a>
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        paso: 'Paso 1',
        title: 'Crear una cuenta',
        buton: 'Crear',
        color: 'red ',
        icon: 'mdi-account'
      },
      {
        paso: 'Paso 2',
        title: 'Activar tu cuenta',
        buton: 'null',
        color: 'purple darken-1',
        icon: 'mdi-check'
      },
      {
        paso: 'Paso 3',
        title: 'Mostrar tu trabajo',
        buton: 'null',
        color: 'green lighten-1',
        icon: 'mdi-eye'
      },
      {
        paso: 'Paso 4',
        title: 'Crear una red de clientes',
        buton: 'null',
        color: 'indigo',
        icon: 'mdi-network'
      }
    ],
    justify: 'center'
  })
}
</script>
