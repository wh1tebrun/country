
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
    "https://country-fawn.vercel.app/imgs/united-states.jpg",
    "https://country-fawn.vercel.app/imgs/malaysia.jpg",
    "https://country-fawn.vercel.app/imgs/honduras.jpg",
    "https://country-fawn.vercel.app/imgs/el-salvador.jpg",
    "https://country-fawn.vercel.app/imgs/bolivia.jpg",
    "https://country-fawn.vercel.app/imgs/bhutan.jpg",
    "https://country-fawn.vercel.app/imgs/congo.jpg",
    "https://country-fawn.vercel.app/imgs/guatemala.jpg",
    "https://country-fawn.vercel.app/imgs/mali.jpg",
    "https://country-fawn.vercel.app/imgs/luxembourg.jpg",
    "https://country-fawn.vercel.app/imgs/egypt.jpg",
    "https://country-fawn.vercel.app/imgs/eswatini.jpg",
    "https://country-fawn.vercel.app/imgs/rwanda.jpg",
    "https://country-fawn.vercel.app/imgs/uganda.jpg",
    "https://country-fawn.vercel.app/imgs/chad.jpg",
    "https://country-fawn.vercel.app/imgs/namibia.jpg",
    "https://country-fawn.vercel.app/imgs/chile.jpg",
    "https://country-fawn.vercel.app/imgs/albania.jpg",
    "https://country-fawn.vercel.app/imgs/denmark.jpg",
    "https://country-fawn.vercel.app/imgs/cuba.jpg",
    "https://country-fawn.vercel.app/imgs/Dominica.jpg",
    "https://country-fawn.vercel.app/imgs/india.jpg",
    "https://country-fawn.vercel.app/imgs/sweden.jpg",
    "https://country-fawn.vercel.app/imgs/yemen.jpg",
    "https://country-fawn.vercel.app/imgs/micronesia.jpg",
    "https://country-fawn.vercel.app/imgs/solomon-islands.jpg",
    "https://country-fawn.vercel.app/imgs/estonia.jpg",
    "https://country-fawn.vercel.app/imgs/vanuatu.jpg",
    "https://country-fawn.vercel.app/imgs/kenya.jpg",
    "https://country-fawn.vercel.app/imgs/czechia.jpg",
    "https://country-fawn.vercel.app/imgs/suriname.jpg",
    "https://country-fawn.vercel.app/imgs/peru.jpg",
    "https://country-fawn.vercel.app/imgs/angola.jpg",
    "https://country-fawn.vercel.app/imgs/bosnia-and-herzegovina.jpg",
    "https://country-fawn.vercel.app/imgs/nicaragua.jpg",
    "https://country-fawn.vercel.app/imgs/saint-lucia.jpg",
    "https://country-fawn.vercel.app/imgs/iran.jpg",
    "https://country-fawn.vercel.app/imgs/finland.jpg",
    "https://country-fawn.vercel.app/imgs/canada.jpg",
    "https://country-fawn.vercel.app/imgs/ghana.jpg",
    "https://country-fawn.vercel.app/imgs/comoros.jpg",
    "https://country-fawn.vercel.app/imgs/ireland.jpg",
    "https://country-fawn.vercel.app/imgs/zimbabwe.jpg",
    "https://country-fawn.vercel.app/imgs/iceland.jpg",
    "https://country-fawn.vercel.app/imgs/samoa.jpg",
    "https://country-fawn.vercel.app/imgs/tunisia.jpg",
    "https://country-fawn.vercel.app/imgs/argentina.jpg",
    "https://country-fawn.vercel.app/imgs/saudi-arabia.jpg",
    "https://country-fawn.vercel.app/imgs/laos.jpg",
    "https://country-fawn.vercel.app/imgs/palestine.jpg",
    "https://country-fawn.vercel.app/imgs/nigeria.jpg",
    "https://country-fawn.vercel.app/imgs/eritrea.jpg",
    "https://country-fawn.vercel.app/imgs/slovakia.jpg",
    "https://country-fawn.vercel.app/imgs/belarus.jpg",
    "https://country-fawn.vercel.app/imgs/germany.jpg",
    "https://country-fawn.vercel.app/imgs/burundi.jpg",
    "https://country-fawn.vercel.app/imgs/indonesia.jpg",
    "https://country-fawn.vercel.app/imgs/australia.jpg",
    "https://country-fawn.vercel.app/imgs/marshall-islands.jpg",
    "https://country-fawn.vercel.app/imgs/cape-verde.jpg",
    "https://country-fawn.vercel.app/imgs/niger.jpg",
    "https://country-fawn.vercel.app/imgs/bahrain.jpg",
    "https://country-fawn.vercel.app/imgs/san-marino.jpg",
    "https://country-fawn.vercel.app/imgs/greece.jpg",
    "https://country-fawn.vercel.app/imgs/pakistan.jpg",
    "https://country-fawn.vercel.app/imgs/hungary.jpg",
    "https://country-fawn.vercel.app/imgs/tonga.jpg",
    "https://country-fawn.vercel.app/imgs/spain.jpg",
    "https://country-fawn.vercel.app/imgs/venezuela.jpg",
    "https://country-fawn.vercel.app/imgs/monaco.jpg",
    "https://country-fawn.vercel.app/imgs/paraguay.jpg",
    "https://country-fawn.vercel.app/imgs/ukraine.jpg",
    "https://country-fawn.vercel.app/imgs/uzbekistan.jpg",
    "https://country-fawn.vercel.app/imgs/oman.jpg",
    "https://country-fawn.vercel.app/imgs/turkey.jpg",
    "https://country-fawn.vercel.app/imgs/south-korea.jpg",
    "https://country-fawn.vercel.app/imgs/tajikistan.jpg",
    "https://country-fawn.vercel.app/imgs/north-macedonia.jpg",
    "https://country-fawn.vercel.app/imgs/brazil.jpg",
    "https://country-fawn.vercel.app/imgs/united-arab-emirates.jpg",
    "https://country-fawn.vercel.app/imgs/north-korea.jpg",
    "https://country-fawn.vercel.app/imgs/guyana.jpg",
    "https://country-fawn.vercel.app/imgs/democratic-republic-of-the-kongo.jpg",
    "https://country-fawn.vercel.app/imgs/bangladesh.jpg",
    "https://country-fawn.vercel.app/imgs/gabon.jpg",
    "https://country-fawn.vercel.app/imgs/liechtenstein.jpg",
    "https://country-fawn.vercel.app/imgs/costa-rica.jpg",
    "https://country-fawn.vercel.app/imgs/mongolia.jpg",
    "https://country-fawn.vercel.app/imgs/china.jpg",
    "https://country-fawn.vercel.app/imgs/somalia.jpg",
    "https://country-fawn.vercel.app/imgs/cambodia.jpg",
    "https://country-fawn.vercel.app/imgs/russia.jpg",
    "https://country-fawn.vercel.app/imgs/singapore.jpg",
    "https://country-fawn.vercel.app/imgs/kyrgyzstan.jpg",
    "https://country-fawn.vercel.app/imgs/cyprus.jpg",
    "https://country-fawn.vercel.app/imgs/japan.jpg",
    "https://country-fawn.vercel.app/imgs/syria.jpg",
    "https://country-fawn.vercel.app/imgs/panama.jpg",
    "https://country-fawn.vercel.app/imgs/montenegro.jpg",
    "https://country-fawn.vercel.app/imgs/malawi.jpg",
    "https://country-fawn.vercel.app/imgs/south-sudan.jpg",
    "https://country-fawn.vercel.app/imgs/romania.jpg",
    "https://country-fawn.vercel.app/imgs/latvia.jpg",
    "https://country-fawn.vercel.app/imgs/qatar.jpg",
    "https://country-fawn.vercel.app/imgs/madagascar.jpg",
    "https://country-fawn.vercel.app/imgs/serbia.jpg",
    "https://country-fawn.vercel.app/imgs/uruguay.jpg",
    "https://country-fawn.vercel.app/imgs/papua-new-guinea.jpg",
    "https://country-fawn.vercel.app/imgs/mauritius.jpg",
    "https://country-fawn.vercel.app/imgs/libya.jpg",
    "https://country-fawn.vercel.app/imgs/vietnam.jpg",
    "https://country-fawn.vercel.app/imgs/turkmenistan.jpg",
    "https://country-fawn.vercel.app/imgs/senegal.jpg",
    "https://country-fawn.vercel.app/imgs/belize.jpg",
    "https://country-fawn.vercel.app/imgs/tanzania.jpg",
    "https://country-fawn.vercel.app/imgs/sao-tome-and-principe.jpg",
    "https://country-fawn.vercel.app/imgs/saint-kitts-and-nevis.jpg",
    "https://country-fawn.vercel.app/imgs/morocco.jpg",
    "https://country-fawn.vercel.app/imgs/malta.jpg",
    "https://country-fawn.vercel.app/imgs/poland.jpg",
    "https://country-fawn.vercel.app/imgs/south-africa.jpg",
    "https://country-fawn.vercel.app/imgs/new-zealand.jpg",
    "https://country-fawn.vercel.app/imgs/togo.jpg",
    "https://country-fawn.vercel.app/imgs/lebanon.jpg",
    "https://country-fawn.vercel.app/imgs/moldova.jpg",
    "https://country-fawn.vercel.app/imgs/georgia.jpg",
    "https://country-fawn.vercel.app/imgs/italy.jpg",
    "https://country-fawn.vercel.app/imgs/kiribati.jpg",
    "https://country-fawn.vercel.app/imgs/iraq.jpg",
    "https://country-fawn.vercel.app/imgs/mexico.jpg",
    "https://country-fawn.vercel.app/imgs/Equatorial-guinea.jpg",
    "https://country-fawn.vercel.app/imgs/lithuania.jpg",
    "https://country-fawn.vercel.app/imgs/philippines.jpg",
    "https://country-fawn.vercel.app/imgs/liberia.jpg",
    "https://country-fawn.vercel.app/imgs/myanmar.jpg",
    "https://country-fawn.vercel.app/imgs/st-vincent-grenadines.jpg",
    "https://country-fawn.vercel.app/imgs/benin.jpg",
    "https://country-fawn.vercel.app/imgs/france.jpg",
    "https://country-fawn.vercel.app/imgs/kazakhstan.jpg",
    "https://country-fawn.vercel.app/imgs/seychelles.jpg",
    "https://country-fawn.vercel.app/imgs/crotia.jpg",
    "https://country-fawn.vercel.app/imgs/sudan.jpg",
    "https://country-fawn.vercel.app/imgs/mauritania.jpg",
    "https://country-fawn.vercel.app/imgs/slovenia.jpg",
    "https://country-fawn.vercel.app/imgs/afghanistan.jpg",
    "https://country-fawn.vercel.app/imgs/belgium.jpg",
    "https://country-fawn.vercel.app/imgs/djibouti.jpg",
    "https://country-fawn.vercel.app/imgs/tuvalu.jpg",
    "https://country-fawn.vercel.app/imgs/brunei.jpg",
    "https://country-fawn.vercel.app/imgs/guinea-bissau.jpg",
    "https://country-fawn.vercel.app/imgs/central-african-republic.jpg",
    "https://country-fawn.vercel.app/imgs/netherlands.jpg",
    "https://country-fawn.vercel.app/imgs/jamaica.jpg",
    "https://country-fawn.vercel.app/imgs/zambia.jpg",
    "https://country-fawn.vercel.app/imgs/cote-d'Ivoire.jpg",
    "https://country-fawn.vercel.app/imgs/barbados.jpg",
    "https://country-fawn.vercel.app/imgs/norway.jpg",
    "https://country-fawn.vercel.app/imgs/burkina-faso.jpg",
    "https://country-fawn.vercel.app/imgs/palau.jpg",
    "https://country-fawn.vercel.app/imgs/israel.jpg",
    "https://country-fawn.vercel.app/imgs/switzerland.jpg",
    "https://country-fawn.vercel.app/imgs/portugal.jpg",
    "https://country-fawn.vercel.app/imgs/colombia.jpg",
    "https://country-fawn.vercel.app/imgs/timor-leste.jpg",
    "https://country-fawn.vercel.app/imgs/trinidad-and-tobago.jpg",
    "https://country-fawn.vercel.app/imgs/antigua-and-barbuda.jpg",
    "https://country-fawn.vercel.app/imgs/fiji.jpg",
    "https://country-fawn.vercel.app/imgs/maldives.jpg",
    "https://country-fawn.vercel.app/imgs/nepal.jpg",
    "https://country-fawn.vercel.app/imgs/united-kingdom.jpg",
    "https://country-fawn.vercel.app/imgs/lesotho.jpg",
    "https://country-fawn.vercel.app/imgs/gambia.jpg",
    "https://country-fawn.vercel.app/imgs/cameroon.jpg",
    "https://country-fawn.vercel.app/imgs/kuwait.jpg",
    "https://country-fawn.vercel.app/imgs/nauru.jpg",
    "https://country-fawn.vercel.app/imgs/bulgaria.jpg",
    "https://country-fawn.vercel.app/imgs/thailand.jpg",
    "https://country-fawn.vercel.app/imgs/vatican-city.jpg",
    "https://country-fawn.vercel.app/imgs/dominican-republic.jpg",
    "https://country-fawn.vercel.app/imgs/mozambique.jpg",
    "https://country-fawn.vercel.app/imgs/ethiopia.jpg",
    "https://country-fawn.vercel.app/imgs/grenada.jpg",
    "https://country-fawn.vercel.app/imgs/haiti.jpg",
    "https://country-fawn.vercel.app/imgs/jordan.jpg",
    "https://country-fawn.vercel.app/imgs/algeria.jpg",
    "https://country-fawn.vercel.app/imgs/botswana.jpg",
    "https://country-fawn.vercel.app/imgs/sierra-leone.jpg",
    "https://country-fawn.vercel.app/imgs/armenia.jpg",
    "https://country-fawn.vercel.app/imgs/azerbaijan.jpg",
    "https://country-fawn.vercel.app/imgs/ecuador.jpg",
    "https://country-fawn.vercel.app/imgs/austria.jpg",
    "https://country-fawn.vercel.app/imgs/andorra.jpg",
    "https://country-fawn.vercel.app/imgs/sri-lanka.jpg",
    "https://country-fawn.vercel.app/imgs/guniea.jpg"

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

    imgs[delIndex].id = imgs[delIndex].src.slice(37, -4).replaceAll("-", " ").toUpperCase();
    imgsrcs.splice(rndNum, 1);

    return imgs[delIndex]


}

// When the window loads, replace the first two images
window.onload = () => {
    closeResult()
    console.log(correctFlags[0].src)
    img0 = replaceAndRemoveImage(0);
    img1 = replaceAndRemoveImage(1);
    img2 = replaceAndRemoveImage(2);
    img3 = replaceAndRemoveImage(3);
    chosenImg = randomizer(img0, img1, img2, img3)
    myCountryName.innerText = chosenImg.id
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
        correctFlags[0].src = chosenImg.src
        correctFlags[0].id = chosenImg.id

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

        chosenImg = randomizer(id_i, id_delIndex1, id_delIndex2, id_delIndex3)
        myCountryName.innerText = chosenImg.id;


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




var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;


}



