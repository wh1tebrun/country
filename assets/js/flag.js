counter = 0
mistake = 0
const currentContinent = localStorage.getItem("selectedContinent");

function updateHighscore(newScore) {
    // get current highscore
    const oldHighscore = parseFloat(localStorage.getItem('score'))

    if (oldHighscore == null // if it doesn't exist yet
        || oldHighscore < newScore) { // or if it's smaller than the new score (I assume bigger means better here)
        // current highscore needs to be updated
        localStorage.setItem('score', newScore)
        // html needs to be updated
        document.getElementById("best_score").innerHTML = localStorage.getItem('score')
    }
}
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
timePassed = setInterval(setTime, 1000);

function setTime() {

    if (mistake !== 0) {
        return
    }
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}
function openResult() {
    document.getElementById("menu").style.display = "block";
}
function closeResult() {
    document.getElementById("menu").style.display = "none";
}
function randomizer(p1, p2, p3, p4) {
    if (Math.floor(getRandomArbitrary(0, 2)) % 2 == 0) {

        if (Math.floor(getRandomArbitrary(0, 2)) % 2 == 0) {
            return p1

        }

        else {
            return p3
        }

    }

    else {
        if (Math.floor(getRandomArbitrary(0, 2)) % 2 == 0) {
            return p2

        }


        else {
            return p4
        }
    }
}

const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();






function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

imgs = Array.from(document.getElementsByTagName("img"))
imgsrcsAfrica = [
    "https://country-fawn.vercel.app/assets/flags/congo.jpg",
    "https://country-fawn.vercel.app/assets/flags/mali.jpg",
    "https://country-fawn.vercel.app/assets/flags/egypt.jpg",
    "https://country-fawn.vercel.app/assets/flags/eswatini.jpg",
    "https://country-fawn.vercel.app/assets/flags/rwanda.jpg",
    "https://country-fawn.vercel.app/assets/flags/uganda.jpg",
    "https://country-fawn.vercel.app/assets/flags/chad.jpg",
    "https://country-fawn.vercel.app/assets/flags/namibia.jpg",
    "https://country-fawn.vercel.app/assets/flags/angola.jpg",
    "https://country-fawn.vercel.app/assets/flags/ghana.jpg",
    "https://country-fawn.vercel.app/assets/flags/comoros.jpg",
    "https://country-fawn.vercel.app/assets/flags/zimbabwe.jpg",
    "https://country-fawn.vercel.app/assets/flags/tunisia.jpg",
    "https://country-fawn.vercel.app/assets/flags/nigeria.jpg",
    "https://country-fawn.vercel.app/assets/flags/eritrea.jpg",
    "https://country-fawn.vercel.app/assets/flags/burundi.jpg",
    "https://country-fawn.vercel.app/assets/flags/cape-verde.jpg",
    "https://country-fawn.vercel.app/assets/flags/niger.jpg",
    "https://country-fawn.vercel.app/assets/flags/democratic-republic-of-the-congo.jpg",
    "https://country-fawn.vercel.app/assets/flags/gabon.jpg",
    "https://country-fawn.vercel.app/assets/flags/somalia.jpg",
    "https://country-fawn.vercel.app/assets/flags/sudan.jpg",
    "https://country-fawn.vercel.app/assets/flags/madagascar.jpg",
    "https://country-fawn.vercel.app/assets/flags/mauritius.jpg",
    "https://country-fawn.vercel.app/assets/flags/libya.jpg",
    "https://country-fawn.vercel.app/assets/flags/senegal.jpg",
    "https://country-fawn.vercel.app/assets/flags/tanzania.jpg",
    "https://country-fawn.vercel.app/assets/flags/sao-tome-and-principe.jpg",
    "https://country-fawn.vercel.app/assets/flags/morocco.jpg",
    "https://country-fawn.vercel.app/assets/flags/south-africa.jpg",
    "https://country-fawn.vercel.app/assets/flags/togo.jpg",
    "https://country-fawn.vercel.app/assets/flags/equatorial-guinea.jpg",
    "https://country-fawn.vercel.app/assets/flags/liberia.jpg",
    "https://country-fawn.vercel.app/assets/flags/benin.jpg",
    "https://country-fawn.vercel.app/assets/flags/seychelles.jpg",
    "https://country-fawn.vercel.app/assets/flags/croatia.jpg",
    "https://country-fawn.vercel.app/assets/flags/mauritania.jpg",
    "https://country-fawn.vercel.app/assets/flags/djibouti.jpg",
    "https://country-fawn.vercel.app/assets/flags/guinea-bissau.jpg",
    "https://country-fawn.vercel.app/assets/flags/central-african-republic.jpg",
    "https://country-fawn.vercel.app/assets/flags/zambia.jpg",
    "https://country-fawn.vercel.app/assets/flags/cote-d'ivoire.jpg",
    "https://country-fawn.vercel.app/assets/flags/burkina-faso.jpg",
    "https://country-fawn.vercel.app/assets/flags/malawi.jpg",
    "https://country-fawn.vercel.app/assets/flags/south-sudan.jpg",
    "https://country-fawn.vercel.app/assets/flags/lesotho.jpg",
    "https://country-fawn.vercel.app/assets/flags/gambia.jpg",
    "https://country-fawn.vercel.app/assets/flags/cameroon.jpg",
    "https://country-fawn.vercel.app/assets/flags/mozambique.jpg",
    "https://country-fawn.vercel.app/assets/flags/ethiopia.jpg",
    "https://country-fawn.vercel.app/assets/flags/algeria.jpg",
    "https://country-fawn.vercel.app/assets/flags/botswana.jpg",
    "https://country-fawn.vercel.app/assets/flags/sierra-leone.jpg",
    "https://country-fawn.vercel.app/assets/flags/guinea.jpg"

]

