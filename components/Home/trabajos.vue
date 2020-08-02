<template>
    <v-container>
        <v-row style="padding:5%" class="text-center">
            <v-col cols="12" lg="4" style="margin-bottom:4%">
               <v-btn
               width="40%"
               height="100%"
               class="rounded-circle"
               :elevation="24"
               style="padding:2%;overflow:hidden"
              >
                    <a href="/" class="btn btn-primary">
                    <v-img src="/img/iconos/nails.svg" width="150px" />
                    </a>
               </v-btn>
               <h3 style="text-transform:capitalize;">nails</h3>
            </v-col>
     <v-col cols="12" lg="4" style="margin-bottom:4%">
               <v-btn width="40%" height="100%" :elevation="24"  class="rounded-circle" style="padding:2%;overflow:hidden">
                    <a href="/" class="btn btn-primary">
                    <v-img src="/img/iconos/cabello.png" width="150px" />
                    </a>
               </v-btn>
               <h3 style="text-transform:capitalize;">nails</h3>
            </v-col>
             <v-col cols="12" lg="4" style="margin-bottom:4%">
               <v-btn width="40%" height="100%"  class="rounded-circle" :elevation="24" style="padding:2%;overflow:hidden">
                    <a href="/" class="btn btn-primary">
                    <v-img src="/img/iconos/barba.png"  width="150px"/>
                    </a>
               </v-btn>
               <h3 style="text-transform:capitalize;">nails</h3>


            </v-col>
            <v-col cols="12">
                <v-btn
                to="/search"
                >
                    Ver mas
                </v-btn>

            </v-col>
        </v-row>
    </v-container>
</template>
