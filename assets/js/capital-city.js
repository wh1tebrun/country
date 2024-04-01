
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
    "https://country-fawn.vercel.app/assets/flags/algeria.jpg",
    "https://country-fawn.vercel.app/assets/flags/hungary.jpg",
    "https://country-fawn.vercel.app/assets/flags/liechtenstein.jpg",
    "https://country-fawn.vercel.app/assets/flags/yemen.jpg",
    "https://country-fawn.vercel.app/assets/flags/monaco.jpg",
    "https://country-fawn.vercel.app/assets/flags/cyprus.jpg",
    "https://country-fawn.vercel.app/assets/flags/togo.jpg",
    "https://country-fawn.vercel.app/assets/flags/chile.jpg",
    "https://country-fawn.vercel.app/assets/flags/bangladesh.jpg",
    "https://country-fawn.vercel.app/assets/flags/burundi.jpg",
    "https://country-fawn.vercel.app/assets/flags/cote-d'ivoire.jpg",
    "https://country-fawn.vercel.app/assets/flags/barbados.jpg",
    "https://country-fawn.vercel.app/assets/flags/cuba.jpg",
    "https://country-fawn.vercel.app/assets/flags/timor-leste.jpg",
    "https://country-fawn.vercel.app/assets/flags/haiti.jpg",
    "https://country-fawn.vercel.app/assets/flags/jordan.jpg",
    "https://country-fawn.vercel.app/assets/flags/qatar.jpg",
    "https://country-fawn.vercel.app/assets/flags/samoa.jpg",
    "https://country-fawn.vercel.app/assets/flags/lesotho.jpg",
    "https://country-fawn.vercel.app/assets/flags/bahamas.jpg",
    "https://country-fawn.vercel.app/assets/flags/paraguay.jpg",
    "https://country-fawn.vercel.app/assets/flags/czechia.jpg",
    "https://country-fawn.vercel.app/assets/flags/Dominica.jpg",
    "https://country-fawn.vercel.app/assets/flags/serbia.jpg",
    "https://country-fawn.vercel.app/assets/flags/uzbekistan.jpg",
    "https://country-fawn.vercel.app/assets/flags/crotia.jpg",
    "https://country-fawn.vercel.app/assets/flags/peru.jpg",
    "https://country-fawn.vercel.app/assets/flags/philippines.jpg",
    "https://country-fawn.vercel.app/assets/flags/somalia.jpg",
    "https://country-fawn.vercel.app/assets/flags/san-marino.jpg",
    "https://country-fawn.vercel.app/assets/flags/thailand.jpg",
    "https://country-fawn.vercel.app/assets/flags/switzerland.jpg",
    "https://country-fawn.vercel.app/assets/flags/ecuador.jpg",
    "https://country-fawn.vercel.app/assets/flags/guniea.jpg",
    "https://country-fawn.vercel.app/assets/flags/slovakia.jpg",
    "https://country-fawn.vercel.app/assets/flags/united-states.jpg",
    "https://country-fawn.vercel.app/assets/flags/burkina-faso.jpg",
    "https://country-fawn.vercel.app/assets/flags/tajikistan.jpg",
    "https://country-fawn.vercel.app/assets/flags/japan.jpg",
    "https://country-fawn.vercel.app/assets/flags/brunei.jpg",
    "https://country-fawn.vercel.app/assets/flags/nicaragua.jpg",
    "https://country-fawn.vercel.app/assets/flags/papua-new-guinea.jpg",
    "https://country-fawn.vercel.app/assets/flags/benin.jpg",
    "https://country-fawn.vercel.app/assets/flags/panama.jpg",
    "https://country-fawn.vercel.app/assets/flags/laos.jpg",
    "https://country-fawn.vercel.app/assets/flags/tuvalu.jpg",
    "https://country-fawn.vercel.app/assets/flags/estonia.jpg",
    "https://country-fawn.vercel.app/assets/flags/madagascar.jpg",
    "https://country-fawn.vercel.app/assets/flags/spain.jpg",
    "https://country-fawn.vercel.app/assets/flags/finland.jpg",
    "https://country-fawn.vercel.app/assets/flags/guyana.jpg",
    "https://country-fawn.vercel.app/assets/flags/libya.jpg",
    "https://country-fawn.vercel.app/assets/flags/central-african-republic.jpg",
    "https://country-fawn.vercel.app/assets/flags/austria.jpg",
    "https://country-fawn.vercel.app/assets/flags/democratic-republic-of-the-kongo.jpg",
    "https://country-fawn.vercel.app/assets/flags/sudan.jpg",
    "https://country-fawn.vercel.app/assets/flags/rwanda.jpg",
    "https://country-fawn.vercel.app/assets/flags/kiribati.jpg",
    "https://country-fawn.vercel.app/assets/flags/trinidad-and-tobago.jpg",
    "https://country-fawn.vercel.app/assets/flags/senegal.jpg",
    "https://country-fawn.vercel.app/assets/flags/bahrain.jpg",
    "https://country-fawn.vercel.app/assets/flags/gabon.jpg",
    "https://country-fawn.vercel.app/assets/flags/oman.jpg",
    "https://country-fawn.vercel.app/assets/flags/guinea-bissau.jpg",
    "https://country-fawn.vercel.app/assets/flags/honduras.jpg",
    "https://country-fawn.vercel.app/assets/flags/bosnia-and-herzegovina.jpg",
    "https://country-fawn.vercel.app/assets/flags/north-macedonia.jpg",
    "https://country-fawn.vercel.app/assets/flags/djibouti.jpg",
    "https://country-fawn.vercel.app/assets/flags/slovenia.jpg",
    "https://country-fawn.vercel.app/assets/flags/malawi.jpg",
    "https://country-fawn.vercel.app/assets/flags/sri-lanka.jpg",
    "https://country-fawn.vercel.app/assets/flags/palestine.jpg",
    "https://country-fawn.vercel.app/assets/flags/Equatorial-guinea.jpg",
    "https://country-fawn.vercel.app/assets/flags/palau.jpg",
    "https://country-fawn.vercel.app/assets/flags/namibia.jpg",
    "https://country-fawn.vercel.app/assets/flags/ireland.jpg",
    "https://country-fawn.vercel.app/assets/flags/portugal.jpg",
    "https://country-fawn.vercel.app/assets/flags/malaysia.jpg",
    "https://country-fawn.vercel.app/assets/flags/guatemala.jpg",
    "https://country-fawn.vercel.app/assets/flags/china.jpg",
    "https://country-fawn.vercel.app/assets/flags/belgium.jpg",
    "https://country-fawn.vercel.app/assets/flags/bulgaria.jpg",
    "https://country-fawn.vercel.app/assets/flags/cambodia.jpg",
    "https://country-fawn.vercel.app/assets/flags/vanuatu.jpg",
    "https://country-fawn.vercel.app/assets/flags/botswana.jpg",
    "https://country-fawn.vercel.app/assets/flags/costa-rica.jpg",
    "https://country-fawn.vercel.app/assets/flags/zambia.jpg",
    "https://country-fawn.vercel.app/assets/flags/armenia.jpg",
    "https://country-fawn.vercel.app/assets/flags/malta.jpg",
    "https://country-fawn.vercel.app/assets/flags/turkey.jpg",
    "https://country-fawn.vercel.app/assets/flags/lebanon.jpg",
    "https://country-fawn.vercel.app/assets/flags/india.jpg",
    "https://country-fawn.vercel.app/assets/flags/georgia.jpg",
    "https://country-fawn.vercel.app/assets/flags/montenegro.jpg",
    "https://country-fawn.vercel.app/assets/flags/latvia.jpg",
    "https://country-fawn.vercel.app/assets/flags/greece.jpg",
    "https://country-fawn.vercel.app/assets/flags/kenya.jpg",
    "https://country-fawn.vercel.app/assets/flags/azerbaijan.jpg",
    "https://country-fawn.vercel.app/assets/flags/cameroon.jpg",
    "https://country-fawn.vercel.app/assets/flags/albania.jpg",
    "https://country-fawn.vercel.app/assets/flags/egypt.jpg",
    "https://country-fawn.vercel.app/assets/flags/mauritius.jpg",
    "https://country-fawn.vercel.app/assets/flags/chad.jpg",
    "https://country-fawn.vercel.app/assets/flags/belize.jpg",
    "https://country-fawn.vercel.app/assets/flags/bolivia.jpg",
    "https://country-fawn.vercel.app/assets/flags/sweden.jpg",
    "https://country-fawn.vercel.app/assets/flags/angola.jpg",
    "https://country-fawn.vercel.app/assets/flags/syria.jpg",
    "https://country-fawn.vercel.app/assets/flags/sierra-leone.jpg",
    "https://country-fawn.vercel.app/assets/flags/comoros.jpg",
    "https://country-fawn.vercel.app/assets/flags/denmark.jpg",
    "https://country-fawn.vercel.app/assets/flags/australia.jpg",
    "https://country-fawn.vercel.app/assets/flags/iceland.jpg",
    "https://country-fawn.vercel.app/assets/flags/kazakhstan.jpg",
    "https://country-fawn.vercel.app/assets/flags/fiji.jpg",
    "https://country-fawn.vercel.app/assets/flags/colombia.jpg",
    "https://country-fawn.vercel.app/assets/flags/mali.jpg",
    "https://country-fawn.vercel.app/assets/flags/eswatini.jpg",
    "https://country-fawn.vercel.app/assets/flags/south-korea.jpg",
    "https://country-fawn.vercel.app/assets/flags/south-sudan.jpg",
    "https://country-fawn.vercel.app/assets/flags/turkmenistan.jpg",
    "https://country-fawn.vercel.app/assets/flags/bhutan.jpg",
    "https://country-fawn.vercel.app/assets/flags/poland.jpg",
    "https://country-fawn.vercel.app/assets/flags/nepal.jpg",
    "https://country-fawn.vercel.app/assets/flags/nauru.jpg",
    "https://country-fawn.vercel.app/assets/flags/sao-tome-and-principe.jpg",
    "https://country-fawn.vercel.app/assets/flags/saint-lucia.jpg",
    "https://country-fawn.vercel.app/assets/flags/russia.jpg",
    "https://country-fawn.vercel.app/assets/flags/nigeria.jpg",
    "https://country-fawn.vercel.app/assets/flags/france.jpg",
    "https://country-fawn.vercel.app/assets/flags/solomon-islands.jpg",
    "https://country-fawn.vercel.app/assets/flags/mongolia.jpg",
    "https://country-fawn.vercel.app/assets/flags/argentina.jpg",
    "https://country-fawn.vercel.app/assets/flags/seychelles.jpg",
    "https://country-fawn.vercel.app/assets/flags/tanzania.jpg",
    "https://country-fawn.vercel.app/assets/flags/norway.jpg",
    "https://country-fawn.vercel.app/assets/flags/united-kingdom.jpg",
    "https://country-fawn.vercel.app/assets/flags/moldova.jpg",
    "https://country-fawn.vercel.app/assets/flags/gambia.jpg",
    "https://country-fawn.vercel.app/assets/flags/israel.jpg",
    "https://country-fawn.vercel.app/assets/flags/germany.jpg",
    "https://country-fawn.vercel.app/assets/flags/pakistan.jpg",
    "https://country-fawn.vercel.app/assets/flags/grenada.jpg",
    "https://country-fawn.vercel.app/assets/flags/ghana.jpg",
    "https://country-fawn.vercel.app/assets/flags/cape-verde.jpg",
    "https://country-fawn.vercel.app/assets/flags/united-arab-emirates.jpg",
    "https://country-fawn.vercel.app/assets/flags/kyrgyzstan.jpg",
    "https://country-fawn.vercel.app/assets/flags/tonga.jpg",
    "https://country-fawn.vercel.app/assets/flags/ukraine.jpg",
    "https://country-fawn.vercel.app/assets/flags/saudi-arabia.jpg",
    "https://country-fawn.vercel.app/assets/flags/mozambique.jpg",
    "https://country-fawn.vercel.app/assets/flags/indonesia.jpg",
    "https://country-fawn.vercel.app/assets/flags/micronesia.jpg",
    "https://country-fawn.vercel.app/assets/flags/congo.jpg",
    "https://country-fawn.vercel.app/assets/flags/italy.jpg",
    "https://country-fawn.vercel.app/assets/flags/venezuela.jpg",
    "https://country-fawn.vercel.app/assets/flags/vietnam.jpg",
    "https://country-fawn.vercel.app/assets/flags/iran.jpg",
    "https://country-fawn.vercel.app/assets/flags/lithuania.jpg",
    "https://country-fawn.vercel.app/assets/flags/saint-vincent-grenadines.jpg",
    "https://country-fawn.vercel.app/assets/flags/uruguay.jpg",
    "https://country-fawn.vercel.app/assets/flags/romania.jpg",
    "https://country-fawn.vercel.app/assets/flags/new-zealand.jpg",
    "https://country-fawn.vercel.app/assets/flags/uganda.jpg",
    "https://country-fawn.vercel.app/assets/flags/netherlands.jpg",
    "https://country-fawn.vercel.app/assets/flags/morocco.jpg",
    "https://country-fawn.vercel.app/assets/flags/zimbabwe.jpg",
    "https://country-fawn.vercel.app/assets/flags/eritrea.jpg",
    "https://country-fawn.vercel.app/assets/flags/kuwait.jpg",
    "https://country-fawn.vercel.app/assets/flags/afghanistan.jpg",
    "https://country-fawn.vercel.app/assets/flags/suriname.jpg",
    "https://country-fawn.vercel.app/assets/flags/belarus.jpg",
    "https://country-fawn.vercel.app/assets/flags/iraq.jpg",
    "https://country-fawn.vercel.app/assets/flags/mauritania.jpg",
    "https://country-fawn.vercel.app/assets/flags/el-salvador.jpg",
    "https://country-fawn.vercel.app/assets/flags/tunisia.jpg",
    "https://country-fawn.vercel.app/assets/flags/jamaica.jpg",
    "https://country-fawn.vercel.app/assets/flags/myanmar.jpg",
    "https://country-fawn.vercel.app/assets/flags/canada.jpg",
    "https://country-fawn.vercel.app/assets/flags/maldives.jpg",
    "https://country-fawn.vercel.app/assets/flags/south-africa.jpg",
    "https://country-fawn.vercel.app/assets/flags/vatican-city.jpg",
    "https://country-fawn.vercel.app/assets/flags/brazil.jpg",
    "https://country-fawn.vercel.app/assets/flags/niger.jpg",
    "https://country-fawn.vercel.app/assets/flags/mexico.jpg",
    "https://country-fawn.vercel.app/assets/flags/north-korea.jpg",
    "https://country-fawn.vercel.app/assets/flags/liberia.jpg",
    "https://country-fawn.vercel.app/assets/flags/saint-kitts-and-nevis.jpg",
    "https://country-fawn.vercel.app/assets/flags/antigua-and-barbuda.jpg",
    "https://country-fawn.vercel.app/assets/flags/singapore.jpg",
    "https://country-fawn.vercel.app/assets/flags/marshall-islands.jpg",
    "https://country-fawn.vercel.app/assets/flags/andorra.jpg",
    "https://country-fawn.vercel.app/assets/flags/ethiopia.jpg",
    "https://country-fawn.vercel.app/assets/flags/dominican-republic.jpg",
    "https://country-fawn.vercel.app/assets/flags/luxembourg.jpg",

]
imgsrcs = [

    'https://country-fawn.vercel.app/assets/capital-cities/algiers',
    'https://country-fawn.vercel.app/assets/capital-cities/budapest.jpg',
    'https://country-fawn.vercel.app/assets/capital-cities/vaduz.jpg',
    'https://country-fawn.vercel.app/assets/capital-cities/aden.jpg',
    'https://country-fawn.vercel.app/assets/capital-cities/monaco.jpg',
    'https://country-fawn.vercel.app/assets/capital-cities/nicosia.jpg',
    'https://country-fawn.vercel.app/assets/capital-cities/lome.jpg',
    'https://country-fawn.vercel.app/assets/capital-cities/santiago.jpg',
    'https://country-fawn.vercel.app/assets/capital-cities/dhaka.jpg',
    'https://country-fawn.vercel.app/assets/capital-cities/gitega.jpg',
    'https://country-fawn.vercel.app/assets/capital-cities/abidjan.jpg',
    'https://country-fawn.vercel.app/assets/capital-cities/bridgetown.jpg',
    'https://country-fawn.vercel.app/assets/capital-cities/havana.jpg',
    'https://country-fawn.vercel.app/assets/capital-cities/dili.jpg',
    'https://country-fawn.vercel.app/assets/capital-cities/port-au-prince.jpg',
    'https://country-fawn.vercel.app/assets/capital-cities/amman.jpg',
    'https://country-fawn.vercel.app/assets/capital-cities/doha.jpg',
    'https://country-fawn.vercel.app/assets/capital-cities/apia.jpg',
    'https://country-fawn.vercel.app/assets/capital-cities/maseru.jpg',
    'https://country-fawn.vercel.app/assets/capital-cities/nassau.jpg',
    'https://country-fawn.vercel.app/assets/capital-cities/asuncion.jpg',
    'https://country-fawn.vercel.app/assets/capital-cities/prague.jpg',
    'https://country-fawn.vercel.app/assets/capital-cities/roseau.jpg',
    'https://country-fawn.vercel.app/assets/capital-cities/belgrade.jpg',
    'https://country-fawn.vercel.app/assets/capital-cities/tashkent.jpg',
    "https://country-fawn.vercel.app/assets/capital-cities/zagreb.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/lima.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/manila.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/mogadishu.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/san-marino.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/bangkok.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/bern.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/quito.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/conakry.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/bratislava.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/washington-dc.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/ouagadougou.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/dushanbe.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/tokyo.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/bandar-seri-begawan.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/managua.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/port-moresby.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/porto-novo.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/panama-city.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/vientiane.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/funafuti.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/tallinn.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/antananarivo.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/madrid.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/helsinki.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/georgetown.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/tripoli.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/bangui.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/vienna.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/kinshasa.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/khartoum.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/kigali.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/tarawa.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/port-of-spain.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/dakar.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/manama.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/libreville.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/muscat.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/bissau.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/tegucigalpa.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/sarajevo.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/skopje.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/djibouti.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/ljubljana.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/lilongwe.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/colombo.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/jerusalem.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/malabo.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/ngerulmud.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/windhoek.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/dublin.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/lisbon.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/kuala-lumpur.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/guatemala-city.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/beijing.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/brussels.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/sofia.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/phnom-penh.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/port-vila.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/gaborone.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/san-jose.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/lusaka.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/yerevan.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/valletta.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/ankara.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/beirut.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/new-delhi.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/tbilisi.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/podgorica.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/riga.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/athens.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/nairobi.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/baku.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/yaounde.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/tirana.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/cairo.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/port-louis.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/n'djamena.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/belmopan.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/sucre.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/stockholm.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/luanda.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/damascus.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/freetown.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/moroni.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/copenhagen.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/canberra.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/reykjavik.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/nur-sultan.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/suva.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/bogota.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/bamako.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/mbabane.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/seoul.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/juba.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/ashgabat.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/thimphu.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/warsaw.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/kathmandu.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/yaren.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/sao-tome.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/castries.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/moscow.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/abuja.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/paris.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/honiara.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/ulaanbaatar.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/buenos-aires.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/victoria.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/dodoma.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/oslo.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/london.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/chisinau.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/banjul.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/jerusalem.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/berlin.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/islamabad.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/st-georges.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/accra.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/praia.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/abu-dhabi.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/bishkek.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/nuku'alofa.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/kyiv.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/riyadh.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/maputo.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/jakarta.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/palikir.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/brazzaville.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/rome.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/caracas.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/hanoi.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/tehran.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/vilnius.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/kingstown.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/montevideo.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/bucharest.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/wellington.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/kampala.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/amsterdam.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/rabat.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/harare.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/asmara.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/kuwait-city.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/kabul.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/paramaribo.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/minsk.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/baghdad.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/nouakchott.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/san-salvador.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/tunis.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/kingston.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/naypyidaw.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/ottawa.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/male.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/pretoria.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/vatican-city.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/brasilia.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/niamey.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/mexico-city.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/pyongyang.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/monrovia.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/basseterre.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/st-johns.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/singapore.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/majuro.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/andorra-la-vella.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/addis-ababa.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/santo-domingo.jpg",
    "https://country-fawn.vercel.app/assets/capital-cities/luxembourg.jpg",
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
    const rndNum = Math.floor(getRandomArbitrary(0, imgsrcs.length));
    imgs[delIndex].src = imgsrcs[rndNum];

    imgs[delIndex].id = countryURLS[rndNum].slice(45, -4).replaceAll("-", " ").toUpperCase();
    countryNames[delIndex].innerText = imgs[delIndex].id

    imgs[delIndex].id = imgs[delIndex].src.slice(50, -4).replaceAll("-", " ").toUpperCase();
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



