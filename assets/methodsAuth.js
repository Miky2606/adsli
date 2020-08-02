import axios from "axios"


export default{

             data(){
                 return{
                    error:{
                        users:"",
                        adslier:"",
                        dialogLogin:''
                      },
                 }
             },
            methods:{

             createUser(){

                    const datos={
                          user:this.user.name,
                          email:this.user.email,
                          password:this.user.password,
                          userType:"user",
                          userVerified:"0",
                          perfilPic:"img/iconos/cabello.png"
                    }



                         this.$axios.post("/createUser",datos)
                         .then(res=>{
                             console.log(res.data)

                             if(res.data == ""){

                                this.error.users = "Usuario ya existe"
                             }else{

                                    try {


                                     this.$auth.loginWith('local', { data: datos })

                                   } catch (error) {
                                       console.log(error)

                                   }







                             }
                         })







                },

                createAdslier(){


                              axios.get("https://www.instagram.com/"+this.adslier.instagram+"?__a=1")
                         .then(res=>{



                               if(res.data.graphql.user.is_private == true){

                                  this.error.adslier = "Perfil Privado"

                               }else{


                                   const datos={
                                  user:this.adslier.nameAds,
                                  email:this.adslier.emailAds,
                                  password:this.adslier.passwordAds,
                                  instagram:this.adslier.instagram,
                                  userType:"adslier",
                                  userVerified:"0",
                                  perfilPic:res.data.graphql.user.profile_pic_url
                            }

                            this.$axios.post("/createAdslier", datos)
                            .then(res=>{

                                if(res.data == ""){
                                    this.error="yes"
                                }else{

                                this.$auth.loginWith('local',{data:datos})

                                }

                            })



                               }

                        })
                        .catch(err=>{
                            this.error = "perfil no existe"
                        })


                        },
                        loginUser(){
                            let datos = {
                                email:this.emailLogin,
                                password:this.passwordLogin
                            }

                            this.$axios.post("/loggedUser", datos)

                            .then(res=>{
                                if(res.data == ""){

                                    this.error.dialogLogin = "Usuario no existe"

                                }else{


                                    if(res.data == "password"){

                                        this.error.dialogLogin = "Password incorrecto"

                                    }else{

                                        this.$auth.loginWith('local', { data: datos })


                                    }

                                }
                            })

                            this.error.dalogLogin =''

                        }



            }
}

