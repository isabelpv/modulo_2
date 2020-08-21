
//var nameHotel = "Amare";
//var locationHotel = "Marbella";
//var imgHotel = "https://www.viajeselcorteingles.es/imagenes/hoteles/espana/sanantoniodeportmany/d8drlm8j/31.jpg"
//;
//document.getElementById ("name-hotel").innerHTML = "Hotel " + nameHotel;


//document.getElementById("location-hotel").innerHTML = "Ubicacdo en " + locationHotel;


//document.getElementById("img-hotel").src = imgHotel;


//var rating = prompt ("Número de estrellas del 1 al 5");

//document.getElementById("rating").innerHTML = rating + " estrellas";

//var anonimato = confirm ("¿desea que su reseña sea anónima?");
//document.getElementById("anonymous").checked = anonimato

var hoteles = {
    Amare : {
        name: "Amare",
        location: "Marbella",
        img: "https://www.viajeselcorteingles.es/imagenes/hoteles/espana/sanantoniodeportmany/d8drlm8j/31.jpg",
    },
    Alanda : {
        name: "Alanda",
        location: "Marbella",
        img: "https://www.holidaywatchdog.com/img/resized/ext/ta/hotel-main/photo-w/18/6e/f6/19/alanda-hotel-marbella.jpg",
    },
};



var selectedHotel = prompt("Indique el nombre del hotel: Amare o Alanda");

document.getElementById("name-hotel").innerHTML =  "Hotel " + hoteles[selectedHotel].name;
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hoteles[selectedHotel]["location"];
document.getElementById("img-hotel").src = hoteles[selectedHotel].img;

var stars = {
    una:"<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:"<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:"<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:"<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:"<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
}

var rating = prompt ("Número de estrellas: una, dos, tres, cuatro o cinco");

document.getElementById("rating").innerHTML = stars[rating];

var anonimato = confirm ("¿desea que su reseña sea anónima?");
document.getElementById("anonymous").checked = anonimato