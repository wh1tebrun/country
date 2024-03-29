
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
    "https://country-fawn.vercel.app/assets/imgs/united-states.jpg",
    "https://country-fawn.vercel.app/assets/imgs/malaysia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/honduras.jpg",
    "https://country-fawn.vercel.app/assets/imgs/el-salvador.jpg",
    "https://country-fawn.vercel.app/assets/imgs/bolivia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/bhutan.jpg",
    "https://country-fawn.vercel.app/assets/imgs/congo.jpg",
    "https://country-fawn.vercel.app/assets/imgs/guatemala.jpg",
    "https://country-fawn.vercel.app/assets/imgs/mali.jpg",
    "https://country-fawn.vercel.app/assets/imgs/luxembourg.jpg",
    "https://country-fawn.vercel.app/assets/imgs/egypt.jpg",
    "https://country-fawn.vercel.app/assets/imgs/eswatini.jpg",
    "https://country-fawn.vercel.app/assets/imgs/rwanda.jpg",
    "https://country-fawn.vercel.app/assets/imgs/uganda.jpg",
    "https://country-fawn.vercel.app/assets/imgs/chad.jpg",
    "https://country-fawn.vercel.app/assets/imgs/namibia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/chile.jpg",
    "https://country-fawn.vercel.app/assets/imgs/albania.jpg",
    "https://country-fawn.vercel.app/assets/imgs/denmark.jpg",
    "https://country-fawn.vercel.app/assets/imgs/cuba.jpg",
    "https://country-fawn.vercel.app/assets/imgs/Dominica.jpg",
    "https://country-fawn.vercel.app/assets/imgs/india.jpg",
    "https://country-fawn.vercel.app/assets/imgs/sweden.jpg",
    "https://country-fawn.vercel.app/assets/imgs/yemen.jpg",
    "https://country-fawn.vercel.app/assets/imgs/micronesia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/solomon-islands.jpg",
    "https://country-fawn.vercel.app/assets/imgs/estonia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/vanuatu.jpg",
    "https://country-fawn.vercel.app/assets/imgs/kenya.jpg",
    "https://country-fawn.vercel.app/assets/imgs/czechia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/suriname.jpg",
    "https://country-fawn.vercel.app/assets/imgs/peru.jpg",
    "https://country-fawn.vercel.app/assets/imgs/angola.jpg",
    "https://country-fawn.vercel.app/assets/imgs/bosnia-and-herzegovina.jpg",
    "https://country-fawn.vercel.app/assets/imgs/nicaragua.jpg",
    "https://country-fawn.vercel.app/assets/imgs/saint-lucia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/iran.jpg",
    "https://country-fawn.vercel.app/assets/imgs/finland.jpg",
    "https://country-fawn.vercel.app/assets/imgs/canada.jpg",
    "https://country-fawn.vercel.app/assets/imgs/ghana.jpg",
    "https://country-fawn.vercel.app/assets/imgs/comoros.jpg",
    "https://country-fawn.vercel.app/assets/imgs/ireland.jpg",
    "https://country-fawn.vercel.app/assets/imgs/zimbabwe.jpg",
    "https://country-fawn.vercel.app/assets/imgs/iceland.jpg",
    "https://country-fawn.vercel.app/assets/imgs/samoa.jpg",
    "https://country-fawn.vercel.app/assets/imgs/tunisia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/argentina.jpg",
    "https://country-fawn.vercel.app/assets/imgs/saudi-arabia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/laos.jpg",
    "https://country-fawn.vercel.app/assets/imgs/palestine.jpg",
    "https://country-fawn.vercel.app/assets/imgs/nigeria.jpg",
    "https://country-fawn.vercel.app/assets/imgs/eritrea.jpg",
    "https://country-fawn.vercel.app/assets/imgs/slovakia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/belarus.jpg",
    "https://country-fawn.vercel.app/assets/imgs/germany.jpg",
    "https://country-fawn.vercel.app/assets/imgs/burundi.jpg",
    "https://country-fawn.vercel.app/assets/imgs/indonesia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/australia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/marshall-islands.jpg",
    "https://country-fawn.vercel.app/assets/imgs/cape-verde.jpg",
    "https://country-fawn.vercel.app/assets/imgs/niger.jpg",
    "https://country-fawn.vercel.app/assets/imgs/bahrain.jpg",
    "https://country-fawn.vercel.app/assets/imgs/san-marino.jpg",
    "https://country-fawn.vercel.app/assets/imgs/greece.jpg",
    "https://country-fawn.vercel.app/assets/imgs/pakistan.jpg",
    "https://country-fawn.vercel.app/assets/imgs/hungary.jpg",
    "https://country-fawn.vercel.app/assets/imgs/tonga.jpg",
    "https://country-fawn.vercel.app/assets/imgs/spain.jpg",
    "https://country-fawn.vercel.app/assets/imgs/venezuela.jpg",
    "https://country-fawn.vercel.app/assets/imgs/monaco.jpg",
    "https://country-fawn.vercel.app/assets/imgs/paraguay.jpg",
    "https://country-fawn.vercel.app/assets/imgs/ukraine.jpg",
    "https://country-fawn.vercel.app/assets/imgs/uzbekistan.jpg",
    "https://country-fawn.vercel.app/assets/imgs/oman.jpg",
    "https://country-fawn.vercel.app/assets/imgs/turkey.jpg",
    "https://country-fawn.vercel.app/assets/imgs/south-korea.jpg",
    "https://country-fawn.vercel.app/assets/imgs/tajikistan.jpg",
    "https://country-fawn.vercel.app/assets/imgs/north-macedonia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/brazil.jpg",
    "https://country-fawn.vercel.app/assets/imgs/united-arab-emirates.jpg",
    "https://country-fawn.vercel.app/assets/imgs/north-korea.jpg",
    "https://country-fawn.vercel.app/assets/imgs/guyana.jpg",
    "https://country-fawn.vercel.app/assets/imgs/democratic-republic-of-the-kongo.jpg",
    "https://country-fawn.vercel.app/assets/imgs/bangladesh.jpg",
    "https://country-fawn.vercel.app/assets/imgs/gabon.jpg",
    "https://country-fawn.vercel.app/assets/imgs/liechtenstein.jpg",
    "https://country-fawn.vercel.app/assets/imgs/costa-rica.jpg",
    "https://country-fawn.vercel.app/assets/imgs/mongolia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/china.jpg",
    "https://country-fawn.vercel.app/assets/imgs/somalia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/cambodia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/russia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/singapore.jpg",
    "https://country-fawn.vercel.app/assets/imgs/kyrgyzstan.jpg",
    "https://country-fawn.vercel.app/assets/imgs/cyprus.jpg",
    "https://country-fawn.vercel.app/assets/imgs/japan.jpg",
    "https://country-fawn.vercel.app/assets/imgs/syria.jpg",
    "https://country-fawn.vercel.app/assets/imgs/panama.jpg",
    "https://country-fawn.vercel.app/assets/imgs/montenegro.jpg",
    "https://country-fawn.vercel.app/assets/imgs/malawi.jpg",
    "https://country-fawn.vercel.app/assets/imgs/south-sudan.jpg",
    "https://country-fawn.vercel.app/assets/imgs/romania.jpg",
    "https://country-fawn.vercel.app/assets/imgs/latvia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/qatar.jpg",
    "https://country-fawn.vercel.app/assets/imgs/madagascar.jpg",
    "https://country-fawn.vercel.app/assets/imgs/serbia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/uruguay.jpg",
    "https://country-fawn.vercel.app/assets/imgs/papua-new-guinea.jpg",
    "https://country-fawn.vercel.app/assets/imgs/mauritius.jpg",
    "https://country-fawn.vercel.app/assets/imgs/libya.jpg",
    "https://country-fawn.vercel.app/assets/imgs/vietnam.jpg",
    "https://country-fawn.vercel.app/assets/imgs/turkmenistan.jpg",
    "https://country-fawn.vercel.app/assets/imgs/senegal.jpg",
    "https://country-fawn.vercel.app/assets/imgs/belize.jpg",
    "https://country-fawn.vercel.app/assets/imgs/tanzania.jpg",
    "https://country-fawn.vercel.app/assets/imgs/sao-tome-and-principe.jpg",
    "https://country-fawn.vercel.app/assets/imgs/saint-kitts-and-nevis.jpg",
    "https://country-fawn.vercel.app/assets/imgs/morocco.jpg",
    "https://country-fawn.vercel.app/assets/imgs/malta.jpg",
    "https://country-fawn.vercel.app/assets/imgs/poland.jpg",
    "https://country-fawn.vercel.app/assets/imgs/south-africa.jpg",
    "https://country-fawn.vercel.app/assets/imgs/new-zealand.jpg",
    "https://country-fawn.vercel.app/assets/imgs/togo.jpg",
    "https://country-fawn.vercel.app/assets/imgs/lebanon.jpg",
    "https://country-fawn.vercel.app/assets/imgs/moldova.jpg",
    "https://country-fawn.vercel.app/assets/imgs/georgia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/italy.jpg",
    "https://country-fawn.vercel.app/assets/imgs/kiribati.jpg",
    "https://country-fawn.vercel.app/assets/imgs/iraq.jpg",
    "https://country-fawn.vercel.app/assets/imgs/mexico.jpg",
    "https://country-fawn.vercel.app/assets/imgs/Equatorial-guinea.jpg",
    "https://country-fawn.vercel.app/assets/imgs/lithuania.jpg",
    "https://country-fawn.vercel.app/assets/imgs/philippines.jpg",
    "https://country-fawn.vercel.app/assets/imgs/liberia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/myanmar.jpg",
    "https://country-fawn.vercel.app/assets/imgs/saint-vincent-grenadines.jpg",
    "https://country-fawn.vercel.app/assets/imgs/benin.jpg",
    "https://country-fawn.vercel.app/assets/imgs/france.jpg",
    "https://country-fawn.vercel.app/assets/imgs/kazakhstan.jpg",
    "https://country-fawn.vercel.app/assets/imgs/seychelles.jpg",
    "https://country-fawn.vercel.app/assets/imgs/crotia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/sudan.jpg",
    "https://country-fawn.vercel.app/assets/imgs/mauritania.jpg",
    "https://country-fawn.vercel.app/assets/imgs/bahamas.jpg",
    "https://country-fawn.vercel.app/assets/imgs/slovenia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/afghanistan.jpg",
    "https://country-fawn.vercel.app/assets/imgs/belgium.jpg",
    "https://country-fawn.vercel.app/assets/imgs/djibouti.jpg",
    "https://country-fawn.vercel.app/assets/imgs/tuvalu.jpg",
    "https://country-fawn.vercel.app/assets/imgs/brunei.jpg",
    "https://country-fawn.vercel.app/assets/imgs/guinea-bissau.jpg",
    "https://country-fawn.vercel.app/assets/imgs/central-african-republic.jpg",
    "https://country-fawn.vercel.app/assets/imgs/netherlands.jpg",
    "https://country-fawn.vercel.app/assets/imgs/jamaica.jpg",
    "https://country-fawn.vercel.app/assets/imgs/zambia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/cote-d'Ivoire.jpg",
    "https://country-fawn.vercel.app/assets/imgs/barbados.jpg",
    "https://country-fawn.vercel.app/assets/imgs/norway.jpg",
    "https://country-fawn.vercel.app/assets/imgs/burkina-faso.jpg",
    "https://country-fawn.vercel.app/assets/imgs/palau.jpg",
    "https://country-fawn.vercel.app/assets/imgs/israel.jpg",
    "https://country-fawn.vercel.app/assets/imgs/switzerland.jpg",
    "https://country-fawn.vercel.app/assets/imgs/portugal.jpg",
    "https://country-fawn.vercel.app/assets/imgs/colombia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/timor-leste.jpg",
    "https://country-fawn.vercel.app/assets/imgs/trinidad-and-tobago.jpg",
    "https://country-fawn.vercel.app/assets/imgs/antigua-and-barbuda.jpg",
    "https://country-fawn.vercel.app/assets/imgs/fiji.jpg",
    "https://country-fawn.vercel.app/assets/imgs/maldives.jpg",
    "https://country-fawn.vercel.app/assets/imgs/nepal.jpg",
    "https://country-fawn.vercel.app/assets/imgs/united-kingdom.jpg",
    "https://country-fawn.vercel.app/assets/imgs/lesotho.jpg",
    "https://country-fawn.vercel.app/assets/imgs/gambia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/cameroon.jpg",
    "https://country-fawn.vercel.app/assets/imgs/kuwait.jpg",
    "https://country-fawn.vercel.app/assets/imgs/nauru.jpg",
    "https://country-fawn.vercel.app/assets/imgs/bulgaria.jpg",
    "https://country-fawn.vercel.app/assets/imgs/thailand.jpg",
    "https://country-fawn.vercel.app/assets/imgs/vatican-city.jpg",
    "https://country-fawn.vercel.app/assets/imgs/dominican-republic.jpg",
    "https://country-fawn.vercel.app/assets/imgs/mozambique.jpg",
    "https://country-fawn.vercel.app/assets/imgs/ethiopia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/grenada.jpg",
    "https://country-fawn.vercel.app/assets/imgs/haiti.jpg",
    "https://country-fawn.vercel.app/assets/imgs/jordan.jpg",
    "https://country-fawn.vercel.app/assets/imgs/algeria.jpg",
    "https://country-fawn.vercel.app/assets/imgs/botswana.jpg",
    "https://country-fawn.vercel.app/assets/imgs/sierra-leone.jpg",
    "https://country-fawn.vercel.app/assets/imgs/armenia.jpg",
    "https://country-fawn.vercel.app/assets/imgs/azerbaijan.jpg",
    "https://country-fawn.vercel.app/assets/imgs/ecuador.jpg",
    "https://country-fawn.vercel.app/assets/imgs/austria.jpg",
    "https://country-fawn.vercel.app/assets/imgs/andorra.jpg",
    "https://country-fawn.vercel.app/assets/imgs/sri-lanka.jpg",
    "https://country-fawn.vercel.app/assets/imgs/guniea.jpg"

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

    imgs[delIndex].id = imgs[delIndex].src.slice(44, -4).replaceAll("-", " ").toUpperCase();
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



