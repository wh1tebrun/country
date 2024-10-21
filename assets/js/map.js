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
    "https://country-fawn.vercel.app/assets/maps/congo.jpg",
    "https://country-fawn.vercel.app/assets/maps/mali.jpg",
    "https://country-fawn.vercel.app/assets/maps/egypt.jpg",
    "https://country-fawn.vercel.app/assets/maps/eswatini.jpg",
    "https://country-fawn.vercel.app/assets/maps/rwanda.jpg",
    "https://country-fawn.vercel.app/assets/maps/uganda.jpg",
    "https://country-fawn.vercel.app/assets/maps/chad.jpg",
    "https://country-fawn.vercel.app/assets/maps/namibia.jpg",
    "https://country-fawn.vercel.app/assets/maps/angola.jpg",
    "https://country-fawn.vercel.app/assets/maps/ghana.jpg",
    "https://country-fawn.vercel.app/assets/maps/comoros.jpg",
    "https://country-fawn.vercel.app/assets/maps/zimbabwe.jpg",
    "https://country-fawn.vercel.app/assets/maps/tunisia.jpg",
    "https://country-fawn.vercel.app/assets/maps/nigeria.jpg",
    "https://country-fawn.vercel.app/assets/maps/eritrea.jpg",
    "https://country-fawn.vercel.app/assets/maps/burundi.jpg",
    "https://country-fawn.vercel.app/assets/maps/cape-verde.jpg",
    "https://country-fawn.vercel.app/assets/maps/niger.jpg",
    "https://country-fawn.vercel.app/assets/maps/democratic-republic-of-the-congo.jpg",
    "https://country-fawn.vercel.app/assets/maps/gabon.jpg",
    "https://country-fawn.vercel.app/assets/maps/somalia.jpg",
    "https://country-fawn.vercel.app/assets/maps/sudan.jpg",
    "https://country-fawn.vercel.app/assets/maps/madagascar.jpg",
    "https://country-fawn.vercel.app/assets/maps/mauritius.jpg",
    "https://country-fawn.vercel.app/assets/maps/libya.jpg",
    "https://country-fawn.vercel.app/assets/maps/senegal.jpg",
    "https://country-fawn.vercel.app/assets/maps/tanzania.jpg",
    "https://country-fawn.vercel.app/assets/maps/sao-tome-and-principe.jpg",
    "https://country-fawn.vercel.app/assets/maps/morocco.jpg",
    "https://country-fawn.vercel.app/assets/maps/south-africa.jpg",
    "https://country-fawn.vercel.app/assets/maps/togo.jpg",
    "https://country-fawn.vercel.app/assets/maps/equatorial-guinea.jpg",
    "https://country-fawn.vercel.app/assets/maps/liberia.jpg",
    "https://country-fawn.vercel.app/assets/maps/benin.jpg",
    "https://country-fawn.vercel.app/assets/maps/seychelles.jpg",
    "https://country-fawn.vercel.app/assets/maps/croatia.jpg",
    "https://country-fawn.vercel.app/assets/maps/mauritania.jpg",
    "https://country-fawn.vercel.app/assets/maps/djibouti.jpg",
    "https://country-fawn.vercel.app/assets/maps/guinea-bissau.jpg",
    "https://country-fawn.vercel.app/assets/maps/central-african-republic.jpg",
    "https://country-fawn.vercel.app/assets/maps/zambia.jpg",
    "https://country-fawn.vercel.app/assets/maps/cote-d'ivoire.jpg",
    "https://country-fawn.vercel.app/assets/maps/burkina-faso.jpg",
    "https://country-fawn.vercel.app/assets/maps/malawi.jpg",
    "https://country-fawn.vercel.app/assets/maps/south-sudan.jpg",
    "https://country-fawn.vercel.app/assets/maps/lesotho.jpg",
    "https://country-fawn.vercel.app/assets/maps/gambia.jpg",
    "https://country-fawn.vercel.app/assets/maps/cameroon.jpg",
    "https://country-fawn.vercel.app/assets/maps/mozambique.jpg",
    "https://country-fawn.vercel.app/assets/maps/ethiopia.jpg",
    "https://country-fawn.vercel.app/assets/maps/algeria.jpg",
    "https://country-fawn.vercel.app/assets/maps/botswana.jpg",
    "https://country-fawn.vercel.app/assets/maps/sierra-leone.jpg",
    "https://country-fawn.vercel.app/assets/maps/guinea.jpg"

]