imgsrcsAsia = [
    "https://country-fawn.vercel.app/assets/flags/malaysia.jpg",
    "https://country-fawn.vercel.app/assets/flags/bhutan.jpg",
    "https://country-fawn.vercel.app/assets/flags/india.jpg",
    "https://country-fawn.vercel.app/assets/flags/yemen.jpg",
    "https://country-fawn.vercel.app/assets/flags/saudi-arabia.jpg",
    "https://country-fawn.vercel.app/assets/flags/laos.jpg",
    "https://country-fawn.vercel.app/assets/flags/palestine.jpg",
    "https://country-fawn.vercel.app/assets/flags/iran.jpg",
    "https://country-fawn.vercel.app/assets/flags/indonesia.jpg",
    "https://country-fawn.vercel.app/assets/flags/bahrain.jpg",
    "https://country-fawn.vercel.app/assets/flags/pakistan.jpg",
    "https://country-fawn.vercel.app/assets/flags/uzbekistan.jpg",
    "https://country-fawn.vercel.app/assets/flags/oman.jpg",
    "https://country-fawn.vercel.app/assets/flags/turkey.jpg",
    "https://country-fawn.vercel.app/assets/flags/south-korea.jpg",
    "https://country-fawn.vercel.app/assets/flags/tajikistan.jpg",
    "https://country-fawn.vercel.app/assets/flags/united-arab-emirates.jpg",
    "https://country-fawn.vercel.app/assets/flags/bangladesh.jpg",
    "https://country-fawn.vercel.app/assets/flags/mongolia.jpg",
    "https://country-fawn.vercel.app/assets/flags/china.jpg",
    "https://country-fawn.vercel.app/assets/flags/cambodia.jpg",
    "https://country-fawn.vercel.app/assets/flags/russia.jpg",
    "https://country-fawn.vercel.app/assets/flags/singapore.jpg",
    "https://country-fawn.vercel.app/assets/flags/kyrgyzstan.jpg",
    "https://country-fawn.vercel.app/assets/flags/japan.jpg",
    "https://country-fawn.vercel.app/assets/flags/syria.jpg",
    "https://country-fawn.vercel.app/assets/flags/vietnam.jpg",
    "https://country-fawn.vercel.app/assets/flags/turkmenistan.jpg",
    "https://country-fawn.vercel.app/assets/flags/kazakhstan.jpg",
    "https://country-fawn.vercel.app/assets/flags/israel.jpg",
    "https://country-fawn.vercel.app/assets/flags/timor-leste.jpg",
    "https://country-fawn.vercel.app/assets/flags/brunei.jpg",
    "https://country-fawn.vercel.app/assets/flags/afghanistan.jpg",
    "https://country-fawn.vercel.app/assets/flags/armenia.jpg",
    "https://country-fawn.vercel.app/assets/flags/azerbaijan.jpg",
    "https://country-fawn.vercel.app/assets/flags/sri-lanka.jpg"
]

