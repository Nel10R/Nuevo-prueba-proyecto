
function initMap() {
    const coord= { lat: 10.078705240252233, lng: -84.31729976655222 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: coord,
    });
    const marker = new google.maps.Marker({
      position: coord,
      map: map,
    });
  }
