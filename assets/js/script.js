var hobby = "";

$("#hobbyDropdown").change(function(){
    
    var hobbyName = $(this).find("option:selected").text()
    console.log($(this))
    console.log(hobbyName)

    if (hobbyName === "Select") {
        var hobbyName = "Hobby"
        
    } 
    
    wikiData(hobbyName)
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
    console.log(result)
    // console.log(result.query.pages)
    // console.log(Object.keys(result.query.pages))
    var pageNum = Object.keys(result.query.pages);
    // console.log(result.query.pages[pageNum[0]])
    var summaryText = result.query.pages[pageNum[0]].extract;
    var pageLink = result.query.pages[pageNum[0]].canonicalurl;
    console.log(summaryText)
    $("#wikiLink").attr("href", pageLink);
    $("#hobbyName").text(hobbyName)
    $("#summaryText").text(summaryText);
  });
}
