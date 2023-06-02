// -https://gauravgitacc.github.io/postAppData/auctionData.json

// fetch returns a promise object
// that promise will indicate the status of network call
let container = document.getElementsByClassName("cards-container")[0]

function addDataOntoUI(resultList) {

    console.log(resultList);
    for(let i = 0 ; i < resultList.length ; i++){
        let card = resultList[i];
        let innerHtml = `<div class="top">
        <div class="top-left">
            <b class="status ${card.status.toLowerCase()} data-tilt data-tilt-scale="1.1" ">${card.status}</b>
            <span class="case-number">${card.caseNumber}</span>
        </div>
        <div class="top-right">
            <span class="date">${card.date}</span>
        </div>
    </div>
    <div class="bottom">
        <b class="from">${card.fromLocation}</b>
        <span class="to">${card.toLocation}</span>
    </div>
    <span class="amount">${card.fare}</span>`


     let divCard  = document.createElement("div");
      divCard.className = "card"
      divCard.innerHTML = innerHtml
      divCard.addEventListener("click",()=>{

        document.cookie = `card=${JSON.stringify(card)};path= /second.html`
        window.location.href = "http://127.0.0.1:5500/second.html"
      })


      container.append(divCard);

      VanillaTilt.init(document.querySelector(".card"), {
        max: 25,
        speed: 400
    });
    
    //It also supports NodeList
    VanillaTilt.init(document.querySelectorAll(".card"));

    }

   



}

async function fetchData() {
    try {

        let response = await fetch("https:gauravgitacc.github.io/postAppData/auctionData.json");
        let data = await response.json();

        addDataOntoUI(data);
    }
    catch (error) {
        alert("Data fetch nahi horaha hai", error)
    }

}
fetchData();



