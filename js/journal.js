function Journal(title, body) {
  this.title = title;
  this.body = body;
}

Journal.prototype.countWords = function() {
  return countWord(this.body);
}

Journal.prototype.vowelsConsonants = function() {
  var vowCons = [0, 0];
  for (var i = 0; i < this.body.length; i++) {
    var letter = this.body.charAt(i);
    if (letter.match(/[A-Z]/i)) {
      if (letter.match(/[aeiou]/i)) {
        vowCons[0]++;
      } else {
        vowCons[1]++;
      }
    }
  }
  return vowCons;
}

Journal.prototype.getTeaser = function() {
  return getWords(8, this.body);
}

function countWord(str) {
  var words = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str.charAt(i);
    var prevLetter = str.charAt(i - 1);
    if ((!letter.match(/[A-Z]/i) && prevLetter.match(/[A-Z]/i)) || i === str.length - 1) {
      words++;
    }
  }
  return words;
}

function getWords(num, str) {
  var numWords = 0;
  var result = "";
  var keepGoing = true;
  while (numWords <= num && keepGoing) {
    for (var i = 0; i < str.length; i++) {
      var letter = str.charAt(i);
      var prevLetter = str.charAt(i - 1);
      if ((!letter.match(/[A-Z]/i) && prevLetter.match(/[A-Z]/i)) || i === str.length - 1) {
        numWords++;
      }
      if (i === str.length - 1) {
        keepGoing = false;
      }
      if (numWords <= num) {
        result += letter;
      }

    }
  }
  return result;
}
