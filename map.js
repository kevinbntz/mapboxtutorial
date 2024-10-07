mapboxgl.accessToken = "pk.eyJ1Ijoia2Jlbml0ZXoiLCJhIjoiY20xanRkNDJjMDU2bDJpb2tkaTltN2R5NiJ9.LHpehjaR0swXOUvk8D5F9w"

// CREATE A NEW OBJECT CALLED MAP
const map = new mapboxgl.Map({
    container: "map", // container ID for the map object (this points to the HTML element)
    style: "mapbox://styles/kbenitez/cm1jtlviw004a01pdb4x7btn4", //YOUR STYLE URL
    center: [-73.9442, 40.6482], // starting position [lng, lat] (google brooklyn)
    zoom: 11, // starting zoom (adjust it as you wish)
    projection: "globe", // display the map as a 3D globe
  });
  