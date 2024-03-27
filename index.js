
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
    "https://country-fawn.vercel.app/Flags/united-states.png",
    "https://country-fawn.vercel.app/Flags/malaysia.png",
    "https://country-fawn.vercel.app/Flags/honduras.png",
    "https://country-fawn.vercel.app/Flags/el-salvador.png",
    "https://country-fawn.vercel.app/Flags/bolivia.png",
    "https://country-fawn.vercel.app/Flags/bhutan.png",
    "https://country-fawn.vercel.app/Flags/congo.png",
    "https://country-fawn.vercel.app/Flags/guatemala.png",
    "https://country-fawn.vercel.app/Flags/mali.png",
    "https://country-fawn.vercel.app/Flags/luxembourg.png",
    "https://country-fawn.vercel.app/Flags/egypt.png",
    "https://country-fawn.vercel.app/Flags/eswatini.png",
    "https://country-fawn.vercel.app/Flags/rwanda.png",
    "https://country-fawn.vercel.app/Flags/uganda.png",
    "https://country-fawn.vercel.app/Flags/chad.png",
    "https://country-fawn.vercel.app/Flags/namibia.png",
    "https://country-fawn.vercel.app/Flags/chile.png",
    "https://country-fawn.vercel.app/Flags/albania.png",
    "https://country-fawn.vercel.app/Flags/denmark.png",
    "https://country-fawn.vercel.app/Flags/cuba.png",
    "https://country-fawn.vercel.app/Flags/Dominica.png",
    "https://country-fawn.vercel.app/Flags/india.png",
    "https://country-fawn.vercel.app/Flags/sweden.png",
    "https://country-fawn.vercel.app/Flags/yemen.png",
    "https://country-fawn.vercel.app/Flags/micronesia.png",
    "https://country-fawn.vercel.app/Flags/solomon-islands.png",
    "https://country-fawn.vercel.app/Flags/estonia.png",
    "https://country-fawn.vercel.app/Flags/vanuatu.png",
    "https://country-fawn.vercel.app/Flags/kenya.png",
    "https://country-fawn.vercel.app/Flags/czechia.png",
    "https://country-fawn.vercel.app/Flags/suriname.png",
    "https://country-fawn.vercel.app/Flags/peru.png",
    "https://country-fawn.vercel.app/Flags/angola.png",
    "https://country-fawn.vercel.app/Flags/bosnia-and-herzegovina.png",
    "https://country-fawn.vercel.app/Flags/nicaragua.png",
    "https://country-fawn.vercel.app/Flags/saint-lucia.png",
    "https://country-fawn.vercel.app/Flags/iran.png",
    "https://country-fawn.vercel.app/Flags/finland.png",
    "https://country-fawn.vercel.app/Flags/canada.png",
    "https://country-fawn.vercel.app/Flags/ghana.png",
    "https://country-fawn.vercel.app/Flags/comoros.png",
    "https://country-fawn.vercel.app/Flags/ireland.png",
    "https://country-fawn.vercel.app/Flags/zimbabwe.png",
    "https://country-fawn.vercel.app/Flags/iceland.png",
    "https://country-fawn.vercel.app/Flags/samoa.png",
    "https://country-fawn.vercel.app/Flags/tunisia.png",
    "https://country-fawn.vercel.app/Flags/argentina.png",
    "https://country-fawn.vercel.app/Flags/saudi-arabia.png",
    "https://country-fawn.vercel.app/Flags/laos.png",
    "https://country-fawn.vercel.app/Flags/palestine.png",
    "https://country-fawn.vercel.app/Flags/nigeria.png",
    "https://country-fawn.vercel.app/Flags/eritrea.png",
    "https://country-fawn.vercel.app/Flags/slovakia.png",
    "https://country-fawn.vercel.app/Flags/belarus.png",
    "https://country-fawn.vercel.app/Flags/germany.png",
    "https://country-fawn.vercel.app/Flags/burundi.png",
    "https://country-fawn.vercel.app/Flags/indonesia.png",
    "https://country-fawn.vercel.app/Flags/australia.png",
    "https://country-fawn.vercel.app/Flags/marshall-islands.png",
    "https://country-fawn.vercel.app/Flags/cape-verde.png",
    "https://country-fawn.vercel.app/Flags/niger.png",
    "https://country-fawn.vercel.app/Flags/bahrain.png",
    "https://country-fawn.vercel.app/Flags/san-marino.png",
    "https://country-fawn.vercel.app/Flags/greece.png",
    "https://country-fawn.vercel.app/Flags/pakistan.png",
    "https://country-fawn.vercel.app/Flags/hungary.png",
    "https://country-fawn.vercel.app/Flags/tonga.png",
    "https://country-fawn.vercel.app/Flags/spain.png",
    "https://country-fawn.vercel.app/Flags/venezuela.png",
    "https://country-fawn.vercel.app/Flags/monaco.png",
    "https://country-fawn.vercel.app/Flags/paraguay.png",
    "https://country-fawn.vercel.app/Flags/ukraine.png",
    "https://country-fawn.vercel.app/Flags/uzbekistan.png",
    "https://country-fawn.vercel.app/Flags/oman.png",
    "https://country-fawn.vercel.app/Flags/turkey.png",
    "https://country-fawn.vercel.app/Flags/south-korea.png",
    "https://country-fawn.vercel.app/Flags/tajikistan.png",
    "https://country-fawn.vercel.app/Flags/north-macedonia.png",
    "https://country-fawn.vercel.app/Flags/brazil.png",
    "https://country-fawn.vercel.app/Flags/united-arab-emirates.png",
    "https://country-fawn.vercel.app/Flags/north-korea.png",
    "https://country-fawn.vercel.app/Flags/guyana.png",
    "https://country-fawn.vercel.app/Flags/democratic-republic-of-the-kongo.png",
    "https://country-fawn.vercel.app/Flags/bangladesh.png",
    "https://country-fawn.vercel.app/Flags/gabon.png",
    "https://country-fawn.vercel.app/Flags/liechtenstein.png",
    "https://country-fawn.vercel.app/Flags/costa-rica.png",
    "https://country-fawn.vercel.app/Flags/mongolia.png",
    "https://country-fawn.vercel.app/Flags/china.png",
    "https://country-fawn.vercel.app/Flags/somalia.png",
    "https://country-fawn.vercel.app/Flags/cambodia.png",
    "https://country-fawn.vercel.app/Flags/russia.png",
    "https://country-fawn.vercel.app/Flags/singapore.png",
    "https://country-fawn.vercel.app/Flags/kyrgyzstan.png",
    "https://country-fawn.vercel.app/Flags/cyprus.png",
    "https://country-fawn.vercel.app/Flags/japan.png",
    "https://country-fawn.vercel.app/Flags/syria.png",
    "https://country-fawn.vercel.app/Flags/panama.png",
    "https://country-fawn.vercel.app/Flags/montenegro.png",
    "https://country-fawn.vercel.app/Flags/malawi.png",
    "https://country-fawn.vercel.app/Flags/south-sudan.png",
    "https://country-fawn.vercel.app/Flags/romania.png",
    "https://country-fawn.vercel.app/Flags/latvia.png",
    "https://country-fawn.vercel.app/Flags/qatar.png",
    "https://country-fawn.vercel.app/Flags/madagascar.png",
    "https://country-fawn.vercel.app/Flags/serbia.png",
    "https://country-fawn.vercel.app/Flags/uruguay.png",
    "https://country-fawn.vercel.app/Flags/papua-new-guinea.png",
    "https://country-fawn.vercel.app/Flags/mauritius.png",
    "https://country-fawn.vercel.app/Flags/libya.png",
    "https://country-fawn.vercel.app/Flags/vietnam.png",
    "https://country-fawn.vercel.app/Flags/turkmenistan.png",
    "https://country-fawn.vercel.app/Flags/senegal.png",
    "https://country-fawn.vercel.app/Flags/belize.png",
    "https://country-fawn.vercel.app/Flags/tanzania.png",
    "https://country-fawn.vercel.app/Flags/sao-tome-and-principe.png",
    "https://country-fawn.vercel.app/Flags/saint-kitts-and-nevis.png",
    "https://country-fawn.vercel.app/Flags/morocco.png",
    "https://country-fawn.vercel.app/Flags/malta.png",
    "https://country-fawn.vercel.app/Flags/poland.png",
    "https://country-fawn.vercel.app/Flags/south-africa.png",
    "https://country-fawn.vercel.app/Flags/new-zealand.png",
    "https://country-fawn.vercel.app/Flags/togo.png",
    "https://country-fawn.vercel.app/Flags/lebanon.png",
    "https://country-fawn.vercel.app/Flags/moldova.png",
    "https://country-fawn.vercel.app/Flags/georgia.png",
    "https://country-fawn.vercel.app/Flags/italy.png",
    "https://country-fawn.vercel.app/Flags/kiribati.png",
    "https://country-fawn.vercel.app/Flags/iraq.png",
    "https://country-fawn.vercel.app/Flags/mexico.png",
    "https://country-fawn.vercel.app/Flags/Equatorial-guinea.png",
    "https://country-fawn.vercel.app/Flags/lithuania.png",
    "https://country-fawn.vercel.app/Flags/philippines.png",
    "https://country-fawn.vercel.app/Flags/liberia.png",
    "https://country-fawn.vercel.app/Flags/myanmar.png",
    "https://country-fawn.vercel.app/Flags/st-vincent-grenadines.png",
    "https://country-fawn.vercel.app/Flags/benin.png",
    "https://country-fawn.vercel.app/Flags/france.png",
    "https://country-fawn.vercel.app/Flags/kazakhstan.png",
    "https://country-fawn.vercel.app/Flags/seychelles.png",
    "https://country-fawn.vercel.app/Flags/crotia.png",
    "https://country-fawn.vercel.app/Flags/sudan.png",
    "https://country-fawn.vercel.app/Flags/mauritania.png",
    "https://country-fawn.vercel.app/Flags/slovenia.png",
    "https://country-fawn.vercel.app/Flags/afghanistan.png",
    "https://country-fawn.vercel.app/Flags/belgium.png",
    "https://country-fawn.vercel.app/Flags/djibouti.png",
    "https://country-fawn.vercel.app/Flags/tuvalu.png",
    "https://country-fawn.vercel.app/Flags/brunei.png",
    "https://country-fawn.vercel.app/Flags/guinea-bissau.png",
    "https://country-fawn.vercel.app/Flags/central-african-republic.png",
    "https://country-fawn.vercel.app/Flags/netherlands.png",
    "https://country-fawn.vercel.app/Flags/jamaica.png",
    "https://country-fawn.vercel.app/Flags/zambia.png",
    "https://country-fawn.vercel.app/Flags/cote-d'Ivoire.png",
    "https://country-fawn.vercel.app/Flags/barbados.png",
    "https://country-fawn.vercel.app/Flags/norway.png",
    "https://country-fawn.vercel.app/Flags/burkina-faso.png",
    "https://country-fawn.vercel.app/Flags/palau.png",
    "https://country-fawn.vercel.app/Flags/israel.png",
    "https://country-fawn.vercel.app/Flags/switzerland.png",
    "https://country-fawn.vercel.app/Flags/portugal.png",
    "https://country-fawn.vercel.app/Flags/colombia.png",
    "https://country-fawn.vercel.app/Flags/timor-leste.png",
    "https://country-fawn.vercel.app/Flags/trinidad-and-tobago.png",
    "https://country-fawn.vercel.app/Flags/antigua-and-barbuda.png",
    "https://country-fawn.vercel.app/Flags/fiji.png",
    "https://country-fawn.vercel.app/Flags/maldives.png",
    "https://country-fawn.vercel.app/Flags/nepal.png",
    "https://country-fawn.vercel.app/Flags/united-kingdom.png",
    "https://country-fawn.vercel.app/Flags/lesotho.png",
    "https://country-fawn.vercel.app/Flags/gambia.png",
    "https://country-fawn.vercel.app/Flags/cameroon.png",
    "https://country-fawn.vercel.app/Flags/kuwait.png",
    "https://country-fawn.vercel.app/Flags/nauru.png",
    "https://country-fawn.vercel.app/Flags/bulgaria.png",
    "https://country-fawn.vercel.app/Flags/thailand.png",
    "https://country-fawn.vercel.app/Flags/vatican-city.png",
    "https://country-fawn.vercel.app/Flags/dominican-republic.png",
    "https://country-fawn.vercel.app/Flags/mozambique.png",
    "https://country-fawn.vercel.app/Flags/ethiopia.png",
    "https://country-fawn.vercel.app/Flags/grenada.png",
    "https://country-fawn.vercel.app/Flags/haiti.png",
    "https://country-fawn.vercel.app/Flags/jordan.png",
    "https://country-fawn.vercel.app/Flags/algeria.png",
    "https://country-fawn.vercel.app/Flags/botswana.png",
    "https://country-fawn.vercel.app/Flags/sierra-leone.png",
    "https://country-fawn.vercel.app/Flags/armenia.png",
    "https://country-fawn.vercel.app/Flags/azerbaijan.png",
    "https://country-fawn.vercel.app/Flags/ecuador.png",
    "https://country-fawn.vercel.app/Flags/austria.png",
    "https://country-fawn.vercel.app/Flags/andorra.png",
    "https://country-fawn.vercel.app/Flags/sri-lanka.png",
    "https://country-fawn.vercel.app/Flags/guniea.png"

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



