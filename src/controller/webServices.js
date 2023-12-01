const urlApi = "http://localhost:4000/";
//console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"api/users/login",
    register:urlApi +"api/users/registration",
    getUserById:urlApi +"api/users/userById",
    uploadProfileImage:urlApi +"api/users/image-upload",
    updateProfileImage:urlApi +"api/users/update",
    catalogo:urlApi+"api/clase/catalogo",
    verClase:urlApi+"api/clase/ver-clase/",
}

export default urlWebServices;