imgsrcsAsia = [
    "https://country-fawn.vercel.app/assets/maps/malaysia.jpg",
    "https://country-fawn.vercel.app/assets/maps/bhutan.jpg",
    "https://country-fawn.vercel.app/assets/maps/india.jpg",
    "https://country-fawn.vercel.app/assets/maps/yemen.jpg",
    "https://country-fawn.vercel.app/assets/maps/saudi-arabia.jpg",
    "https://country-fawn.vercel.app/assets/maps/laos.jpg",
    "https://country-fawn.vercel.app/assets/maps/palestine.jpg",
    "https://country-fawn.vercel.app/assets/maps/iran.jpg",
    "https://country-fawn.vercel.app/assets/maps/indonesia.jpg",
    "https://country-fawn.vercel.app/assets/maps/bahrain.jpg",
    "https://country-fawn.vercel.app/assets/maps/pakistan.jpg",
    "https://country-fawn.vercel.app/assets/maps/uzbekistan.jpg",
    "https://country-fawn.vercel.app/assets/maps/oman.jpg",
    "https://country-fawn.vercel.app/assets/maps/turkey.jpg",
    "https://country-fawn.vercel.app/assets/maps/south-korea.jpg",
    "https://country-fawn.vercel.app/assets/maps/tajikistan.jpg",
    "https://country-fawn.vercel.app/assets/maps/united-arab-emirates.jpg",
    "https://country-fawn.vercel.app/assets/maps/bangladesh.jpg",
    "https://country-fawn.vercel.app/assets/maps/mongolia.jpg",
    "https://country-fawn.vercel.app/assets/maps/china.jpg",
    "https://country-fawn.vercel.app/assets/maps/cambodia.jpg",
    "https://country-fawn.vercel.app/assets/maps/russia.jpg",
    "https://country-fawn.vercel.app/assets/maps/singapore.jpg",
    "https://country-fawn.vercel.app/assets/maps/kyrgyzstan.jpg",
    "https://country-fawn.vercel.app/assets/maps/japan.jpg",
    "https://country-fawn.vercel.app/assets/maps/syria.jpg",
    "https://country-fawn.vercel.app/assets/maps/vietnam.jpg",
    "https://country-fawn.vercel.app/assets/maps/turkmenistan.jpg",
    "https://country-fawn.vercel.app/assets/maps/kazakhstan.jpg",
    "https://country-fawn.vercel.app/assets/maps/israel.jpg",
    "https://country-fawn.vercel.app/assets/maps/timor-leste.jpg",
    "https://country-fawn.vercel.app/assets/maps/brunei.jpg",
    "https://country-fawn.vercel.app/assets/maps/afghanistan.jpg",
    "https://country-fawn.vercel.app/assets/maps/armenia.jpg",
    "https://country-fawn.vercel.app/assets/maps/azerbaijan.jpg",
    "https://country-fawn.vercel.app/assets/maps/sri-lanka.jpg"
]

imgsrcsEuropa = [
    "https://country-fawn.vercel.app/assets/maps/luxembourg.jpg",
    "https://country-fawn.vercel.app/assets/maps/albania.jpg",
    "https://country-fawn.vercel.app/assets/maps/denmark.jpg",
    "https://country-fawn.vercel.app/assets/maps/sweden.jpg",
    "https://country-fawn.vercel.app/assets/maps/estonia.jpg",
    "https://country-fawn.vercel.app/assets/maps/czech-republic.jpg",
    "https://country-fawn.vercel.app/assets/maps/bosnia-and-herzegovina.jpg",
    "https://country-fawn.vercel.app/assets/maps/finland.jpg",
    "https://country-fawn.vercel.app/assets/maps/ireland.jpg",
    "https://country-fawn.vercel.app/assets/maps/iceland.jpg",
    "https://country-fawn.vercel.app/assets/maps/slovakia.jpg",
    "https://country-fawn.vercel.app/assets/maps/belarus.jpg",
    "https://country-fawn.vercel.app/assets/maps/germany.jpg",
    "https://country-fawn.vercel.app/assets/maps/san-marino.jpg",
    "https://country-fawn.vercel.app/assets/maps/greece.jpg",
    "https://country-fawn.vercel.app/assets/maps/hungary.jpg",
    "https://country-fawn.vercel.app/assets/maps/spain.jpg",
    "https://country-fawn.vercel.app/assets/maps/monaco.jpg",
    "https://country-fawn.vercel.app/assets/maps/ukraine.jpg",
    "https://country-fawn.vercel.app/assets/maps/croatia.jpg",
    "https://country-fawn.vercel.app/assets/maps/liechtenstein.jpg",
    "https://country-fawn.vercel.app/assets/maps/cyprus.jpg",
    "https://country-fawn.vercel.app/assets/maps/montenegro.jpg",
    "https://country-fawn.vercel.app/assets/maps/romania.jpg",
    "https://country-fawn.vercel.app/assets/maps/latvia.jpg",
    "https://country-fawn.vercel.app/assets/maps/serbia.jpg",
    "https://country-fawn.vercel.app/assets/maps/poland.jpg",
    "https://country-fawn.vercel.app/assets/maps/moldova.jpg",
    "https://country-fawn.vercel.app/assets/maps/georgia.jpg",
    "https://country-fawn.vercel.app/assets/maps/italy.jpg",
    "https://country-fawn.vercel.app/assets/maps/lithuania.jpg",
    "https://country-fawn.vercel.app/assets/maps/france.jpg",
    "https://country-fawn.vercel.app/assets/maps/bulgaria.jpg",
    "https://country-fawn.vercel.app/assets/maps/vatican-city.jpg",
    "https://country-fawn.vercel.app/assets/maps/switzerland.jpg",
    "https://country-fawn.vercel.app/assets/maps/portugal.jpg",
    "https://country-fawn.vercel.app/assets/maps/netherlands.jpg",
    "https://country-fawn.vercel.app/assets/maps/slovenia.jpg",
    "https://country-fawn.vercel.app/assets/maps/belgium.jpg",
    "https://country-fawn.vercel.app/assets/maps/united-kingdom.jpg"
]

