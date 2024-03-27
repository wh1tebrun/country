
counter = 0
mistake = 0

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
imgsrcs = [
    "https://country-fawn.vercel.app/flags/united-states.png",
    "https://country-fawn.vercel.app/flags/malaysia.png",
    "https://country-fawn.vercel.app/flags/honduras.png",
    "https://country-fawn.vercel.app/flags/el-salvador.png",
    "https://country-fawn.vercel.app/flags/bolivia.png",
    "https://country-fawn.vercel.app/flags/bhutan.png",
    "https://country-fawn.vercel.app/flags/congo.png",
    "https://country-fawn.vercel.app/flags/guatemala.png",
    "https://country-fawn.vercel.app/flags/mali.png",
    "https://country-fawn.vercel.app/flags/luxembourg.png",
    "https://country-fawn.vercel.app/flags/egypt.png",
    "https://country-fawn.vercel.app/flags/eswatini.png",
    "https://country-fawn.vercel.app/flags/rwanda.png",
    "https://country-fawn.vercel.app/flags/uganda.png",
    "https://country-fawn.vercel.app/flags/chad.png",
    "https://country-fawn.vercel.app/flags/namibia.png",
    "https://country-fawn.vercel.app/flags/chile.png",
    "https://country-fawn.vercel.app/flags/albania.png",
    "https://country-fawn.vercel.app/flags/denmark.png",
    "https://country-fawn.vercel.app/flags/cuba.png",
    "https://country-fawn.vercel.app/flags/Dominica.png",
    "https://country-fawn.vercel.app/flags/india.png",
    "https://country-fawn.vercel.app/flags/sweden.png",
    "https://country-fawn.vercel.app/flags/yemen.png",
    "https://country-fawn.vercel.app/flags/micronesia.png",
    "https://country-fawn.vercel.app/flags/solomon-islands.png",
    "https://country-fawn.vercel.app/flags/estonia.png",
    "https://country-fawn.vercel.app/flags/vanuatu.png",
    "https://country-fawn.vercel.app/flags/kenya.png",
    "https://country-fawn.vercel.app/flags/czechia.png",
    "https://country-fawn.vercel.app/flags/suriname.png",
    "https://country-fawn.vercel.app/flags/peru.png",
    "https://country-fawn.vercel.app/flags/angola.png",
    "https://country-fawn.vercel.app/flags/bosnia-and-herzegovina.png",
    "https://country-fawn.vercel.app/flags/nicaragua.png",
    "https://country-fawn.vercel.app/flags/saint-lucia.png",
    "https://country-fawn.vercel.app/flags/iran.png",
    "https://country-fawn.vercel.app/flags/finland.png",
    "https://country-fawn.vercel.app/flags/canada.png",
    "https://country-fawn.vercel.app/flags/ghana.png",
    "https://country-fawn.vercel.app/flags/comoros.png",
    "https://country-fawn.vercel.app/flags/ireland.png",
    "https://country-fawn.vercel.app/flags/zimbabwe.png",
    "https://country-fawn.vercel.app/flags/iceland.png",
    "https://country-fawn.vercel.app/flags/samoa.png",
    "https://country-fawn.vercel.app/flags/tunisia.png",
    "https://country-fawn.vercel.app/flags/argentina.png",
    "https://country-fawn.vercel.app/flags/saudi-arabia.png",
    "https://country-fawn.vercel.app/flags/laos.png",
    "https://country-fawn.vercel.app/flags/palestine.png",
    "https://country-fawn.vercel.app/flags/nigeria.png",
    "https://country-fawn.vercel.app/flags/eritrea.png",
    "https://country-fawn.vercel.app/flags/slovakia.png",
    "https://country-fawn.vercel.app/flags/belarus.png",
    "https://country-fawn.vercel.app/flags/germany.png",
    "https://country-fawn.vercel.app/flags/burundi.png",
    "https://country-fawn.vercel.app/flags/indonesia.png",
    "https://country-fawn.vercel.app/flags/australia.png",
    "https://country-fawn.vercel.app/flags/marshall-islands.png",
    "https://country-fawn.vercel.app/flags/cape-verde.png",
    "https://country-fawn.vercel.app/flags/niger.png",
    "https://country-fawn.vercel.app/flags/bahrain.png",
    "https://country-fawn.vercel.app/flags/san-marino.png",
    "https://country-fawn.vercel.app/flags/greece.png",
    "https://country-fawn.vercel.app/flags/pakistan.png",
    "https://country-fawn.vercel.app/flags/hungary.png",
    "https://country-fawn.vercel.app/flags/tonga.png",
    "https://country-fawn.vercel.app/flags/spain.png",
    "https://country-fawn.vercel.app/flags/venezuela.png",
    "https://country-fawn.vercel.app/flags/monaco.png",
    "https://country-fawn.vercel.app/flags/paraguay.png",
    "https://country-fawn.vercel.app/flags/ukraine.png",
    "https://country-fawn.vercel.app/flags/uzbekistan.png",
    "https://country-fawn.vercel.app/flags/oman.png",
    "https://country-fawn.vercel.app/flags/turkey.png",
    "https://country-fawn.vercel.app/flags/south-korea.png",
    "https://country-fawn.vercel.app/flags/tajikistan.png",
    "https://country-fawn.vercel.app/flags/north-macedonia.png",
    "https://country-fawn.vercel.app/flags/brazil.png",
    "https://country-fawn.vercel.app/flags/united-arab-emirates.png",
    "https://country-fawn.vercel.app/flags/north-korea.png",
    "https://country-fawn.vercel.app/flags/guyana.png",
    "https://country-fawn.vercel.app/flags/democratic-republic-of-the-kongo.png",
    "https://country-fawn.vercel.app/flags/bangladesh.png",
    "https://country-fawn.vercel.app/flags/gabon.png",
    "https://country-fawn.vercel.app/flags/liechtenstein.png",
    "https://country-fawn.vercel.app/flags/costa-rica.png",
    "https://country-fawn.vercel.app/flags/mongolia.png",
    "https://country-fawn.vercel.app/flags/china.png",
    "https://country-fawn.vercel.app/flags/somalia.png",
    "https://country-fawn.vercel.app/flags/cambodia.png",
    "https://country-fawn.vercel.app/flags/russia.png",
    "https://country-fawn.vercel.app/flags/singapore.png",
    "https://country-fawn.vercel.app/flags/kyrgyzstan.png",
    "https://country-fawn.vercel.app/flags/cyprus.png",
    "https://country-fawn.vercel.app/flags/japan.png",
    "https://country-fawn.vercel.app/flags/syria.png",
    "https://country-fawn.vercel.app/flags/panama.png",
    "https://country-fawn.vercel.app/flags/montenegro.png",
    "https://country-fawn.vercel.app/flags/malawi.png",
    "https://country-fawn.vercel.app/flags/south-sudan.png",
    "https://country-fawn.vercel.app/flags/romania.png",
    "https://country-fawn.vercel.app/flags/latvia.png",
    "https://country-fawn.vercel.app/flags/qatar.png",
    "https://country-fawn.vercel.app/flags/madagascar.png",
    "https://country-fawn.vercel.app/flags/serbia.png",
    "https://country-fawn.vercel.app/flags/uruguay.png",
    "https://country-fawn.vercel.app/flags/papua-new-guinea.png",
    "https://country-fawn.vercel.app/flags/mauritius.png",
    "https://country-fawn.vercel.app/flags/libya.png",
    "https://country-fawn.vercel.app/flags/vietnam.png",
    "https://country-fawn.vercel.app/flags/turkmenistan.png",
    "https://country-fawn.vercel.app/flags/senegal.png",
    "https://country-fawn.vercel.app/flags/belize.png",
    "https://country-fawn.vercel.app/flags/tanzania.png",
    "https://country-fawn.vercel.app/flags/sao-tome-and-principe.png",
    "https://country-fawn.vercel.app/flags/saint-kitts-and-nevis.png",
    "https://country-fawn.vercel.app/flags/morocco.png",
    "https://country-fawn.vercel.app/flags/malta.png",
    "https://country-fawn.vercel.app/flags/poland.png",
    "https://country-fawn.vercel.app/flags/south-africa.png",
    "https://country-fawn.vercel.app/flags/new-zealand.png",
    "https://country-fawn.vercel.app/flags/togo.png",
    "https://country-fawn.vercel.app/flags/lebanon.png",
    "https://country-fawn.vercel.app/flags/moldova.png",
    "https://country-fawn.vercel.app/flags/georgia.png",
    "https://country-fawn.vercel.app/flags/italy.png",
    "https://country-fawn.vercel.app/flags/kiribati.png",
    "https://country-fawn.vercel.app/flags/iraq.png",
    "https://country-fawn.vercel.app/flags/mexico.png",
    "https://country-fawn.vercel.app/flags/Equatorial-guinea.png",
    "https://country-fawn.vercel.app/flags/lithuania.png",
    "https://country-fawn.vercel.app/flags/philippines.png",
    "https://country-fawn.vercel.app/flags/liberia.png",
    "https://country-fawn.vercel.app/flags/myanmar.png",
    "https://country-fawn.vercel.app/flags/st-vincent-grenadines.png",
    "https://country-fawn.vercel.app/flags/benin.png",
    "https://country-fawn.vercel.app/flags/france.png",
    "https://country-fawn.vercel.app/flags/kazakhstan.png",
    "https://country-fawn.vercel.app/flags/seychelles.png",
    "https://country-fawn.vercel.app/flags/crotia.png",
    "https://country-fawn.vercel.app/flags/sudan.png",
    "https://country-fawn.vercel.app/flags/mauritania.png",
    "https://country-fawn.vercel.app/flags/slovenia.png",
    "https://country-fawn.vercel.app/flags/afghanistan.png",
    "https://country-fawn.vercel.app/flags/belgium.png",
    "https://country-fawn.vercel.app/flags/djibouti.png",
    "https://country-fawn.vercel.app/flags/tuvalu.png",
    "https://country-fawn.vercel.app/flags/brunei.png",
    "https://country-fawn.vercel.app/flags/guinea-bissau.png",
    "https://country-fawn.vercel.app/flags/central-african-republic.png",
    "https://country-fawn.vercel.app/flags/netherlands.png",
    "https://country-fawn.vercel.app/flags/jamaica.png",
    "https://country-fawn.vercel.app/flags/zambia.png",
    "https://country-fawn.vercel.app/flags/cote-d'Ivoire.png",
    "https://country-fawn.vercel.app/flags/barbados.png",
    "https://country-fawn.vercel.app/flags/norway.png",
    "https://country-fawn.vercel.app/flags/burkina-faso.png",
    "https://country-fawn.vercel.app/flags/palau.png",
    "https://country-fawn.vercel.app/flags/israel.png",
    "https://country-fawn.vercel.app/flags/switzerland.png",
    "https://country-fawn.vercel.app/flags/portugal.png",
    "https://country-fawn.vercel.app/flags/colombia.png",
    "https://country-fawn.vercel.app/flags/timor-leste.png",
    "https://country-fawn.vercel.app/flags/trinidad-and-tobago.png",
    "https://country-fawn.vercel.app/flags/antigua-and-barbuda.png",
    "https://country-fawn.vercel.app/flags/fiji.png",
    "https://country-fawn.vercel.app/flags/maldives.png",
    "https://country-fawn.vercel.app/flags/nepal.png",
    "https://country-fawn.vercel.app/flags/united-kingdom.png",
    "https://country-fawn.vercel.app/flags/lesotho.png",
    "https://country-fawn.vercel.app/flags/gambia.png",
    "https://country-fawn.vercel.app/flags/cameroon.png",
    "https://country-fawn.vercel.app/flags/kuwait.png",
    "https://country-fawn.vercel.app/flags/nauru.png",
    "https://country-fawn.vercel.app/flags/bulgaria.png",
    "https://country-fawn.vercel.app/flags/thailand.png",
    "https://country-fawn.vercel.app/flags/vatican-city.png",
    "https://country-fawn.vercel.app/flags/dominican-republic.png",
    "https://country-fawn.vercel.app/flags/mozambique.png",
    "https://country-fawn.vercel.app/flags/ethiopia.png",
    "https://country-fawn.vercel.app/flags/grenada.png",
    "https://country-fawn.vercel.app/flags/haiti.png",
    "https://country-fawn.vercel.app/flags/jordan.png",
    "https://country-fawn.vercel.app/flags/algeria.png",
    "https://country-fawn.vercel.app/flags/botswana.png",
    "https://country-fawn.vercel.app/flags/sierra-leone.png",
    "https://country-fawn.vercel.app/flags/armenia.png",
    "https://country-fawn.vercel.app/flags/azerbaijan.png",
    "https://country-fawn.vercel.app/flags/ecuador.png",
    "https://country-fawn.vercel.app/flags/austria.png",
    "https://country-fawn.vercel.app/flags/andorra.png",
    "https://country-fawn.vercel.app/flags/sri-lanka.png",
    "https://country-fawn.vercel.app/flags/guniea.png"

]
var myCountryName = document.getElementById("country-name");
var myOutOfScore = document.getElementsByClassName("out-of-score")
var flagsDone = document.getElementById("flags-done")
correctFlags = Array.from(document.getElementsByClassName("small-flag"))
playAgainButtons = Array.from(document.getElementsByClassName("stats-btn__again2"))

