<template>
    <div>



         <v-navigation-drawer
         :value="$store.state.drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      temporary
      app

    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >

        <v-list-item-avatar >
          <img
            :src="item.img"
            v-if="item.img"
            />

            <v-icon v-else>{{item.icon}}</v-icon>
        </v-list-item-avatar>

    

          <v-list-item-content>

        <v-btn 
        v-if="item.type=='sign'"
        @click="logout" 
        >
            logout

        </v-btn>

              <v-list-item-title v-if="item.type=='null'" v-text="item.title" />

            
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </div>




</template>
   <script>
    export default {
         data(){

      return {

          dialog:false,
          dialogLogin:false,
          clipped:false,
          miniVariant:false,
          items: [
    {
      img: this.$auth.$state.user.perfilPic,
      title: this.$auth.$state.user.user,
      to: '/'+this.$auth.$state.user.user,
      type:"null"
    },
    {
      icon: 'mdi-account',
       title:this.$auth.$state.user.userType,
      click:"true",
      type:"null"

    },
    {
      icon: 'mdi-account-off',
      title:"Log-out",
      click:"true",
      type:"sign"
    }
  ],
    }
    },
    methods:{
        logout(){
             const token=  this.$cookies.get("auth._token.local")
               
            this.$axios.delete("/loginUser")

            .then(res=>{

        
                if(res.data == "yes"){

                    this.$cookies.remove("auth._token.local")
                    localStorage.removeItem("auth._token.local")
                    location.reload()
                }
            })
            
            
        }
    }
 }


    </script>



