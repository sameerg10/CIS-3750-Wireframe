
var myCenter=new google.maps.LatLng(43.54829927320823,-80.23911952972412);

  var mapProp={
    center:myCenter,
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  var map =new google.maps.Map(document.getElementById("googleMap"),mapProp);
  
var infoString = "This is a possible route for your Team Captain to choose from.";


function addRoutesToGoogleMap(){
var route1markerPoint = new google.maps.LatLng(43.543011229126584,-80.24002075195312);
var route1=[
  new google.maps.LatLng(43.54201578071559,-80.2421236038208),
  new google.maps.LatLng(43.5432289812755,-80.24096488952637),
  new google.maps.LatLng(43.543011229126584,-80.24002075195312),
  new google.maps.LatLng(43.54357116163468,-80.23851871490479),
  new google.maps.LatLng(43.54441105064565,-80.23409843444824),
  new google.maps.LatLng(43.543508947168384,-80.23268222808838)
];

var route2markerPoint = new google.maps.LatLng(43.542917906536296,-80.23611545562744);
var route2=[
  new google.maps.LatLng(43.54521982159683,-80.2446985244751),
  new google.maps.LatLng(43.542917906536296,-80.23611545562744),
  new google.maps.LatLng(43.54217132061327,-80.23487091064453)
];

var route3markerPoint = new google.maps.LatLng(43.54839258746785,-80.2351713180542);
var route3=[
  new google.maps.LatLng(43.54509539600288,-80.23946285247803),
  new google.maps.LatLng(43.550849810980594,-80.23173809051514)
];

  var infowindow = new google.maps.InfoWindow({
    content:infoString
  });
  
  
  var route1Path=new google.maps.Polyline({
    path:route1,
    strokeColor:"#0000FF",
    strokeOpacity:0.8,
    strokeWeight:2
    });
  route1Path.setMap(map);
  var route1marker=new google.maps.Marker({
    position:route1markerPoint,
  });
  route1marker.setMap(map);
  google.maps.event.addListener(route1marker, 'click', function() {
    infowindow.open(map,route1marker);
    document.getElementById("routeText").value = "Guelph Toronto Route";
  });
  
  
  var route2Path=new google.maps.Polyline({
    path:route2,
    strokeColor:"#FFFF00",
    strokeOpacity:0.8,
    strokeWeight:2
    });
  route2Path.setMap(map);
  var route2marker=new google.maps.Marker({
    position:route2markerPoint,
  });
  route2marker.setMap(map);
  google.maps.event.addListener(route2marker, 'click', function() {
    infowindow.open(map,route2marker);
    document.getElementById("routeText").value = "Guelph Neeve Route";
  });
  

  var route3Path=new google.maps.Polyline({
    path:route3,
    strokeColor:"#FF0000",
    strokeOpacity:0.8,
    strokeWeight:2
    });
  route3Path.setMap(map);
  var route3marker=new google.maps.Marker({
    position:route3markerPoint,
  });
  route3marker.setMap(map);
  google.maps.event.addListener(route3marker, 'click', function() {
    infowindow.open(map,route3marker);
    document.getElementById("routeText").value = "Guelph Alice Route";
  });
  
}
function mapMarkersSaySelected(){
  infoString = "You have selected this route";
}

function initializeGoogleRouteMap(){

  google.maps.event.addDomListener(window, 'load', initializeGoogleRouteMap);
}

