
// ! NEGAÇÃO - UTILIZADO PARA NEGAR UMA VARIÁVEL
const token = localStorage.getItem("token_petfront");

if(!token) {
  // window.location = "../index.html";
} 

function logout() {
    localStorage.removeItem("token_petfront");
    window.location = "../index.html";
}
