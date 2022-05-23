const emailList = ["mario.rossi@gmail.com", "pietro.verdi@gmail.com", "carlo.rosa@gmail.com", "pippo.pluto@gmail.com"];

const loginEmails = document.getElementById("login-emails");
const btn = document.getElementById("button");
const acces = document.querySelector(".acces");

let login;

//     for (i = 0; i < emailList.length; i++) {

//     if(loginEmails.value === emailList[i]) {
//         login += 1;
//     }
// }

btn.addEventListener("click", function () {

for (i = 0; i < emailList.length; i++) {

    if(loginEmails.value === emailList[i]) {
        login = 1;
    }
}

if(login === 1) {
    console.log('accesso convalidato');
    acces.innerHTML += `Ok`;
} else {
    console.log('accesso negato');
    acces.innerHTML += `Denied`;
}

});
