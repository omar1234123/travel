//search-box
function search() {
    let searchBtn = document.querySelector(".search-bo");
    searchBtn.onclick = () => {
        open()
    }
    function open(){
        let searchBg = document.createElement("div");
        searchBg.style.cssText = `
            position:fixed;
            width:100vw;
            height:100vh;
            background:#1111149c;
            z-index:10000;
            display:flex;
            align-items-center;
            justify-content-center;
        `
        let closeSearch = document.createElement("div");
        closeSearch.style.cssText = `
            position:absolute;
            top:10px;
            right:30px;

        `
        closeSearch.innerHTML = '<i class="fa-solid fa-regular fa-circle-xmark close-bb"></i>'
        closeSearch.classList.add("fs-1","close-search")
        let searchBox = document.createElement("div");
        searchBox.classList.add("search-box","col-12","d-flex","flex-column","align-items-center","justify-content-center",);
        let searchInputDiv = document.createElement("div");
        searchInputDiv.classList.add("search-inn","col-10","d-flex","align-items-center","justify-content-between")
        searchInputDiv.style.cssText = `
            height:7vh;
            border-radius:15px;
        `
        let searchInput = document.createElement("input");
        searchInput.focus()
        searchInput.classList.add ("searchInput","col-11","fs-5")
        searchInput.type = "search"
        searchInput.style.cssText = `
            height : 100%;
            border:none;
            border-radius:15px;
            background:transparent;
            padding:0 10px;
        `
        searchInput.placeholder = "search"
        let searchIco = document.createElement("button");
        searchIco.classList.add("col-1","bg-transparent","border-0","h-100")
        ico = "<i class='fa-solid fa-magnifying-glass icon fs-4'>"
        searchIco.innerHTML = ico
        let resBox = document.createElement("ul");
        resBox.classList.add("col-10","mt-2");
        resBox.style.cssText =`
            list-style : none;
            padding:3%;
            height:fit-content;
            background:white;
        `
        searchInputDiv.appendChild(searchInput);
        searchInputDiv.appendChild(searchIco)
        searchBox.appendChild(searchInputDiv)
        searchInput.addEventListener("input",() => {
            if (resBox.childElementCount === 0) {
                console.log("0")
            }else{
                searchBox.appendChild(resBox)
            }
        })
        searchBg.appendChild(closeSearch)
        searchBg.appendChild(searchBox);
        document.body.prepend(searchBg);
        document.addEventListener('keydown', function(e) {
            // Check if the "Escape" key was pressed
            if (e.key === 'Escape') {
              close()
            }
          });
          //close search
        function close() {
            document.body.removeChild(searchBg);
        }
        document.querySelector(".close-search").onclick = ()=>{
            close()
        }        
    }
    
}
search()