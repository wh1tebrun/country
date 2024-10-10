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

countryURLS = [
    "/assets/flags/algeria.jpg",
    "/assets/flags/hungary.jpg",
    "/assets/flags/liechtenstein.jpg",
    "/assets/flags/yemen.jpg",
    "/assets/flags/monaco.jpg",
    "/assets/flags/cyprus.jpg",
    "/assets/flags/togo.jpg",
    "/assets/flags/chile.jpg",
    "/assets/flags/bangladesh.jpg",
    "/assets/flags/burundi.jpg",
    "/assets/flags/cote-d'ivoire.jpg",
    "/assets/flags/barbados.jpg",
    "/assets/flags/cuba.jpg",
    "/assets/flags/timor-leste.jpg",
    "/assets/flags/haiti.jpg",
    "/assets/flags/jordan.jpg",
    "/assets/flags/qatar.jpg",
    "/assets/flags/samoa.jpg",
    "/assets/flags/lesotho.jpg",
    "/assets/flags/bahamas.jpg",
    "/assets/flags/paraguay.jpg",
    "/assets/flags/czechia.jpg",
    "/assets/flags/Dominica.jpg",
    "/assets/flags/serbia.jpg",
    "/assets/flags/uzbekistan.jpg",
    "/assets/flags/crotia.jpg",
    "/assets/flags/peru.jpg",
    "/assets/flags/philippines.jpg",
    "/assets/flags/somalia.jpg",
    "/assets/flags/san-marino.jpg",
    "/assets/flags/thailand.jpg",
    "/assets/flags/switzerland.jpg",
    "/assets/flags/ecuador.jpg",
    "/assets/flags/guniea.jpg",
    "/assets/flags/slovakia.jpg",
    "/assets/flags/united-states.jpg",
    "/assets/flags/burkina-faso.jpg",
    "/assets/flags/tajikistan.jpg",
    "/assets/flags/japan.jpg",
    "/assets/flags/brunei.jpg",
    "/assets/flags/nicaragua.jpg",
    "/assets/flags/papua-new-guinea.jpg",
    "/assets/flags/benin.jpg",
    "/assets/flags/panama.jpg",
    "/assets/flags/laos.jpg",
    "/assets/flags/tuvalu.jpg",
    "/assets/flags/estonia.jpg",
    "/assets/flags/madagascar.jpg",
    "/assets/flags/spain.jpg",
    "/assets/flags/finland.jpg",
    "/assets/flags/guyana.jpg",
    "/assets/flags/libya.jpg",
    "/assets/flags/central-african-republic.jpg",
    "/assets/flags/austria.jpg",
    "/assets/flags/democratic-republic-of-the-kongo.jpg",
    "/assets/flags/sudan.jpg",
    "/assets/flags/rwanda.jpg",
    "/assets/flags/kiribati.jpg",
    "/assets/flags/trinidad-and-tobago.jpg",
    "/assets/flags/senegal.jpg",
    "/assets/flags/bahrain.jpg",
    "/assets/flags/gabon.jpg",
    "/assets/flags/oman.jpg",
    "/assets/flags/guinea-bissau.jpg",
    "/assets/flags/honduras.jpg",
    "/assets/flags/bosnia-and-herzegovina.jpg",
    "/assets/flags/north-macedonia.jpg",
    "/assets/flags/djibouti.jpg",
    "/assets/flags/slovenia.jpg",
    "/assets/flags/malawi.jpg",
    "/assets/flags/sri-lanka.jpg",
    "/assets/flags/palestine.jpg",
    "/assets/flags/Equatorial-guinea.jpg",
    "/assets/flags/palau.jpg",
    "/assets/flags/namibia.jpg",
    "/assets/flags/ireland.jpg",
    "/assets/flags/portugal.jpg",
    "/assets/flags/malaysia.jpg",
    "/assets/flags/guatemala.jpg",
    "/assets/flags/china.jpg",
    "/assets/flags/belgium.jpg",
    "/assets/flags/bulgaria.jpg",
    "/assets/flags/cambodia.jpg",
    "/assets/flags/vanuatu.jpg",
    "/assets/flags/botswana.jpg",
    "/assets/flags/costa-rica.jpg",
    "/assets/flags/zambia.jpg",
    "/assets/flags/armenia.jpg",
    "/assets/flags/malta.jpg",
    "/assets/flags/turkey.jpg",
    "/assets/flags/lebanon.jpg",
    "/assets/flags/india.jpg",
    "/assets/flags/georgia.jpg",
    "/assets/flags/montenegro.jpg",
    "/assets/flags/latvia.jpg",
    "/assets/flags/greece.jpg",
    "/assets/flags/kenya.jpg",
    "/assets/flags/azerbaijan.jpg",
    "/assets/flags/cameroon.jpg",
    "/assets/flags/albania.jpg",
    "/assets/flags/egypt.jpg",
    "/assets/flags/mauritius.jpg",
    "/assets/flags/chad.jpg",
    "/assets/flags/belize.jpg",
    "/assets/flags/bolivia.jpg",
    "/assets/flags/sweden.jpg",
    "/assets/flags/angola.jpg",
    "/assets/flags/syria.jpg",
    "/assets/flags/sierra-leone.jpg",
    "/assets/flags/comoros.jpg",
    "/assets/flags/denmark.jpg",
    "/assets/flags/australia.jpg",
    "/assets/flags/iceland.jpg",
    "/assets/flags/kazakhstan.jpg",
    "/assets/flags/fiji.jpg",
    "/assets/flags/colombia.jpg",
    "/assets/flags/mali.jpg",
    "/assets/flags/eswatini.jpg",
    "/assets/flags/south-korea.jpg",
    "/assets/flags/south-sudan.jpg",
    "/assets/flags/turkmenistan.jpg",
    "/assets/flags/bhutan.jpg",
    "/assets/flags/poland.jpg",
    "/assets/flags/nepal.jpg",
    "/assets/flags/nauru.jpg",
    "/assets/flags/sao-tome-and-principe.jpg",
    "/assets/flags/saint-lucia.jpg",
    "/assets/flags/russia.jpg",
    "/assets/flags/nigeria.jpg",
    "/assets/flags/france.jpg",
    "/assets/flags/solomon-islands.jpg",
    "/assets/flags/mongolia.jpg",
    "/assets/flags/argentina.jpg",
    "/assets/flags/seychelles.jpg",
    "/assets/flags/tanzania.jpg",
    "/assets/flags/norway.jpg",
    "/assets/flags/united-kingdom.jpg",
    "/assets/flags/moldova.jpg",
    "/assets/flags/gambia.jpg",
    "/assets/flags/israel.jpg",
    "/assets/flags/germany.jpg",
    "/assets/flags/pakistan.jpg",
    "/assets/flags/grenada.jpg",
    "/assets/flags/ghana.jpg",
    "/assets/flags/cape-verde.jpg",
    "/assets/flags/united-arab-emirates.jpg",
    "/assets/flags/kyrgyzstan.jpg",
    "/assets/flags/tonga.jpg",
    "/assets/flags/ukraine.jpg",
    "/assets/flags/saudi-arabia.jpg",
    "/assets/flags/mozambique.jpg",
    "/assets/flags/indonesia.jpg",
    "/assets/flags/micronesia.jpg",
    "/assets/flags/congo.jpg",
    "/assets/flags/italy.jpg",
    "/assets/flags/venezuela.jpg",
    "/assets/flags/vietnam.jpg",
    "/assets/flags/iran.jpg",
    "/assets/flags/lithuania.jpg",
    "/assets/flags/saint-vincent-grenadines.jpg",
    "/assets/flags/uruguay.jpg",
    "/assets/flags/romania.jpg",
    "/assets/flags/new-zealand.jpg",
    "/assets/flags/uganda.jpg",
    "/assets/flags/netherlands.jpg",
    "/assets/flags/morocco.jpg",
    "/assets/flags/zimbabwe.jpg",
    "/assets/flags/eritrea.jpg",
    "/assets/flags/kuwait.jpg",
    "/assets/flags/afghanistan.jpg",
    "/assets/flags/suriname.jpg",
    "/assets/flags/belarus.jpg",
    "/assets/flags/iraq.jpg",
    "/assets/flags/mauritania.jpg",
    "/assets/flags/el-salvador.jpg",
    "/assets/flags/tunisia.jpg",
    "/assets/flags/jamaica.jpg",
    "/assets/flags/myanmar.jpg",
    "/assets/flags/canada.jpg",
    "/assets/flags/maldives.jpg",
    "/assets/flags/south-africa.jpg",
    "/assets/flags/vatican-city.jpg",
    "/assets/flags/brazil.jpg",
    "/assets/flags/niger.jpg",
    "/assets/flags/mexico.jpg",
    "/assets/flags/north-korea.jpg",
    "/assets/flags/liberia.jpg",
    "/assets/flags/saint-kitts-and-nevis.jpg",
    "/assets/flags/antigua-and-barbuda.jpg",
    "/assets/flags/singapore.jpg",
    "/assets/flags/marshall-islands.jpg",
    "/assets/flags/andorra.jpg",
    "/assets/flags/ethiopia.jpg",
    "/assets/flags/dominican-republic.jpg",
    "/assets/flags/luxembourg.jpg",

]
imgsrcs = [

    '/assets/capital-cities/algiers.jpg',
    '/assets/capital-cities/budapest.jpg',
    '/assets/capital-cities/vaduz.jpg',
    '/assets/capital-cities/aden.jpg',
    '/assets/capital-cities/monaco.jpg',
    '/assets/capital-cities/nicosia.jpg',
    '/assets/capital-cities/lome.jpg',
    '/assets/capital-cities/santiago.jpg',
    '/assets/capital-cities/dhaka.jpg',
    '/assets/capital-cities/gitega.jpg',
    '/assets/capital-cities/abidjan.jpg',
    '/assets/capital-cities/bridgetown.jpg',
    '/assets/capital-cities/havana.jpg',
    '/assets/capital-cities/dili.jpg',
    '/assets/capital-cities/port-au-prince.jpg',
    '/assets/capital-cities/amman.jpg',
    '/assets/capital-cities/doha.jpg',
    '/assets/capital-cities/apia.jpg',
    '/assets/capital-cities/maseru.jpg',
    '/assets/capital-cities/nassau.jpg',
    '/assets/capital-cities/asuncion.jpg',
    '/assets/capital-cities/prague.jpg',
    '/assets/capital-cities/roseau.jpg',
    '/assets/capital-cities/belgrade.jpg',
    '/assets/capital-cities/tashkent.jpg',
    "/assets/capital-cities/zagreb.jpg",
    "/assets/capital-cities/lima.jpg",
    "/assets/capital-cities/manila.jpg",
    "/assets/capital-cities/mogadishu.jpg",
    "/assets/capital-cities/san-marino.jpg",
    "/assets/capital-cities/bangkok.jpg",
    "/assets/capital-cities/bern.jpg",
    "/assets/capital-cities/quito.jpg",
    "/assets/capital-cities/conakry.jpg",
    "/assets/capital-cities/bratislava.jpg",
    "/assets/capital-cities/washington-d-c.jpg",
    "/assets/capital-cities/ouagadougou.jpg",
    "/assets/capital-cities/dushanbe.jpg",
    "/assets/capital-cities/tokyo.jpg",
    "/assets/capital-cities/bandar-seri-begawan.jpg",
    "/assets/capital-cities/managua.jpg",
    "/assets/capital-cities/port-moresby.jpg",
    "/assets/capital-cities/porto-novo.jpg",
    "/assets/capital-cities/panama-city.jpg",
    "/assets/capital-cities/vientiane.jpg",
    "/assets/capital-cities/funafuti.jpg",
    "/assets/capital-cities/tallinn.jpg",
    "/assets/capital-cities/antananarivo.jpg",
    "/assets/capital-cities/madrid.jpg",
    "/assets/capital-cities/helsinki.jpg",
    "/assets/capital-cities/georgetown.jpg",
    "/assets/capital-cities/tripoli.jpg",
    "/assets/capital-cities/bangui.jpg",
    "/assets/capital-cities/vienna.jpg",
    "/assets/capital-cities/kinshasa.jpg",
    "/assets/capital-cities/khartoum.jpg",
    "/assets/capital-cities/kigali.jpg",
    "/assets/capital-cities/south-tarawa.jpg",
    "/assets/capital-cities/port-of-spain.jpg",
    "/assets/capital-cities/dakar.jpg",
    "/assets/capital-cities/manama.jpg",
    "/assets/capital-cities/libreville.jpg",
    "/assets/capital-cities/muscat.jpg",
    "/assets/capital-cities/bissau.jpg",
    "/assets/capital-cities/tegucigalpa.jpg",
    "/assets/capital-cities/sarajevo.jpg",
    "/assets/capital-cities/skopje.jpg",
    "/assets/capital-cities/djibouti.jpg",
    "/assets/capital-cities/ljublijana.jpg",
    "/assets/capital-cities/lilongwe.jpg",
    "/assets/capital-cities/colombo.jpg",
    "/assets/capital-cities/jerusalem.jpg",
    "/assets/capital-cities/malabo.jpg",
    "/assets/capital-cities/ngerulmud.jpg",
    "/assets/capital-cities/windhoek.jpg",
    "/assets/capital-cities/dublin.jpg",
    "/assets/capital-cities/lisbon.jpg",
    "/assets/capital-cities/kuala-lumpur.jpg",
    "/assets/capital-cities/guatemala-city.jpg",
    "/assets/capital-cities/beijing.jpg",
    "/assets/capital-cities/brussels.jpg",
    "/assets/capital-cities/sofia.jpg",
    "/assets/capital-cities/phnom-penh.jpg",
    "/assets/capital-cities/port-vila.jpg",
    "/assets/capital-cities/gaborone.jpg",
    "/assets/capital-cities/san-jose.jpg",
    "/assets/capital-cities/lusaka.jpg",
    "/assets/capital-cities/yerevan.jpg",
    "/assets/capital-cities/valletta.jpg",
    "/assets/capital-cities/ankara.jpg",
    "/assets/capital-cities/beirut.jpg",
    "/assets/capital-cities/new-delhi.jpg",
    "/assets/capital-cities/tbilisi.jpg",
    "/assets/capital-cities/podgorica.jpg",
    "/assets/capital-cities/riga.jpg",
    "/assets/capital-cities/athens.jpg",
    "/assets/capital-cities/nairobi.jpg",
    "/assets/capital-cities/baku.jpg",
    "/assets/capital-cities/yaounde.jpg",
    "/assets/capital-cities/tirana.jpg",
    "/assets/capital-cities/cairo.jpg",
    "/assets/capital-cities/port-louis.jpg",
    "/assets/capital-cities/n'djamena.jpg",
    "/assets/capital-cities/belmopan.jpg",
    "/assets/capital-cities/sucre.jpg",
    "/assets/capital-cities/stockholm.jpg",
    "/assets/capital-cities/luanda.jpg",
    "/assets/capital-cities/damascus.jpg",
    "/assets/capital-cities/freetown.jpg",
    "/assets/capital-cities/moroni.jpg",
    "/assets/capital-cities/copenhagen.jpg",
    "/assets/capital-cities/canberra.jpg",
    "/assets/capital-cities/reykjavik.jpg",
    "/assets/capital-cities/astana.jpg",
    "/assets/capital-cities/suva.jpg",
    "/assets/capital-cities/bogota.jpg",
    "/assets/capital-cities/bamako.jpg",
    "/assets/capital-cities/mbabane.jpg",
    "/assets/capital-cities/seoul.jpg",
    "/assets/capital-cities/juba.jpg",
    "/assets/capital-cities/ashgabat.jpg",
    "/assets/capital-cities/thimphu.jpg",
    "/assets/capital-cities/warsaw.jpg",
    "/assets/capital-cities/kathmandu.jpg",
    "/assets/capital-cities/yaren.jpg",
    "/assets/capital-cities/sao-tome.jpg",
    "/assets/capital-cities/castries.jpg",
    "/assets/capital-cities/moscow.jpg",
    "/assets/capital-cities/abuja.jpg",
    "/assets/capital-cities/paris.jpg",
    "/assets/capital-cities/honiara.jpg",
    "/assets/capital-cities/ulaanbaatar.jpg",
    "/assets/capital-cities/buenos-aires.jpg",
    "/assets/capital-cities/victoria.jpg",
    "/assets/capital-cities/dodoma.jpg",
    "/assets/capital-cities/oslo.jpg",
    "/assets/capital-cities/london.jpg",
    "/assets/capital-cities/chisinau.jpg",
    "/assets/capital-cities/banjul.jpg",
    "/assets/capital-cities/jerusalem.jpg",
    "/assets/capital-cities/berlin.jpg",
    "/assets/capital-cities/islamabad.jpg",
    "/assets/capital-cities/saint-george's.jpg",
    "/assets/capital-cities/accra.jpg",
    "/assets/capital-cities/praia.jpg",
    "/assets/capital-cities/abu-dhabi.jpg",
    "/assets/capital-cities/bishkek.jpg",
    "/assets/capital-cities/nuku'alofa.jpg",
    "/assets/capital-cities/kyiv.jpg",
    "/assets/capital-cities/riyadh.jpg",
    "/assets/capital-cities/maputo.jpg",
    "/assets/capital-cities/jakarta.jpg",
    "/assets/capital-cities/palikir.jpg",
    "/assets/capital-cities/brazzaville.jpg",
    "/assets/capital-cities/rome.jpg",
    "/assets/capital-cities/caracas.jpg",
    "/assets/capital-cities/hanoi.jpg",
    "/assets/capital-cities/tehran.jpg",
    "/assets/capital-cities/vilnius.jpg",
    "/assets/capital-cities/kingstown.jpg",
    "/assets/capital-cities/montevideo.jpg",
    "/assets/capital-cities/bucharest.jpg",
    "/assets/capital-cities/wellington.jpg",
    "/assets/capital-cities/kampala.jpg",
    "/assets/capital-cities/amsterdam.jpg",
    "/assets/capital-cities/rabat.jpg",
    "/assets/capital-cities/harare.jpg",
    "/assets/capital-cities/asmara.jpg",
    "/assets/capital-cities/kuwait-city.jpg",
    "/assets/capital-cities/kabul.jpg",
    "/assets/capital-cities/paramaribo.jpg",
    "/assets/capital-cities/minsk.jpg",
    "/assets/capital-cities/baghdad.jpg",
    "/assets/capital-cities/nouakchott.jpg",
    "/assets/capital-cities/san-salvador.jpg",
    "/assets/capital-cities/tunis.jpg",
    "/assets/capital-cities/kingston.jpg",
    "/assets/capital-cities/naypyidaw.jpg",
    "/assets/capital-cities/ottawa.jpg",
    "/assets/capital-cities/male.jpg",
    "/assets/capital-cities/pretoria.jpg",
    "/assets/capital-cities/vatican-city.jpg",
    "/assets/capital-cities/brasilia.jpg",
    "/assets/capital-cities/niamey.jpg",
    "/assets/capital-cities/mexico-city.jpg",
    "/assets/capital-cities/pyongyang.jpg",
    "/assets/capital-cities/monrovia.jpg",
    "/assets/capital-cities/basseterre.jpg",
    "/assets/capital-cities/saint-john's.jpg",
    "/assets/capital-cities/singapore.jpg",
    "/assets/capital-cities/majuro.jpg",
    "/assets/capital-cities/andorra-la-vella.jpg",
    "/assets/capital-cities/addis-ababa.jpg",
    "/assets/capital-cities/santo-domingo.jpg",
    "/assets/capital-cities/luxembourg.jpg",
]

