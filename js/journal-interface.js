$(document).ready(function() {
  $("#new-journal-form").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var newEntry = new Journal(title, body);
    var numWords = newEntry.countWords();
    var numVowels = newEntry.vowelsConsonants()[0];
    var numCons = newEntry.vowelsConsonants()[1];
    $("#results").append("<li>Words: " + numWords + ", Vowels: " + numVowels + ", Consonants: " + numCons + "</li>");
    $("#results").append("<li>" + newEntry.getTeaser() + "</li>");
  })
})
