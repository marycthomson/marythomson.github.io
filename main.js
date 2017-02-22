
   function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: {lat: 38.9900573, lng: -77.1088844}
        });
       

        var image = 'images/mapMarker.png';
        var harwoodMapMarker = new google.maps.Marker({
        position: {lat: 38.9900573, lng: -77.1088844},
        map: map,
        icon: image
      });

    }
    