countryNames = Array.from(document.getElementsByClassName("country-president"))
var myLeaderName = document.getElementById("country-name");
var myOutOfScore = document.getElementsByClassName("out-of-score")
var flagsDone = document.getElementById("flags-done")
correctFlags = Array.from(document.getElementsByClassName("small-flag"))
playAgainButtons = Array.from(document.getElementsByClassName("stats-btn__again2"))


// Function to replace the image source of the image at delIndex with a random image from imgsrcs
// and then remove the used image source from imgsrcs
function replaceAndRemoveImage(delIndex) {
    function findNameFromPath(path) {
        const nameStartIndex = path.lastIndexOf("/") + 1;
        const extensionStartIndex = nameStartIndex + path.slice(nameStartIndex).lastIndexOf(".");
    
        return path.slice(nameStartIndex, extensionStartIndex).replaceAll("-", " ").toUpperCase();
    }
    
    const rndNum = Math.floor(getRandomArbitrary(0, imgsrcs.length));
    imgs[delIndex].src = imgsrcs[rndNum];

    imgs[delIndex].id = findNameFromPath(countryURLS[rndNum]);
    countryNames[delIndex].innerText = imgs[delIndex].id

    imgs[delIndex].id = findNameFromPath(imgs[delIndex].src);

    return imgs[delIndex];
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
    myLeaderName.innerText = chosenImg.id
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



    if (myLeaderName.innerText == imgId) {
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
            emojis: ['🌈', '⚡️', '', '✨', '💫', '🌸'],
        }).then(() => jsConfetti.addConfetti());

        playAgainButtons[0].style.visibility = 'visible';

    }

    else {
        id_i = replaceAndRemoveImage(i);
        id_delIndex1 = replaceAndRemoveImage(delIndexes[0]);
        id_delIndex2 = replaceAndRemoveImage(delIndexes[1]);
        id_delIndex3 = replaceAndRemoveImage(delIndexes[2]);

        chosenImg = randomizer(id_i, id_delIndex1, id_delIndex2, id_delIndex3)
        myLeaderName.innerText = chosenImg.id;





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