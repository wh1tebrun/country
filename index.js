
counter = 0

function getID(oObject) {
    var id = oObject.id;

    return id
}

function randomizer(p1, p2) {
    if (Math.floor(getRandomArbitrary(0, 2)) % 2 == 0) {
        return p1
    }

    else {
        return p2
    }
}

const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();






function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

imgs = Array.from(document.getElementsByTagName("img"))
imgsrcs = Array.from(document.getElementsByClassName("hidden-imgs"))
var myCountryName = document.getElementById("country-name");

// Function to replace the image source of the image at delIndex with a random image from imgsrcs
// and then remove the used image source from imgsrcs
function replaceAndRemoveImage(delIndex) {
    const rndNum = Math.floor(getRandomArbitrary(0, imgsrcs.length));
    imgs[delIndex].src = imgsrcs[rndNum].src;
    imgs[delIndex].id = imgsrcs[rndNum].id;
    imgsrcs.splice(rndNum, 1);

    return imgs[delIndex].id


}

// When the window loads, replace the first two images
window.onload = () => {
    id0 = replaceAndRemoveImage(0);
    id1 = replaceAndRemoveImage(1);
    chosenId = randomizer(id0, id1)
    myCountryName.innerText = chosenId

};


const flagPressed = e => {
    const id = e.target.id;  // Get ID of Clicked Element
    return id
}
// Event listener function for removing an image
function removeImageListener(event) {

    const img = event.target;
    const imgId = img.getAttribute("id");
    const i = img._index;
    const delIndex = 1 - i;


    console.log(imgId);
    if (myCountryName.innerText == imgId) {
        //pass

    }

    else {
        window.close()
        window.open("result.html")



    }


    if (counter >= parseInt(output.innerHTML, 10) - 2) {
        img.removeEventListener("click", removeImageListener);
        imgs[delIndex].style.visibility = "hidden";
        jsConfetti.addConfetti({
            emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
        }).then(() => jsConfetti.addConfetti());


    }

    else {
        id_i = replaceAndRemoveImage(i)
        id_delIndex = replaceAndRemoveImage(delIndex);
        chosenId = randomizer(id_i, id_delIndex)
        myCountryName.innerText = chosenId;
        console.log(myCountryName.innerText)

        counter++;
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



