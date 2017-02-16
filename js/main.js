
   function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: {lat: -38.990058, lng: -77.109009}
        });
       

        var image = 'images/harwoodMapMarker.png';
        var harwoodMapMarker = new google.maps.Marker({
        position: {lat: -38.990058, lng: -77.109009},
        map: map,
        icon: image
      });

    }
    