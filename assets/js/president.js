
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

    'https://country-fawn.vercel.app/assets/presidents/abdelmadjid-tebboune.jpg',
    'https://country-fawn.vercel.app/assets/presidents/viktor-orban.jpg',
    'https://country-fawn.vercel.app/assets/presidents/hans-adam-II.jpg',
    'https://country-fawn.vercel.app/assets/presidents/rashad-al-alimi.jpg',
    'https://country-fawn.vercel.app/assets/presidents/albert-II.jpg',
    'https://country-fawn.vercel.app/assets/presidents/nikos-christodoulides.jpg',
    'https://country-fawn.vercel.app/assets/presidents/faure-gnassingbe.jpg',
    'https://country-fawn.vercel.app/assets/presidents/gabriel-boric.jpg',
    'https://country-fawn.vercel.app/assets/presidents/sheikh-hasina.jpg',
    'https://country-fawn.vercel.app/assets/presidents/evariste-ndayishimiye.jpg',
    'https://country-fawn.vercel.app/assets/presidents/alassane-ouattara.jpg',
    'https://country-fawn.vercel.app/assets/presidents/mia-mottley.jpg',
    'https://country-fawn.vercel.app/assets/presidents/miguel-diaz-canel.jpg',
    'https://country-fawn.vercel.app/assets/presidents/xanana-gusmao.jpg',
    'https://country-fawn.vercel.app/assets/presidents/ariel-henry.jpg',
    'https://country-fawn.vercel.app/assets/presidents/abdullah-II.jpg',
    'https://country-fawn.vercel.app/assets/presidents/tamim-bin-hamad-al-thani.jpg',
    'https://country-fawn.vercel.app/assets/presidents/fiame-naomi-mataafa.jpg',
    'https://country-fawn.vercel.app/assets/presidents/sam-matekane.jpg',
    'https://country-fawn.vercel.app/assets/presidents/philip-davis.jpg',
    'https://country-fawn.vercel.app/assets/presidents/santiago-pena.jpg',
    'https://country-fawn.vercel.app/assets/presidents/petr-fiala.jpg',
    'https://country-fawn.vercel.app/assets/presidents/roosevelt-skerrit.jpg',
    'https://country-fawn.vercel.app/assets/presidents/ivica-dacic.jpg',
    'https://country-fawn.vercel.app/assets/presidents/shavkat-mirziyoyev.jpg',
    'https://country-fawn.vercel.app/assets/presidents/andrej-plenkovic.jpg',
    'https://country-fawn.vercel.app/assets/presidents/dina-boluarte.jpg',
    'https://country-fawn.vercel.app/assets/presidents/bongbong-marcos.jpg',
    'https://country-fawn.vercel.app/assets/presidents/hamza-abdi-barre.jpg',
    'https://country-fawn.vercel.app/assets/presidents/filippo-tamagnini.jpg',
    'https://country-fawn.vercel.app/assets/presidents/srettha-thavisin.jpg',
    'https://country-fawn.vercel.app/assets/presidents/viola-amherd.jpg',
    'https://country-fawn.vercel.app/assets/presidents/daniel-noboa.jpg',
    'https://country-fawn.vercel.app/assets/presidents/mamady-doumbouya.jpg',
    'https://country-fawn.vercel.app/assets/presidents/robert-fico.jpg',
    'https://country-fawn.vercel.app/assets/presidents/joe-biden.jpg',
    'https://country-fawn.vercel.app/assets/presidents/ibrahim-traore.jpg',
    'https://country-fawn.vercel.app/assets/presidents/emomali-rahmon.jpg',
    'https://country-fawn.vercel.app/assets/presidents/fumio-kishida.jpg',
    'https://country-fawn.vercel.app/assets/presidents/hassanal-bolkiah.jpg',
    'https://country-fawn.vercel.app/assets/presidents/daniel-ortega.jpg',
    'https://country-fawn.vercel.app/assets/presidents/james-marape.jpg',
    'https://country-fawn.vercel.app/assets/presidents/patrice-talon.jpg',
    'https://country-fawn.vercel.app/assets/presidents/laurentino-cortizo.jpg',
    'https://country-fawn.vercel.app/assets/presidents/thongloun-sisoulith.jpg',
    'https://country-fawn.vercel.app/assets/presidents/feleti-teo.jpg',
    'https://country-fawn.vercel.app/assets/presidents/kaja-kallas.jpg',
    'https://country-fawn.vercel.app/assets/presidents/andry-rajoelina.jpg',
    'https://country-fawn.vercel.app/assets/presidents/pedro-sanchez.jpg',
    'https://country-fawn.vercel.app/assets/presidents/petteri-orpo.jpg',
    'https://country-fawn.vercel.app/assets/presidents/irfaan-ali.jpg',
    'https://country-fawn.vercel.app/assets/presidents/abdul-hamid-dbeibeh.jpg',
    'https://country-fawn.vercel.app/assets/presidents/faustin-archange-touadera.jpg',
    'https://country-fawn.vercel.app/assets/presidents/karl-nehammer.jpg',
    'https://country-fawn.vercel.app/assets/presidents/felix-tshisekedi.jpg',
    'https://country-fawn.vercel.app/assets/presidents/abdel-fattah-al-burhan.jpg',
    'https://country-fawn.vercel.app/assets/presidents/paul-kagame.jpg',
    'https://country-fawn.vercel.app/assets/presidents/taneti-maamau.jpg',
    'https://country-fawn.vercel.app/assets/presidents/keith-rowley.jpg',
    'https://country-fawn.vercel.app/assets/presidents/macky-sall.jpg',
    'https://country-fawn.vercel.app/assets/presidents/hamad-bin-isa-ai-khalifa.jpg',
    'https://country-fawn.vercel.app/assets/presidents/brice-oligui-nguema.jpg',
    'https://country-fawn.vercel.app/assets/presidents/haitham-bin-tariq.jpg',
    'https://country-fawn.vercel.app/assets/presidents/umaro-sissoco-embalo.jpg',
    'https://country-fawn.vercel.app/assets/presidents/xiomara-castro.jpg',
    'https://country-fawn.vercel.app/assets/presidents/christian-schmidt.jpg',
    'https://country-fawn.vercel.app/assets/presidents/talat-xhaferi.jpg',
    'https://country-fawn.vercel.app/assets/presidents/ismail-omar-guelleh.jpg',
    'https://country-fawn.vercel.app/assets/presidents/robert-golob.jpg',
    'https://country-fawn.vercel.app/assets/presidents/lazarus-chakwera.jpg',
    'https://country-fawn.vercel.app/assets/presidents/ranil-wickremesinghe.jpg',
    'https://country-fawn.vercel.app/assets/presidents/mahmoud-abbas.jpg',
    'https://country-fawn.vercel.app/assets/presidents/teodoro-obiang-nguema-mbasogo.jpg',
    'https://country-fawn.vercel.app/assets/presidents/surangel-whipps-junior.jpg',
    'https://country-fawn.vercel.app/assets/presidents/nangolo-mbumba.jpg',
    'https://country-fawn.vercel.app/assets/presidents/leo-varadkar.jpg',
    'https://country-fawn.vercel.app/assets/presidents/antonio-costa.jpg',
    'https://country-fawn.vercel.app/assets/presidents/anwar-ibrahim.jpg',
    'https://country-fawn.vercel.app/assets/presidents/bernardo-arevalo.jpg',
    'https://country-fawn.vercel.app/assets/presidents/xi-jinping.jpg',
    'https://country-fawn.vercel.app/assets/presidents/alexander-de-croo.jpg',
    'https://country-fawn.vercel.app/assets/presidents/nikolai-denkov.jpg',
    'https://country-fawn.vercel.app/assets/presidents/hun-manet.jpg',
    'https://country-fawn.vercel.app/assets/presidents/charlot-salwai.jpg',
    'https://country-fawn.vercel.app/assets/presidents/mokgweetsi-masisi.jpg',
    'https://country-fawn.vercel.app/assets/presidents/rodrigo-chaves-robles.jpg',
    'https://country-fawn.vercel.app/assets/presidents/hakainde-hichilema.jpg',
    'https://country-fawn.vercel.app/assets/presidents/nikol-pashinyan.jpg',
    'https://country-fawn.vercel.app/assets/presidents/robert-abela.jpg',
    'https://country-fawn.vercel.app/assets/presidents/recep-tayyip-erdogan.jpg',
    'https://country-fawn.vercel.app/assets/presidents/najib-mikati.jpg',
    'https://country-fawn.vercel.app/assets/presidents/narendra-modi.jpg',
    'https://country-fawn.vercel.app/assets/presidents/irakli-kobakhidze.jpg',
    'https://country-fawn.vercel.app/assets/presidents/milojko-spajic.jpg',
    'https://country-fawn.vercel.app/assets/presidents/evika-silina.jpg',
    'https://country-fawn.vercel.app/assets/presidents/kyriakos-mitsotakis.jpg',
    'https://country-fawn.vercel.app/assets/presidents/william-ruto.jpg',
    'https://country-fawn.vercel.app/assets/presidents/ilham-aliyev.jpg',
    'https://country-fawn.vercel.app/assets/presidents/paul-biya.jpg',
    'https://country-fawn.vercel.app/assets/presidents/bajram-begaj.jpg',
    'https://country-fawn.vercel.app/assets/presidents/abdel-fattah-el-sisi.jpg',
    'https://country-fawn.vercel.app/assets/presidents/pravind-jugnauth.jpg',
    'https://country-fawn.vercel.app/assets/presidents/mahamat-deby.jpg',
    'https://country-fawn.vercel.app/assets/presidents/johnny-briceno.jpg',
    'https://country-fawn.vercel.app/assets/presidents/luis-arce.jpg',
    'https://country-fawn.vercel.app/assets/presidents/ulf-krisersson.jpg',
    'https://country-fawn.vercel.app/assets/presidents/joao-lourenco.jpg',
    'https://country-fawn.vercel.app/assets/presidents/bashar-al-assad.jpg',
    'https://country-fawn.vercel.app/assets/presidents/julius-maada-bio.jpg',
    'https://country-fawn.vercel.app/assets/presidents/azali-assoumani.jpg',
    'https://country-fawn.vercel.app/assets/presidents/mette-frederiksen.jpg',
    'https://country-fawn.vercel.app/assets/presidents/anthony-albanese.jpg',
    'https://country-fawn.vercel.app/assets/presidents/katrin-jakobsdottir.jpg',
    'https://country-fawn.vercel.app/assets/presidents/kassym-jomart-tokayev.jpg',
    'https://country-fawn.vercel.app/assets/presidents/sitiveni-rabuka.jpg',
    'https://country-fawn.vercel.app/assets/presidents/gustavo-petro.jpg',
    'https://country-fawn.vercel.app/assets/presidents/assimi-goita.jpg',
    'https://country-fawn.vercel.app/assets/presidents/mswati-III.jpg',
    'https://country-fawn.vercel.app/assets/presidents/yoon-suk-yeol.jpg',
    'https://country-fawn.vercel.app/assets/presidents/salva-kiir-mayardit.jpg',
    'https://country-fawn.vercel.app/assets/presidents/serdar-berdimuhamedow.jpg',
    'https://country-fawn.vercel.app/assets/presidents/tshering-tobgay.jpg',
    'https://country-fawn.vercel.app/assets/presidents/donald-tusk.jpg',
    'https://country-fawn.vercel.app/assets/presidents/pushpa-kamal-dahal.jpg',
    'https://country-fawn.vercel.app/assets/presidents/david-adeang.jpg',
    'https://country-fawn.vercel.app/assets/presidents/patrice-trovoada.jpg',
    'https://country-fawn.vercel.app/assets/presidents/philip-j-pierre.jpg',
    'https://country-fawn.vercel.app/assets/presidents/vladimir-putin.jpg',
    'https://country-fawn.vercel.app/assets/presidents/bola-tinubu.jpg',
    'https://country-fawn.vercel.app/assets/presidents/emmanuel-macron.jpg',
    'https://country-fawn.vercel.app/assets/presidents/manasseh-sogavare.jpg',
    'https://country-fawn.vercel.app/assets/presidents/luvsannamsrain-oyun-erdene.jpg',
    'https://country-fawn.vercel.app/assets/presidents/javier-milei.jpg',
    'https://country-fawn.vercel.app/assets/presidents/wavel-ramkalawan.jpg',
    'https://country-fawn.vercel.app/assets/presidents/samia-suluhu-hassan.jpg',
    'https://country-fawn.vercel.app/assets/presidents/jonas-gahr-store.jpg',
    'https://country-fawn.vercel.app/assets/presidents/rishi-sunak.jpg',
    'https://country-fawn.vercel.app/assets/presidents/dorin-recean.jpg',
    'https://country-fawn.vercel.app/assets/presidents/adama-barrow.jpg',
    'https://country-fawn.vercel.app/assets/presidents/benjamin-netanyahu.jpg',
    'https://country-fawn.vercel.app/assets/presidents/olaf-scholz.jpg',
    'https://country-fawn.vercel.app/assets/presidents/shehbaz-sharif.jpg',
    'https://country-fawn.vercel.app/assets/presidents/dickon-mitchell.jpg',
    'https://country-fawn.vercel.app/assets/presidents/nana-akufo-addo.jpg',
    'https://country-fawn.vercel.app/assets/presidents/ulisses-correia-e-silva.jpg',
    'https://country-fawn.vercel.app/assets/presidents/mohamed-bin-zayed-al-nahyan.jpg',
    'https://country-fawn.vercel.app/assets/presidents/sadyr-japarov.jpg',
    'https://country-fawn.vercel.app/assets/presidents/siaosi-sovaleni.jpg',
    'https://country-fawn.vercel.app/assets/presidents/volodymyr-zelenskyy.jpg',
    'https://country-fawn.vercel.app/assets/presidents/salman.jpg',
    'https://country-fawn.vercel.app/assets/presidents/filipe-nyusi.jpg',
    'https://country-fawn.vercel.app/assets/presidents/joko-widodo.jpg',
    'https://country-fawn.vercel.app/assets/presidents/wesley-simina.jpg',
    'https://country-fawn.vercel.app/assets/presidents/denis-sassou-nguesso.jpg',
    'https://country-fawn.vercel.app/assets/presidents/giorgia-meloni.jpg',
    'https://country-fawn.vercel.app/assets/presidents/nicolas-maduro.jpg',
    'https://country-fawn.vercel.app/assets/presidents/nguyen-phu-trong.jpg',
    'https://country-fawn.vercel.app/assets/presidents/ali-khamenei.jpg',
    'https://country-fawn.vercel.app/assets/presidents/ingrida-simonyte.jpg',
    'https://country-fawn.vercel.app/assets/presidents/ralph-gonsalves.jpg',
    'https://country-fawn.vercel.app/assets/presidents/luis-lacalle-pou.jpg',
    'https://country-fawn.vercel.app/assets/presidents/marcel-ciolacu.jpg',
    'https://country-fawn.vercel.app/assets/presidents/christopher-luxon.jpg',
    'https://country-fawn.vercel.app/assets/presidents/yoweri-museveni.jpg',
    'https://country-fawn.vercel.app/assets/presidents/mark-rutte.jpg',
    'https://country-fawn.vercel.app/assets/presidents/mohammed-VI.jpg',
    'https://country-fawn.vercel.app/assets/presidents/emmerson-mnangagwa.jpg',
    'https://country-fawn.vercel.app/assets/presidents/isaias-afwerki.jpg',
    'https://country-fawn.vercel.app/assets/presidents/mishal-al-ahmad-al-jaber-al-sabah.jpg',
    'https://country-fawn.vercel.app/assets/presidents/hibatullah-akhundzada.jpg',
    'https://country-fawn.vercel.app/assets/presidents/chan-santokhi.jpg',
    'https://country-fawn.vercel.app/assets/presidents/alexander-lukashenko.jpg',
    'https://country-fawn.vercel.app/assets/presidents/mohammed-shia-al-sudani.jpg',
    'https://country-fawn.vercel.app/assets/presidents/mohamed-ould-ghazouani.jpg',
    'https://country-fawn.vercel.app/assets/presidents/claudia-rodriguez-de-guevara.jpg',
    'https://country-fawn.vercel.app/assets/presidents/kais-saied.jpg',
    'https://country-fawn.vercel.app/assets/presidents/andrew-holness.jpg',
    'https://country-fawn.vercel.app/assets/presidents/myint-swe.jpg',
    'https://country-fawn.vercel.app/assets/presidents/justin-trudeau.jpg',
    'https://country-fawn.vercel.app/assets/presidents/mohamed-muizzu.jpg',
    'https://country-fawn.vercel.app/assets/presidents/cyril-ramaphosa.jpg',
    'https://country-fawn.vercel.app/assets/presidents/pope-francis.jpg',
    'https://country-fawn.vercel.app/assets/presidents/luiz-inacio-lula-da-silva.jpg',
    'https://country-fawn.vercel.app/assets/presidents/abdourahamane-tchiani.jpg',
    'https://country-fawn.vercel.app/assets/presidents/andres-manuel-lopez-obrador.jpg',
    'https://country-fawn.vercel.app/assets/presidents/kim-jong-un.jpg',
    'https://country-fawn.vercel.app/assets/presidents/joseph-boakai.jpg',
    'https://country-fawn.vercel.app/assets/presidents/terrance-drew.jpg',
    'https://country-fawn.vercel.app/assets/presidents/gaston-browne.jpg',
    'https://country-fawn.vercel.app/assets/presidents/lee-hsien-loong.jpg',
    'https://country-fawn.vercel.app/assets/presidents/hilda-heine.jpg',
    'https://country-fawn.vercel.app/assets/presidents/xavier-espot-zamora.jpg',
    'https://country-fawn.vercel.app/assets/presidents/abiy-ahmed.jpg',
    'https://country-fawn.vercel.app/assets/presidents/luis-abinader.jpg',
    'https://country-fawn.vercel.app/assets/presidents/luc-frieden.jpg',

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

    imgs[delIndex].id = imgs[delIndex].src.slice(45, -4).replaceAll("-", " ").toUpperCase();
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