// Function to replace the image source of the image at delIndex with a random image from imgsrcs
// and then remove the used image source from imgsrcs
function replaceAndRemoveImage(delIndex) {
    const rndNum = Math.floor(getRandomArbitrary(0, imgsrcs.length));
    imgs[delIndex].src = imgsrcs[rndNum];
    imgs[delIndex].id = imgsrcs[rndNum].src.slice(40, -4).replaceAll("-", " ").toUpperCase();
    imgsrcs.splice(rndNum, 1);

    return imgs[delIndex]


}

// When the window loads, replace the first two images
window.onload = () => {
    closeResult()
    console.log(correctFlags[0].src)
    id0 = replaceAndRemoveImage(0);
    id1 = replaceAndRemoveImage(1);
    id2 = replaceAndRemoveImage(2);
    id3 = replaceAndRemoveImage(3);
    chosenId = randomizer(id0, id1, id2, id3)
    myCountryName.innerText = chosenId.id
    myOutOfScore.innerText = output.innerHTML

};


const flagPressed = e => {
    const id = e.target.id;  // Get ID of Clicked Element
    return id
}
// Event listener function for removing an image
function removeImageListener(event) {

    if (mistake !== 0) {
        return
    }

    const img = event.target;
    const imgId = img.getAttribute("id");
    const imgSrc = img.getAttribute("src")
    const i = img._index;
    const delIndexesSet = new Set([0, 1, 2, 3]).symmetricDifference(new Set([i]))
    const delIndexes = Array.from(delIndexesSet)



    if (myCountryName.innerText == imgId) {
        //pass


    }

    else {
        correctFlags[0].src = chosenId.src
        correctFlags[0].id = chosenId.id

        console.log(correctFlags[0].src)

        openResult()
        mistake++




    }

    if (mistake !== 0) {
        document.getElementById("myRange").disabled = true;
        flagsDone.innerText = counter
        return
    }


    if (counter >= parseInt(output.innerHTML, 10) - 1) {

        localStorage.setItem('mostRecentScore', timePassed);
        img.removeEventListener("click", removeImageListener);
        imgs[delIndexes[0]].style.visibility = "hidden";
        imgs[delIndexes[1]].style.visibility = "hidden";
        imgs[delIndexes[2]].style.visibility = "hidden";
        jsConfetti.addConfetti({
            emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
        }).then(() => jsConfetti.addConfetti());

        playAgainButtons[0].style.visibility = 'visible';

    }

    else {
        id_i = replaceAndRemoveImage(i);
        id_delIndex1 = replaceAndRemoveImage(delIndexes[0]);
        id_delIndex2 = replaceAndRemoveImage(delIndexes[1]);
        id_delIndex3 = replaceAndRemoveImage(delIndexes[2]);

        chosenId = randomizer(id_i, id_delIndex1, id_delIndex2, id_delIndex3)
        myCountryName.innerText = chosenId.id;


        counter++;
    }

    if (counter >= 1) {
        document.getElementById("myRange").disabled = true;
    }



}

// Adding the event listener to each image
imgs.forEach((img, i) => {
    img._index = i;
    img.addEventListener("click", removeImageListener);


});

for (let imgsrc of imgsrcs) {
    id = imgsrc.addEventListener("click", flagPressed);


}


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;


}