imgsrcsEuropa = [
    "https://country-fawn.vercel.app/assets/flags/luxembourg.jpg",
    "https://country-fawn.vercel.app/assets/flags/albania.jpg",
    "https://country-fawn.vercel.app/assets/flags/denmark.jpg",
    "https://country-fawn.vercel.app/assets/flags/sweden.jpg",
    "https://country-fawn.vercel.app/assets/flags/estonia.jpg",
    "https://country-fawn.vercel.app/assets/flags/czech-republic.jpg",
    "https://country-fawn.vercel.app/assets/flags/bosnia-and-herzegovina.jpg",
    "https://country-fawn.vercel.app/assets/flags/finland.jpg",
    "https://country-fawn.vercel.app/assets/flags/ireland.jpg",
    "https://country-fawn.vercel.app/assets/flags/iceland.jpg",
    "https://country-fawn.vercel.app/assets/flags/slovakia.jpg",
    "https://country-fawn.vercel.app/assets/flags/belarus.jpg",
    "https://country-fawn.vercel.app/assets/flags/germany.jpg",
    "https://country-fawn.vercel.app/assets/flags/san-marino.jpg",
    "https://country-fawn.vercel.app/assets/flags/greece.jpg",
    "https://country-fawn.vercel.app/assets/flags/hungary.jpg",
    "https://country-fawn.vercel.app/assets/flags/spain.jpg",
    "https://country-fawn.vercel.app/assets/flags/monaco.jpg",
    "https://country-fawn.vercel.app/assets/flags/ukraine.jpg",
    "https://country-fawn.vercel.app/assets/flags/croatia.jpg",
    "https://country-fawn.vercel.app/assets/flags/liechtenstein.jpg",
    "https://country-fawn.vercel.app/assets/flags/cyprus.jpg",
    "https://country-fawn.vercel.app/assets/flags/montenegro.jpg",
    "https://country-fawn.vercel.app/assets/flags/romania.jpg",
    "https://country-fawn.vercel.app/assets/flags/latvia.jpg",
    "https://country-fawn.vercel.app/assets/flags/serbia.jpg",
    "https://country-fawn.vercel.app/assets/flags/poland.jpg",
    "https://country-fawn.vercel.app/assets/flags/moldova.jpg",
    "https://country-fawn.vercel.app/assets/flags/georgia.jpg",
    "https://country-fawn.vercel.app/assets/flags/italy.jpg",
    "https://country-fawn.vercel.app/assets/flags/lithuania.jpg",
    "https://country-fawn.vercel.app/assets/flags/france.jpg",
    "https://country-fawn.vercel.app/assets/flags/bulgaria.jpg",
    "https://country-fawn.vercel.app/assets/flags/vatican-city.jpg",
    "https://country-fawn.vercel.app/assets/flags/switzerland.jpg",
    "https://country-fawn.vercel.app/assets/flags/portugal.jpg",
    "https://country-fawn.vercel.app/assets/flags/netherlands.jpg",
    "https://country-fawn.vercel.app/assets/flags/slovenia.jpg",
    "https://country-fawn.vercel.app/assets/flags/belgium.jpg",
    "https://country-fawn.vercel.app/assets/flags/united-kingdom.jpg"
]

