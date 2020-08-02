
export const state=()=>({
    drawer:true,
    dialog:false,
    dialoglogin:false
})

export const mutations = {
    drawer(state) {

      return state.drawer = !state.drawer

    },
    dialog(state){


        return state.dialog = !state.dialog
    },

    dialogLogin(state){


      return state.dialoglogin = !state.dialoglogin
  }




  }


