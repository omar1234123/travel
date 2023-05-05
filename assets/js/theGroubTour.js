//The groupTour
async function groupTour() {
    fetch('../assets/data/data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //main
        let screen = document.querySelector("#screen-two .places-list");
        for (let i = 0; i < data[2].length; i++) {
            //main div
            let place = document.createElement("div");
            place.setAttribute("data-aos","fade-up")
            place.classList.add("place","col-12","col-md-6","col-lg-4","col-xl-4","col-xxl-3","px-2","pb-2");
            let placeCont = document.createElement("div");
            placeCont.classList.add("place-content","col-12","pb-2");
            //img
            let placeImg = document.createElement("div");
            placeImg.classList.add("place-img","col-12");
            placeImg.style.backgroundImage = `url(${data[12][i].countryImg})`;
            //name
            let placeName = document.createElement("div");
            placeName.classList.add("place-name","col-12","fs-2","px-3","pb-2");
            placeName.innerHTML = data[2][i].countryName;
            //discreption
            let placeDesc = document.createElement("div");
            placeDesc.classList.add("place-desc","px-3");
            placeDesc.innerHTML = data[2][i].countryDiscripiton;
            //details
            let placeDetails = document.createElement("div");
            placeDetails.classList.add("place-details","px-3");
            let lineOne = document.createElement("div");
            lineOne.classList.add("line-one" , "d-flex","justify-content-between","pt-2");
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
            price.innerHTML = `${data[2][i].countryPrice} EGP`
            placeDetails.appendChild(lineOne);
            lineOne.appendChild(icons)
            lineOne.appendChild(price);
            let lineTwo = document.createElement("div");
            lineTwo.classList.add("line-two" , "d-flex","justify-content-between","pt-2");
            let space = document.createElement("div");
            space.innerHTML = data[2][i].countrySpace
            let offer = document.createElement("div") ;
            offer.innerHTML = data[2][i].long
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
    });
    }
    groupTour()