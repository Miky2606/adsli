<template>
    <div>

        
        <navLog v-if="$auth.loggedIn"/>

        <navSign v-else />


    </div>
</template>

<script>
    import navSign from "./navDrawer"
    import navLog from "./navLog"

export default {
    components:{
        navSign,
        navLog
    }
}
</script>