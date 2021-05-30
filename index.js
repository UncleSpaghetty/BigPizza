function initMap() {
    // [START maps_add_map_instantiate_map]
    const uluru = { lat: 40.014755, lng: 18.1564878 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: uluru,
    });
    // [END maps_add_map_instantiate_map]
    // [START maps_add_map_instantiate_marker]
    // The marker
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
    // [END maps_add_map_instantiate_marker]
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}