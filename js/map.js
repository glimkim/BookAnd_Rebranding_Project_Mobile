var mapContainer = document.getElementById('map'),
    mapOption = { 
        center: new kakao.maps.LatLng(37.555583, 126.918046), 
        level: 4 
    };

var map = new kakao.maps.Map(mapContainer, mapOption); 

var imageSrc = '../images/bookand/map_icon.png', 
    imageSize = new kakao.maps.Size(64, 69), 
    imageOption = {offset: new kakao.maps.Point(27, 69)}; 
      
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.555583, 126.918046); 

var marker = new kakao.maps.Marker({
    position: markerPosition, 
    image: markerImage
});


marker.setMap(map);