imgsrcsNorthAmerica = [
    "https://country-fawn.vercel.app/assets/maps/united-states.jpg",
    "https://country-fawn.vercel.app/assets/maps/honduras.jpg",
    "https://country-fawn.vercel.app/assets/maps/el-salvador.jpg",
    "https://country-fawn.vercel.app/assets/maps/guatemala.jpg",
    "https://country-fawn.vercel.app/assets/maps/cuba.jpg",
    "https://country-fawn.vercel.app/assets/maps/dominica.jpg",
    "https://country-fawn.vercel.app/assets/maps/nicaragua.jpg",
    "https://country-fawn.vercel.app/assets/maps/saint-lucia.jpg",
    "https://country-fawn.vercel.app/assets/maps/canada.jpg",
    "https://country-fawn.vercel.app/assets/maps/costa-rica.jpg",
    "https://country-fawn.vercel.app/assets/maps/panama.jpg",
    "https://country-fawn.vercel.app/assets/maps/belize.jpg",
    "https://country-fawn.vercel.app/assets/maps/saint-kitts-and-nevis.jpg",
    "https://country-fawn.vercel.app/assets/maps/bahamas.jpg",
    "https://country-fawn.vercel.app/assets/maps/jamaica.jpg",
    "https://country-fawn.vercel.app/assets/maps/barbados.jpg",
    "https://country-fawn.vercel.app/assets/maps/trinidad-and-tobago.jpg",
    "https://country-fawn.vercel.app/assets/maps/antigua-and-barbuda.jpg",
    "https://country-fawn.vercel.app/assets/maps/saint-vincent-grenadines.jpg",
    "https://country-fawn.vercel.app/assets/maps/dominican-republic.jpg",
    "https://country-fawn.vercel.app/assets/maps/grenada.jpg",
    "https://country-fawn.vercel.app/assets/maps/haiti.jpg"
]

imgsrcsSouthAmerica = [
    "https://country-fawn.vercel.app/assets/maps/bolivia.jpg",
    "https://country-fawn.vercel.app/assets/maps/chile.jpg",
    "https://country-fawn.vercel.app/assets/maps/suriname.jpg",
    "https://country-fawn.vercel.app/assets/maps/peru.jpg",
    "https://country-fawn.vercel.app/assets/maps/argentina.jpg",
    "https://country-fawn.vercel.app/assets/maps/venezuela.jpg",
    "https://country-fawn.vercel.app/assets/maps/paraguay.jpg",
    "https://country-fawn.vercel.app/assets/maps/brazil.jpg",
    "https://country-fawn.vercel.app/assets/maps/guyana.jpg",
    "https://country-fawn.vercel.app/assets/maps/uruguay.jpg",
    "https://country-fawn.vercel.app/assets/maps/colombia.jpg",
    "https://country-fawn.vercel.app/assets/maps/ecuador.jpg"
]

imgsrcsOcenia = [
    "https://country-fawn.vercel.app/assets/maps/micronesia.jpg",
    "https://country-fawn.vercel.app/assets/maps/solomon-islands.jpg",
    "https://country-fawn.vercel.app/assets/maps/vanuatu.jpg",
    "https://country-fawn.vercel.app/assets/maps/samoa.jpg",
    "https://country-fawn.vercel.app/assets/maps/australia.jpg",
    "https://country-fawn.vercel.app/assets/maps/marshall-islands.jpg",
    "https://country-fawn.vercel.app/assets/maps/tonga.jpg",
    "https://country-fawn.vercel.app/assets/maps/kiribati.jpg",
    "https://country-fawn.vercel.app/assets/maps/tuvalu.jpg",
    "https://country-fawn.vercel.app/assets/maps/palau.jpg",
    "https://country-fawn.vercel.app/assets/maps/fiji.jpg",
    "https://country-fawn.vercel.app/assets/maps/nauru.jpg",
    "https://country-fawn.vercel.app/assets/maps/new-zealand.jpg"
    
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

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;


}