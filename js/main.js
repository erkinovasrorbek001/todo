// let input = document.getElementById("input");
// let qoshish = document.getElementById("qoshish");
// let upadate = document.getElementById("update");
// let ayirish = document.getElementById("ayirish");
 
// let count = 0;

// function render(){
//    input.textContent = count;
// }
// qoshish.addEventListener("click",function(e){
//   count++
//   render();
// })

// update.addEventListener("click", function(e){
//     count =0;
//     render();
// })
// ayirish.addEventListener("click", function(e){
//     count--;
//     render();
// })







// let use = [
//     {name: "Ali", firstname : "Valiyev" },
//     {name: "Sherzod", firstname : "shermatov" },
//     {name: "akmal", firstname : "amanov" },
//     {name: "sarvar", firstname : "saparov" },
//     {name: "sadriddin", firstname : "davlatov" },
//     {name: "jasur", firstname : "sultonov" }
// ]

// function render(){
//     setTimeout((use) => {
//         uses.forEach((use) => {
//             let result = "";
//       result += `<h1> ${use.name}${use.firstname}</h1>`
//         })
//         document.body.innerHTML = result;
//     },2000);
// }
// render();





let apikey = "b8bf1a7e761c78d80dc87345252ed860";

function getWeather() {
    let city = document.getElementById("input").value; // <-- ID to'g'rilandi
    if (city === "") {
        alert("Shahar nomini kiriting");
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 404) {
                alert("Shahar topilmadi");
            } else {
                let result = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Harorat: ${data.main.temp}°C</p>
                    <p>Ob-havo: ${data.weather[0].description}</p>
                    <p>Shamol tezligi: ${data.wind.speed} m/s</p>
                `;
                document.getElementById("container").innerHTML = result;
            }
        })
        .catch(error => {
            console.error("Xatolik yuz berdi:", error);
            alert("Nimadir xato bo'ldi");
        });
}

document.querySelector(".button").addEventListener("click", getWeather);
