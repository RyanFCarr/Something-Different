var hobby = "";

$("#biking").on("click", function(){
  var hobbyName = ("Mountain Biking");
  wikiData(hobbyName)
})

$("#fishing").on("click", function(){
  var hobbyName = ("Fishing");
  wikiData(hobbyName)
})

$("#boardgames").on("click", function(){
  var hobbyName = ("Board Games");
  wikiData(hobbyName)
})

$("#astronomy").on("click", function(){
  var hobbyName = ("Astronomy");
  wikiData(hobbyName)
})

$("#running").on("click", function(){
  var hobbyName = ("Running");
  wikiData(hobbyName)
})

$("#surfing").on("click", function(){
  var hobbyName = ("Surfing");
  wikiData(hobbyName)
})


$("#hobbyDropdown").on("change", function(){
    
    var hobbyName = $(this).find("option:selected").text()

    if (hobbyName === "Select") {
        var hobbyName = "Hobby"
        
    } 
    
    wikiData(hobbyName)
})

$("#searchForm").on("submit", function(event) {
    event.preventDefault()
    var hobbyName = $("#hobbySearchInput").val()

    if (hobbyName !== null) {
        
        wikiData(hobbyName)
    }

    $("#hobbySearchInput").empty()
})



var queryURL =
  "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info%7Cextracts&redirects=1&inprop=url&exintro=1&explaintext=1&titles=";
// prop=extracts&exintro&explaintext&

// /w/api.php?action=query&format=json&prop=info%7Cextracts&redirects=1&inprop=url&exintro=1&explaintext=1&titles=
// /w/api.php?format=json&action=query&prop=info&inprop=url&prop=extracts&exintro&explaintext&redirects=1&titles=
function wikiData(hobbyName) {
  $.ajax({
    url: queryURL + hobbyName + "&origin=*",
    method: "GET",
  }).then(function (result) {

    var pageNum = Object.keys(result.query.pages);
    var summaryText = result.query.pages[pageNum[0]].extract;
    var pageLink = result.query.pages[pageNum[0]].canonicalurl;
    $("#wikiLink").attr("href", pageLink);
    $("#hobbyName").text(hobbyName)
    $("#summaryText").text(summaryText);
  });
}
