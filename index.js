
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
    "https://country-fawn.vercel.app/imgs/united-states.png",
    "https://country-fawn.vercel.app/imgs/malaysia.png",
    "https://country-fawn.vercel.app/imgs/honduras.png",
    "https://country-fawn.vercel.app/imgs/el-salvador.png",
    "https://country-fawn.vercel.app/imgs/bolivia.png",
    "https://country-fawn.vercel.app/imgs/bhutan.png",
    "https://country-fawn.vercel.app/imgs/congo.png",
    "https://country-fawn.vercel.app/imgs/guatemala.png",
    "https://country-fawn.vercel.app/imgs/mali.png",
    "https://country-fawn.vercel.app/imgs/luxembourg.png",
    "https://country-fawn.vercel.app/imgs/egypt.png",
    "https://country-fawn.vercel.app/imgs/eswatini.png",
    "https://country-fawn.vercel.app/imgs/rwanda.png",
    "https://country-fawn.vercel.app/imgs/uganda.png",
    "https://country-fawn.vercel.app/imgs/chad.png",
    "https://country-fawn.vercel.app/imgs/namibia.png",
    "https://country-fawn.vercel.app/imgs/chile.png",
    "https://country-fawn.vercel.app/imgs/albania.png",
    "https://country-fawn.vercel.app/imgs/denmark.png",
    "https://country-fawn.vercel.app/imgs/cuba.png",
    "https://country-fawn.vercel.app/imgs/Dominica.png",
    "https://country-fawn.vercel.app/imgs/india.png",
    "https://country-fawn.vercel.app/imgs/sweden.png",
    "https://country-fawn.vercel.app/imgs/yemen.png",
    "https://country-fawn.vercel.app/imgs/micronesia.png",
    "https://country-fawn.vercel.app/imgs/solomon-islands.png",
    "https://country-fawn.vercel.app/imgs/estonia.png",
    "https://country-fawn.vercel.app/imgs/vanuatu.png",
    "https://country-fawn.vercel.app/imgs/kenya.png",
    "https://country-fawn.vercel.app/imgs/czechia.png",
    "https://country-fawn.vercel.app/imgs/suriname.png",
    "https://country-fawn.vercel.app/imgs/peru.png",
    "https://country-fawn.vercel.app/imgs/angola.png",
    "https://country-fawn.vercel.app/imgs/bosnia-and-herzegovina.png",
    "https://country-fawn.vercel.app/imgs/nicaragua.png",
    "https://country-fawn.vercel.app/imgs/saint-lucia.png",
    "https://country-fawn.vercel.app/imgs/iran.png",
    "https://country-fawn.vercel.app/imgs/finland.png",
    "https://country-fawn.vercel.app/imgs/canada.png",
    "https://country-fawn.vercel.app/imgs/ghana.png",
    "https://country-fawn.vercel.app/imgs/comoros.png",
    "https://country-fawn.vercel.app/imgs/ireland.png",
    "https://country-fawn.vercel.app/imgs/zimbabwe.png",
    "https://country-fawn.vercel.app/imgs/iceland.png",
    "https://country-fawn.vercel.app/imgs/samoa.png",
    "https://country-fawn.vercel.app/imgs/tunisia.png",
    "https://country-fawn.vercel.app/imgs/argentina.png",
    "https://country-fawn.vercel.app/imgs/saudi-arabia.png",
    "https://country-fawn.vercel.app/imgs/laos.png",
    "https://country-fawn.vercel.app/imgs/palestine.png",
    "https://country-fawn.vercel.app/imgs/nigeria.png",
    "https://country-fawn.vercel.app/imgs/eritrea.png",
    "https://country-fawn.vercel.app/imgs/slovakia.png",
    "https://country-fawn.vercel.app/imgs/belarus.png",
    "https://country-fawn.vercel.app/imgs/germany.png",
    "https://country-fawn.vercel.app/imgs/burundi.png",
    "https://country-fawn.vercel.app/imgs/indonesia.png",
    "https://country-fawn.vercel.app/imgs/australia.png",
    "https://country-fawn.vercel.app/imgs/marshall-islands.png",
    "https://country-fawn.vercel.app/imgs/cape-verde.png",
    "https://country-fawn.vercel.app/imgs/niger.png",
    "https://country-fawn.vercel.app/imgs/bahrain.png",
    "https://country-fawn.vercel.app/imgs/san-marino.png",
    "https://country-fawn.vercel.app/imgs/greece.png",
    "https://country-fawn.vercel.app/imgs/pakistan.png",
    "https://country-fawn.vercel.app/imgs/hungary.png",
    "https://country-fawn.vercel.app/imgs/tonga.png",
    "https://country-fawn.vercel.app/imgs/spain.png",
    "https://country-fawn.vercel.app/imgs/venezuela.png",
    "https://country-fawn.vercel.app/imgs/monaco.png",
    "https://country-fawn.vercel.app/imgs/paraguay.png",
    "https://country-fawn.vercel.app/imgs/ukraine.png",
    "https://country-fawn.vercel.app/imgs/uzbekistan.png",
    "https://country-fawn.vercel.app/imgs/oman.png",
    "https://country-fawn.vercel.app/imgs/turkey.png",
    "https://country-fawn.vercel.app/imgs/south-korea.png",
    "https://country-fawn.vercel.app/imgs/tajikistan.png",
    "https://country-fawn.vercel.app/imgs/north-macedonia.png",
    "https://country-fawn.vercel.app/imgs/brazil.png",
    "https://country-fawn.vercel.app/imgs/united-arab-emirates.png",
    "https://country-fawn.vercel.app/imgs/north-korea.png",
    "https://country-fawn.vercel.app/imgs/guyana.png",
    "https://country-fawn.vercel.app/imgs/democratic-republic-of-the-kongo.png",
    "https://country-fawn.vercel.app/imgs/bangladesh.png",
    "https://country-fawn.vercel.app/imgs/gabon.png",
    "https://country-fawn.vercel.app/imgs/liechtenstein.png",
    "https://country-fawn.vercel.app/imgs/costa-rica.png",
    "https://country-fawn.vercel.app/imgs/mongolia.png",
    "https://country-fawn.vercel.app/imgs/china.png",
    "https://country-fawn.vercel.app/imgs/somalia.png",
    "https://country-fawn.vercel.app/imgs/cambodia.png",
    "https://country-fawn.vercel.app/imgs/russia.png",
    "https://country-fawn.vercel.app/imgs/singapore.png",
    "https://country-fawn.vercel.app/imgs/kyrgyzstan.png",
    "https://country-fawn.vercel.app/imgs/cyprus.png",
    "https://country-fawn.vercel.app/imgs/japan.png",
    "https://country-fawn.vercel.app/imgs/syria.png",
    "https://country-fawn.vercel.app/imgs/panama.png",
    "https://country-fawn.vercel.app/imgs/montenegro.png",
    "https://country-fawn.vercel.app/imgs/malawi.png",
    "https://country-fawn.vercel.app/imgs/south-sudan.png",
    "https://country-fawn.vercel.app/imgs/romania.png",
    "https://country-fawn.vercel.app/imgs/latvia.png",
    "https://country-fawn.vercel.app/imgs/qatar.png",
    "https://country-fawn.vercel.app/imgs/madagascar.png",
    "https://country-fawn.vercel.app/imgs/serbia.png",
    "https://country-fawn.vercel.app/imgs/uruguay.png",
    "https://country-fawn.vercel.app/imgs/papua-new-guinea.png",
    "https://country-fawn.vercel.app/imgs/mauritius.png",
    "https://country-fawn.vercel.app/imgs/libya.png",
    "https://country-fawn.vercel.app/imgs/vietnam.png",
    "https://country-fawn.vercel.app/imgs/turkmenistan.png",
    "https://country-fawn.vercel.app/imgs/senegal.png",
    "https://country-fawn.vercel.app/imgs/belize.png",
    "https://country-fawn.vercel.app/imgs/tanzania.png",
    "https://country-fawn.vercel.app/imgs/sao-tome-and-principe.png",
    "https://country-fawn.vercel.app/imgs/saint-kitts-and-nevis.png",
    "https://country-fawn.vercel.app/imgs/morocco.png",
    "https://country-fawn.vercel.app/imgs/malta.png",
    "https://country-fawn.vercel.app/imgs/poland.png",
    "https://country-fawn.vercel.app/imgs/south-africa.png",
    "https://country-fawn.vercel.app/imgs/new-zealand.png",
    "https://country-fawn.vercel.app/imgs/togo.png",
    "https://country-fawn.vercel.app/imgs/lebanon.png",
    "https://country-fawn.vercel.app/imgs/moldova.png",
    "https://country-fawn.vercel.app/imgs/georgia.png",
    "https://country-fawn.vercel.app/imgs/italy.png",
    "https://country-fawn.vercel.app/imgs/kiribati.png",
    "https://country-fawn.vercel.app/imgs/iraq.png",
    "https://country-fawn.vercel.app/imgs/mexico.png",
    "https://country-fawn.vercel.app/imgs/Equatorial-guinea.png",
    "https://country-fawn.vercel.app/imgs/lithuania.png",
    "https://country-fawn.vercel.app/imgs/philippines.png",
    "https://country-fawn.vercel.app/imgs/liberia.png",
    "https://country-fawn.vercel.app/imgs/myanmar.png",
    "https://country-fawn.vercel.app/imgs/st-vincent-grenadines.png",
    "https://country-fawn.vercel.app/imgs/benin.png",
    "https://country-fawn.vercel.app/imgs/france.png",
    "https://country-fawn.vercel.app/imgs/kazakhstan.png",
    "https://country-fawn.vercel.app/imgs/seychelles.png",
    "https://country-fawn.vercel.app/imgs/crotia.png",
    "https://country-fawn.vercel.app/imgs/sudan.png",
    "https://country-fawn.vercel.app/imgs/mauritania.png",
    "https://country-fawn.vercel.app/imgs/slovenia.png",
    "https://country-fawn.vercel.app/imgs/afghanistan.png",
    "https://country-fawn.vercel.app/imgs/belgium.png",
    "https://country-fawn.vercel.app/imgs/djibouti.png",
    "https://country-fawn.vercel.app/imgs/tuvalu.png",
    "https://country-fawn.vercel.app/imgs/brunei.png",
    "https://country-fawn.vercel.app/imgs/guinea-bissau.png",
    "https://country-fawn.vercel.app/imgs/central-african-republic.png",
    "https://country-fawn.vercel.app/imgs/netherlands.png",
    "https://country-fawn.vercel.app/imgs/jamaica.png",
    "https://country-fawn.vercel.app/imgs/zambia.png",
    "https://country-fawn.vercel.app/imgs/cote-d'Ivoire.png",
    "https://country-fawn.vercel.app/imgs/barbados.png",
    "https://country-fawn.vercel.app/imgs/norway.png",
    "https://country-fawn.vercel.app/imgs/burkina-faso.png",
    "https://country-fawn.vercel.app/imgs/palau.png",
    "https://country-fawn.vercel.app/imgs/israel.png",
    "https://country-fawn.vercel.app/imgs/switzerland.png",
    "https://country-fawn.vercel.app/imgs/portugal.png",
    "https://country-fawn.vercel.app/imgs/colombia.png",
    "https://country-fawn.vercel.app/imgs/timor-leste.png",
    "https://country-fawn.vercel.app/imgs/trinidad-and-tobago.png",
    "https://country-fawn.vercel.app/imgs/antigua-and-barbuda.png",
    "https://country-fawn.vercel.app/imgs/fiji.png",
    "https://country-fawn.vercel.app/imgs/maldives.png",
    "https://country-fawn.vercel.app/imgs/nepal.png",
    "https://country-fawn.vercel.app/imgs/united-kingdom.png",
    "https://country-fawn.vercel.app/imgs/lesotho.png",
    "https://country-fawn.vercel.app/imgs/gambia.png",
    "https://country-fawn.vercel.app/imgs/cameroon.png",
    "https://country-fawn.vercel.app/imgs/kuwait.png",
    "https://country-fawn.vercel.app/imgs/nauru.png",
    "https://country-fawn.vercel.app/imgs/bulgaria.png",
    "https://country-fawn.vercel.app/imgs/thailand.png",
    "https://country-fawn.vercel.app/imgs/vatican-city.png",
    "https://country-fawn.vercel.app/imgs/dominican-republic.png",
    "https://country-fawn.vercel.app/imgs/mozambique.png",
    "https://country-fawn.vercel.app/imgs/ethiopia.png",
    "https://country-fawn.vercel.app/imgs/grenada.png",
    "https://country-fawn.vercel.app/imgs/haiti.png",
    "https://country-fawn.vercel.app/imgs/jordan.png",
    "https://country-fawn.vercel.app/imgs/algeria.png",
    "https://country-fawn.vercel.app/imgs/botswana.png",
    "https://country-fawn.vercel.app/imgs/sierra-leone.png",
    "https://country-fawn.vercel.app/imgs/armenia.png",
    "https://country-fawn.vercel.app/imgs/azerbaijan.png",
    "https://country-fawn.vercel.app/imgs/ecuador.png",
    "https://country-fawn.vercel.app/imgs/austria.png",
    "https://country-fawn.vercel.app/imgs/andorra.png",
    "https://country-fawn.vercel.app/imgs/sri-lanka.png",
    "https://country-fawn.vercel.app/imgs/guniea.png"

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

    imgs[delIndex].id = imgs[delIndex].src.slice(38, -4).replaceAll("-", " ").toUpperCase();
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



