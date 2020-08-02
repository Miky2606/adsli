<template>
    <div >

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
        axios.get("https://www.instagram.com/miky__2606?__a=1")
         .then(res=>{
            console.log(res)

        })
    }

}
</script>