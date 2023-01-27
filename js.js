const url = "https://reqres.in/api/users?delay=3"; 

fetch(url)
.then(response => response.json())
.then(data => {
    let tabla = document.getElementById("tabla");

    for (let i = 0; i < data.data.length; i++) {
        let row = tabla.insertRow();

        let idCell = row.insertCell();
        let nameCell = row.insertCell();
        let emailCell = row.insertCell();
        let avatarCell = row.insertCell();
        let avatarImg = document.createElement("img");

        idCell.innerHTML = data.data[i].id;
        nameCell.innerHTML = data.data[i].first_name + " " + data.data[i].last_name;
        emailCell.innerHTML = data.data[i].email;
        avatarImg.src = data.data[i].avatar;
        avatarImg.classList.add("imagen");
        avatarCell.appendChild(avatarImg);
    }
});

let storedData = JSON.parse(localStorage.getItem("data"));
if (storedData && storedData.expiration > Date.now()) {
console.log(storedData.data);
} else {
fetch(url)
.then(response => response.json())
.then(data => {
let tiempoExpiracion = Date.now() + 60000;
localStorage.setItem("data", JSON.stringify({data: data, expiration: tiempoExpiracion}));
});
}

fetch(url)
.then(response => response.json())
.then(data => {
    let tiempoExpiracion = Date.now() + 60000; 
    localStorage.setItem("data", JSON.stringify({data: data, expiration: tiempoExpiracion}));
});