imgsrcsNorthAmerica = [
    "https://country-fawn.vercel.app/assets/flags/united-states.jpg",
    "https://country-fawn.vercel.app/assets/flags/honduras.jpg",
    "https://country-fawn.vercel.app/assets/flags/el-salvador.jpg",
    "https://country-fawn.vercel.app/assets/flags/guatemala.jpg",
    "https://country-fawn.vercel.app/assets/flags/cuba.jpg",
    "https://country-fawn.vercel.app/assets/flags/dominica.jpg",
    "https://country-fawn.vercel.app/assets/flags/nicaragua.jpg",
    "https://country-fawn.vercel.app/assets/flags/saint-lucia.jpg",
    "https://country-fawn.vercel.app/assets/flags/canada.jpg",
    "https://country-fawn.vercel.app/assets/flags/costa-rica.jpg",
    "https://country-fawn.vercel.app/assets/flags/panama.jpg",
    "https://country-fawn.vercel.app/assets/flags/belize.jpg",
    "https://country-fawn.vercel.app/assets/flags/saint-kitts-and-nevis.jpg",
    "https://country-fawn.vercel.app/assets/flags/bahamas.jpg",
    "https://country-fawn.vercel.app/assets/flags/jamaica.jpg",
    "https://country-fawn.vercel.app/assets/flags/barbados.jpg",
    "https://country-fawn.vercel.app/assets/flags/trinidad-and-tobago.jpg",
    "https://country-fawn.vercel.app/assets/flags/antigua-and-barbuda.jpg",
    "https://country-fawn.vercel.app/assets/flags/saint-vincent-grenadines.jpg",
    "https://country-fawn.vercel.app/assets/flags/dominican-republic.jpg",
    "https://country-fawn.vercel.app/assets/flags/grenada.jpg",
    "https://country-fawn.vercel.app/assets/flags/haiti.jpg"
]

imgsrcsSouthAmerica = [
    "https://country-fawn.vercel.app/assets/flags/bolivia.jpg",
    "https://country-fawn.vercel.app/assets/flags/chile.jpg",
    "https://country-fawn.vercel.app/assets/flags/suriname.jpg",
    "https://country-fawn.vercel.app/assets/flags/peru.jpg",
    "https://country-fawn.vercel.app/assets/flags/argentina.jpg",
    "https://country-fawn.vercel.app/assets/flags/venezuela.jpg",
    "https://country-fawn.vercel.app/assets/flags/paraguay.jpg",
    "https://country-fawn.vercel.app/assets/flags/brazil.jpg",
    "https://country-fawn.vercel.app/assets/flags/guyana.jpg",
    "https://country-fawn.vercel.app/assets/flags/uruguay.jpg",
    "https://country-fawn.vercel.app/assets/flags/colombia.jpg",
    "https://country-fawn.vercel.app/assets/flags/ecuador.jpg"
]

imgsrcsOcenia = [
    "https://country-fawn.vercel.app/assets/flags/micronesia.jpg",
    "https://country-fawn.vercel.app/assets/flags/solomon-islands.jpg",
    "https://country-fawn.vercel.app/assets/flags/vanuatu.jpg",
    "https://country-fawn.vercel.app/assets/flags/samoa.jpg",
    "https://country-fawn.vercel.app/assets/flags/australia.jpg",
    "https://country-fawn.vercel.app/assets/flags/marshall-islands.jpg",
    "https://country-fawn.vercel.app/assets/flags/tonga.jpg",
    "https://country-fawn.vercel.app/assets/flags/kiribati.jpg",
    "https://country-fawn.vercel.app/assets/flags/tuvalu.jpg",
    "https://country-fawn.vercel.app/assets/flags/palau.jpg",
    "https://country-fawn.vercel.app/assets/flags/fiji.jpg",
    "https://country-fawn.vercel.app/assets/flags/nauru.jpg",
    "https://country-fawn.vercel.app/assets/flags/new-zealand.jpg"
]

