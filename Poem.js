// Create an array for some random adjectives, nouns, verbs and adverbs.
/* Old word list
var adjectives = ["beautiful", "ugly", "big", "small", "tall", "short", "fat", "thin", "old", "young"];
var nouns = ["dog", "cat", "person", "car", "tiger", "lion", "elephant", "bird", "fish", "snake"];
var verbs = ["runs", "jumps", "eats", "sleeps", "walks", "talks", "sings", "dances", "swims", "flies"];
var adverbs = ["quickly", "slowly", "happily", "sadly", "angrily", "loudly", "softly", "well", "badly", "madly"];
*/

// New word list from Poemiser.html
var adjectives = document.getElementById("adjectives").value.split(",");
var nouns = document.getElementById("nouns").value.split(",");
var verbs = document.getElementById("verbs").value.split(",");
var adverbs = document.getElementById("adverbs").value.split(",");

// Create a function that will take the random words and produce a poem in the form 'The [adjective] [noun] [verb] [adverb].'

function createPoem(){
    var adjective = adjectives[Math.floor(Math.random() * 10)];
    var noun = nouns[Math.floor(Math.random() * 10)];
    var verb = verbs[Math.floor(Math.random() * 10)];
    var adverb = adverbs[Math.floor(Math.random() * 10)];
    var poem = "The " + adjective + " " + noun + " " + verb + " " + adverb + ".";
    return poem;
}

//When the button is pressed, the text should appear in another part of the page which starts off empty.
var poem_button = document.getElementById("Poem");
    poem_button.addEventListener("click", function(){
    var poem = createPoem();
    var div = document.getElementById("PoemText");
    div.innerHTML = poem;
});