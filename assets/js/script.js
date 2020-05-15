var queryURL = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles="

// var hobby = "Underwater Basket Weaving"
var hobby = "Mountain Biking"

$.ajax({
    url: queryURL + hobby + "&origin=*",
    method: "GET"
}).then(function(result){
    // console.log(result)
    // console.log(result.query.pages)
    // console.log(Object.keys(result.query.pages))
    var pageNum = Object.keys(result.query.pages)
    // console.log(result.query.pages[pageNum[0]])
    var summaryText = result.query.pages[pageNum[0]].extract
    // console.log(summaryText)
    var newPar = $("<p>")
    newPar.text(summaryText)
    $("#summaryText").prepend(newPar)
})