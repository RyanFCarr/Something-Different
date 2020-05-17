
//Define Vars
const API = "";
var query = "";
var youLink = "http://youtube.com/watch?v=";
var player;

//JS Library
gapi.load("client", start);

//Listen Change
$("#hobbyDropdown").on("change", function () {
  query = $(this).find("option:selected").text();
  loadVideo();
})

//Listen Submit
$("#searchForm").on("submit", function (event) {
  event.preventDefault()
  query = $("#hobbySearchInput").val()
  if (query !== null) {
    loadVideo();
  }
  $("#hobbySearchInput").empty()
})

function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client
    .init({
      apiKey: API,
      // Your API key will be automatically added to the Discovery Document URLs.
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"],
    })
}

function loadVideo() {
  //Check if has vaule
  if (query === "") {
    return
  }
  query += " tutorial";

  return gapi.client.youtube.search.list({
    part: "id",
    maxResults: 1,
    q: query,
    type: "video"
  }).then(
    function (response) {
      embedVideo(response.result.items[0])
    })
}


//Embed
function embedVideo(video) {
  if (window.player) {
    window.player.cueVideoById(video.id.videoId, 0)
  } else {
    window.player = new YT.Player('player', {
      videoId: video.id.videoId,
    });
    $("#player").addClass("has-ratio")
  }
}
