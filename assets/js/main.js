//starting
window.addEventListener("load", () => {
    document.querySelector(".loader-container").classList.add("d-none")
    typing()
})
//typing
function typing() {
    let ele = document.querySelector(".title");
    let text = "Travel to Explore";
    let speed = 100;
    i = 0;
    ele.style.borderRight = "1px solid white";
    let write = setInterval(() => {
        ele.innerHTML += text[i];
        i++
        if (i > text.length - 1) {
            ele.style.borderRight = "none";
            clearInterval(write);
        }
    },speed)
}
//weekEndPlaces
async function main() {
     //oppening firs screen and audio
    fetch('../assets/data/data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
       //main
       setTimeout(() => {
        let btn = document.getElementById("mb")
        let sbtn = document.querySelector(".soundbt")
        btn.click()
    },1)
        //filter
        //input data
        function inputData() {
            let filterele = document.querySelectorAll(".filter ul button");
            let screens = document.querySelectorAll(".screens .screen");
            filterele.forEach((el,index) => {
                el.addEventListener("click",(e) => {
                    screens.forEach((screen) => screen.classList.add("d-none"))
                    filterele.forEach((ell) => ell.classList.remove("active"));
                    e.target.classList.add("active");
                    screens[index].classList.replace("d-none","d-flex");
                    screen = screens[index].firstElementChild
            //mainLoop
            for (let i = 0; i < data[index].length; i++) {
                if (screen.childElementCount === data[index].length) {
                    break;
                }
            //main div
            let place = document.createElement("div");
            place.classList.add("place","col-12","col-md-6","col-lg-4","col-xl-4","col-xxl-3","px-2","pb-2");
            let placeCont = document.createElement("div");
            placeCont.classList.add("place-content","col-12","pb-4","pb-lg-2");
            placeCont.setAttribute("data-aos","fade-down")
            //img
            let placeImg = document.createElement("div");
            placeImg.classList.add("place-img","col-12");
            placeImg.style.backgroundImage = `url(${data[index][i].countryImg})`;
            //name
            let placeName = document.createElement("div");
            placeName.classList.add("place-name","col-12","fs-2","px-3","pb-2");
            placeName.innerHTML = data[index][i].countryName;
            //discreption
            let placeDesc = document.createElement("div");
            placeDesc.classList.add("place-desc","px-2","fs-6");
            placeDesc.innerHTML = data[index][i].countryDiscripiton;
            //details
            let placeDetails = document.createElement("div");
            placeDetails.classList.add("place-details","px-3");
            let lineOne = document.createElement("div");
            lineOne.classList.add("line-one" , "d-flex","col-12","justify-content-between","pt-2");
            let icons = document.createElement("div");
            icons.classList.add("icons");
            icons.innerHTML = `
            <img src="assets/imgs/icons/location.png" alt="">
            <img src="assets/imgs/icons/plane.png" alt="">
            <img src="assets/imgs/icons/food.png" alt="">
            `
            //botttom
            let price = document.createElement("div");
            price.classList.add("price","fw-bold","fs-4");
            price.innerHTML = `${data[index][i].countryPrice} EGP`
            placeDetails.appendChild(lineOne);
            lineOne.appendChild(icons)
            lineOne.appendChild(price);
            let lineTwo = document.createElement("div");
            lineTwo.classList.add("line-two" , "d-flex","justify-content-between","pt-2");
            let space = document.createElement("div");
            space.innerHTML = data[index][i].countrySpace
            let offer = document.createElement("div") ;
            offer.innerHTML = data[index][i].long
            lineTwo.appendChild(space);
            lineTwo.appendChild(offer);
            placeDetails.appendChild(lineTwo);
            //append in screen
            placeCont.appendChild(placeImg);
            placeCont.appendChild(placeName);
            placeCont.appendChild(placeDesc);
            placeCont.appendChild(placeDetails);
            place.appendChild(placeCont);
            screen.appendChild(place);
        }
            })
            })
        }
        inputData()
    })

}
main()