if (!currentContinent) {
    imgsrcs = ((((imgsrcsAfrica.concat(imgsrcsAsia)).concat(imgsrcsEuropa)).concat(imgsrcsNorthAmerica)).concat(imgsrcsOcenia)).concat(imgsrcsSouthAmerica)

}
else if (currentContinent == "Asia") {
    imgsrcs = imgsrcsAsia;
}
else if (currentContinent == "Africa") {
    imgsrcs = imgsrcsAfrica;
}
else if (currentContinent == "Europe") {
    imgsrcs = imgsrcsEuropa;
}
else if (currentContinent == "North America") {
    imgsrcs = imgsrcsNorthAmerica;
}
else if (currentContinent == "Oceania") {
    imgsrcs = imgsrcsOcenia;
}
else if (currentContinent == "South America") {
    imgsrcs = imgsrcsSouthAmerica;
}
else if (currentContinent == "All") {
    imgsrcs = ((((imgsrcsAfrica.concat(imgsrcsAsia)).concat(imgsrcsEuropa)).concat(imgsrcsNorthAmerica)).concat(imgsrcsOcenia)).concat(imgsrcsSouthAmerica)
}

var myCountryName = document.getElementById("country-name");
var myOutOfScore = document.getElementsByClassName("out-of-score")
var flagsDone = document.getElementById("flags-done")
var flagsDone2 = document.getElementById("flags-done2")
var valueOfRound = document.getElementById("value-of-round")
correctFlags = Array.from(document.getElementsByClassName("small-flag"))
playAgainButtons = Array.from(document.getElementsByClassName("stats-btn__again2"))

// Function to replace the image source of the image at delIndex with a random image from imgsrcs
// and then remove the used image source from imgsrcs
function replaceAndRemoveImage(delIndex, imgsrcsCopy) {
    const rndNum = Math.floor(getRandomArbitrary(0, imgsrcsCopy.length));
    imgs[delIndex].src = imgsrcsCopy[rndNum];
    imgs[delIndex].id = imgs[delIndex].src.slice(45, -4).replaceAll("-", " ").toUpperCase();
    imgsrcsCopy.splice(rndNum, 1); // Remove the used image source
    return imgs[delIndex];
}

// When the window loads, replace the images with unique flags
window.onload = () => {
    closeResult();
    console.log(correctFlags[0].src);
    setupNewRound();
    myOutOfScore.innerText = output.innerHTML;
};
function setupNewRound() {
    // Create a copy of imgsrcs for this round
    let imgsrcsCopy = imgsrcs.slice();

    // Replace images with unique flags
    id0 = replaceAndRemoveImage(0, imgsrcsCopy);
    id1 = replaceAndRemoveImage(1, imgsrcsCopy);
    id2 = replaceAndRemoveImage(2, imgsrcsCopy);
    id3 = replaceAndRemoveImage(3, imgsrcsCopy);

    // Choose one of the images as the chosenImg
    chosenImg = randomizer(id0, id1, id2, id3);
    myCountryName.innerText = chosenImg.id;
}


const flagPressed = e => {
    const id = e.target.id;  // Get ID of Clicked Element
    return id
}
function removeImageListener(event) {
    if (mistake !== 0) {
        return;
    }

    const img = event.target;
    const imgId = img.getAttribute("id");
    const i = img._index;

    if (myCountryName.innerText == imgId) {
        // Correct flag clicked

        // Increment the counter
        counter++;
        flagsDone2.innerText = counter;

        if (counter >= parseInt(output.innerHTML, 10)) {
            // Game over - player has won
            localStorage.setItem('mostRecentScore', totalSeconds);
            imgs.forEach((img) => {
                img.style.visibility = "hidden";
            });

            jsConfetti.addConfetti({
                emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
            }).then(() => jsConfetti.addConfetti());

            playAgainButtons[0].style.visibility = 'visible';
        } else {
            // Proceed to the next round
            setupNewRound();
        }

        if (counter >= 1) {
            document.getElementById("myRange").disabled = true;
        }
    } else {
        // Wrong flag clicked
        correctFlags[0].src = chosenImg.src;
        correctFlags[0].id = chosenImg.id;

        console.log(correctFlags[0].src);

        openResult();
        mistake++;

        document.getElementById("myRange").disabled = true;
        flagsDone.innerText = counter;
        return;
    }
}


// Adding the event listener to each image
imgs.forEach((img, i) => {
    img._index = i;
    img.addEventListener("click", removeImageListener);


});




var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value
valueOfRound.innerHTML = slider.value;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
    valueOfRound.innerHTML = slider.value;


}