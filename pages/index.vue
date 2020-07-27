<template>
  <div class="home">


    <h1 class="text-center">title</h1>
    <perfilesInicio />
<v-divider></v-divider>
<h1 class="text-center">title</h1>
<trabajos />
<v-divider></v-divider>
    <h1 class="text-center">title</h1>
    <info />

    <v-divider></v-divider>
    <h1 class="text-center">title</h1>
    <WhoAre />
  </div>
</template>


<script>
import perfilesInicio from '../components/Home/PerfilInicio.vue'
import info from '../components/Home/informacion.vue'
import trabajos from '../components/Home/trabajos.vue'
import WhoAre from '../components/Home/WhoAre.vue'


export default {
  name: 'Home',
  components: {
    perfilesInicio,
    info,
    trabajos,
    WhoAre,

  }
}
</script>
