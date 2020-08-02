<template>
<div>


<dialogSign />

<dialoglogin />


          </div>
</template>


<script>

import dialogSign from "./dialogSign"
import dialoglogin from "./dialogLogin"



export default {

    components:{
      dialogSign,
      dialoglogin

    }

}
</script>

<style>
.dialog{
  overflow-x:hidden
}
</style>