


export default ({ app,redirect })=>{

    const token = app.$cookies.get("token");

    if(!token){

      return redirect('/')
    }

}