<template>
    <div >
        <v-col cols="12"
        lg="4"
        v-for="images in post"
        :key="images.node.display_url"
        >
        <img

        :src="images.node.display_url"
        />
        </v-col>
    </div>
</template>


<script>
import axios from "axios"
export default {
    data(){
        return{
            instagram:[],
            post:[]
        }
    },
    created(){
        axios.get("https://www.instagram.com/wisin?__a=1")
         .then(res=>{
             this.instagram = res.data.graphql.user
             this.post = this.instagram.edge_owner_to_timeline_media.edges
             console.log(this.post)
        })
    }
}
</script>