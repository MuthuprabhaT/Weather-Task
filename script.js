const api = "6bb41f6fb187de5e728c889dea5fb385";

fetch("https://restcountries.com/v3.1/name/Afghanistan")
 .then((res) => res.json())
 .then((data) => {
    document.getElementById("display1").innerHTML=`Capital : ${data[0].capital} <br/><br/> Region : ${data[0].region} <br/><br/> Country Code : ${data[0].cca3}`
})

document.getElementById("weatherInfo1").addEventListener("click", () => {
    const country = "Afghanistan";

    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
        const capital = data[0].capital[0];
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api}`)
    })
    .then((response) => response.json())
    .then(data => {
        document.getElementById("details").innerHTML = `Weather is ${data.name} : ${data.weather[0].main}, Temp : ${data.main.temp}`;
    })
    .catch(err => console.log("Error:",err))
})

fetch("https://restcountries.com/v3.1/name/Åland Islands")
 .then((res) => res.json())
 .then((data) => {
   document.getElementById("display2").innerHTML=`Capital : ${data[0].capital} <br/><br/> Region : ${data[0].region} <br/><br/> Country Code : ${data[0].cca3}`
})

document.getElementById("weatherInfo2").addEventListener("click", () => {
    const country = "Åland Islands";

    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
        const capital = data[0].capital[0];
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api}`)
    })
    .then((response) => response.json())
    .then(data => {
        document.getElementById("details").innerHTML = `Weather is ${data.name} : ${data.weather[0].main}, Temp : ${data.main.temp}`;
    })
    .catch(err => console.log("Error:",err))
})

fetch("https://restcountries.com/v3.1/name/Albania")
 .then((res) => res.json())
 .then((data) => {
    document.getElementById("display3").innerHTML=`Capital : ${data[0].capital} <br/><br/> Region : ${data[0].region} <br/><br/> Country Code : ${data[0].cca3}`
})

document.getElementById("weatherInfo3").addEventListener("click", () => {
    const country = "Albania";

    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
        const capital = data[0].capital[0];
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api}`)
    })
    .then((response) => response.json())
    .then(data => {
        document.getElementById("details").innerHTML = `Weather is ${data.name} : ${data.weather[0].main}, Temp : ${data.main.temp}`;
    })
    .catch(err => console.log("Error:",err))
})
