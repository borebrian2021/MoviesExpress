
const BASE_URL = "https://expressmovies254.herokuapp.com/movies"
document.addEventListener('DOMContentLoaded', () => {
  // let btn = document.getElementById('btn');
  // btn.addEventListener('click', () => {
  //     // handle the click event
  //     console.log('clicked');
  // });

  //PLAY IFRAME
  hideAllElements()
  fetchMoviesDetails()
  const playB = document.getElementById('youtube').addEventListener('click', function () {

  })

});
//OPERN MOVIE DETAILS
function openMe(data) {
  const poster = document.getElementById("mPoster");
  const director = document.getElementById("director");
  const actor = document.getElementById("actor");
  const title = document.getElementById("title");
  const genre = document.getElementById("genre");
  const description = document.getElementById("description");
  const date = document.getElementById("date");
  const lenght = document.getElementById("lenght");
  const producers = document.getElementById("producers");
  const ratingParent = document.getElementById("ratingParent");
  const wholeCard = document.getElementById("movieDetails");
  const youtube = document.getElementById("youtube");


  //SET DATA
  poster.style.backgroundImage = `url('${data.poster}')`
  director.innerHTML = data.director
  actor.src = data.producerPoster
  youtube.setAttribute("href", data.youtube)
  title.innerHTML = data.title
  genre.innerHTML = data.genre
  description.innerHTML = data.description
  date.innerHTML = data.releaseDate
  lenght.innerHTML = data.lenght
  producers.innerHTML = data.producers
  document.getElementById('video').src = data.youtube
  //LOOP ON RATES
  renderRates(data.rates)

  //UNHIDE MMOVIE DETAILS
  const movieDetails = document.getElementById("movieDetails");
  $('#pupularHolder').fadeOut();
  $('#movieSection').fadeOut();
  $('#movieDetails').fadeIn();


}

//RATES LOOPING FUNCTION
function renderRates(rates) {

  const ratesHolder = document.getElementById('ratingParent');
  removeAllChildNodes(ratesHolder)
  for (let i = 0; i < 5; i++) {
    if (i < rates) {
      ratesHolder.remo
      var rateImage = document.createElement('img');
      rateImage.classList.add('star')
      rateImage.src = './assets/images/rate.png'
      ratesHolder.appendChild(rateImage)

    }
    else {
      var rateImage = document.createElement('img');
      rateImage.classList.add('star')
      rateImage.src = './assets/images/unrate.png'
      ratesHolder.appendChild(rateImage)
    }


  }
}

//REMOVE RATES
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
//FETCH MOVIE LIST FROM AN API
function fetchMoviesDetails() {
  fetch(BASE_URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      // console.log(data)
      renderCarousel(data)
      return renderCards(data);
    });
}


//RENDER MOVIE CARDS
function renderCards(response) {
  console.log(response)
  response.map((card, index, records) => {
    var cardDiv = document.createElement('div');
    cardDiv.innerHTML = ` <div class="card" id="card${index}">
      <img class="full" src="${card.poster}"/>
      <div class="description" id="description${index}">
        <h5>${card.title}</h5>
        <small>${card.description.split(' ').slice(0, 15).join(' ') + '...'}</small><br/>
    
      </div>
    </div>`
    document.getElementById('cardsHolder_').appendChild(cardDiv);
    var detailsButton = document.createElement('button');
    detailsButton.classList.add("btn");
    detailsButton.classList.add("btn-sm");
    detailsButton.classList.add("btn-warning");
    detailsButton.classList.add("customB");
    detailsButton.innerText = "More"
    detailsButton.addEventListener('click', function (e) {
      openMe(card)
      // alert("working")
    });

    var addToFev_ = document.createElement('button');
    addToFev_.classList.add("btn");
    addToFev_.classList.add("btn-sm");
    addToFev_.classList.add("btn-warning");
    addToFev_.classList.add("customB");
    addToFev_.classList.add("ml");
    addToFev_.innerText = "Add"
    addToFev_.addEventListener('click', function (e) {
      renderFev(index)
      // alert("working")
    });
    document.getElementById(`description${index}`).appendChild(detailsButton);
    document.getElementById(`description${index}`).appendChild(addToFev_);



  })
}

//RENDER FEVOURITE
//OPERN MOVIE DETAILS
function renderFev(index) {
 // Element stored in a variable for easy access 
 var parentElement = document.getElementById(`fevourite_`); 
 var child = document.getElementById(`card${index}`); 
 var DOMContent = child.innerHTML; 

 var card = document.createElement('div');
 card.classList.add("card")
 card.innerHTML=DOMContent
 parentElement.appendChild(card)
 console.log(card)

 // Save the original content of the div 

  // let target=$(`#card${index}`);
  // console.log(old)
  // jQuery(`#card${index}`).clone().appendTo('#fevourite')
};
//PERFORM DATA SEARCH
function searchRecords(query) {
  fetch(BASE_URL)
    .then(function (response) {
      return response.json();
    }).then(function (response_) {
      let countResults = 0;

      // console.log(data)

      // console.log(response_)
      response_.map((card, index, records) => {

        console.log(card);
        if (card.title.toLowerCase().includes(query.toLowerCase())) {
          countResults++
          if (index == 0) {
            let parent = document.getElementById(`cardsHolder_`)
            removeAllChildNodes(parent);
          }
          var cardDiv = document.createElement('div');
          cardDiv.innerHTML = ` <div class="card">
      <img class="full" src="${card.poster}"/>
      <div class="description" id="description${index}">
        <h5>${card.title}</h5>
        <small>${card.description.split(' ').slice(0, 15).join(' ') + '...'}</small><br/>
    
      </div>
    </div>`
          document.getElementById('cardsHolder_').appendChild(cardDiv);
          var detailsButton = document.createElement('button');
          detailsButton.classList.add("btn");
          detailsButton.classList.add("btn-sm");
          detailsButton.classList.add("btn-warning");
          detailsButton.classList.add("customB");
          detailsButton.innerText = "More"
          detailsButton.addEventListener('click', function (e) {
            openMe(card)
            // alert("working")

          });
          let child = document.getElementById(`description${index}`)

          child.appendChild(detailsButton);
          $('.response').text(countResults + " movies found");

        }
        else {
          if (index === 0) {

            let parent = document.getElementById(`cardsHolder_`)
            removeAllChildNodes(parent);
        $('.response').text("0 movies found");

          }
        }

      })
    })
};

//RENDER CAROUSEL GAMES
function renderCarousel(response) {
  console.log(response)
  response.map((card, index) => {
    var cardDiv = document.createElement('div');
    if (index === 1) {
      cardDiv.classList.add("item");
      cardDiv.classList.add("active");
      cardDiv.innerHTML =
        ` 
    <img src="${card.carousel}" alt="Los Angeles" style="width:100%;">
    <div class="carousel-caption" id="carousel_caption${index}">
      <h3>${card.title}</h3>
      <p>${card.description}</p>
    </div>
    `
      document.getElementById('carousel').appendChild(cardDiv);
      var button = document.createElement('button');
      button.classList.add('btn')
      button.classList.add('btn-sm')
      button.classList.add('btn-warning')
      button.classList.add('customB_')
      button.innerHTML = "More"
      button.addEventListener('click', function () {
        openMe(card)
      })
      document.getElementById(`carousel_caption${index}`).appendChild(button);
    }
    else {
      cardDiv.classList.add("item");
      cardDiv.innerHTML =
        `  <img src="${card.carousel}" alt="Los Angeles" style="width:100%;">
      <div class="carousel-caption" id="carousel_caption${index}">
        <h3>${card.title}</h3>
        <p>${card.description}</p>

      </div>
   
      `
      document.getElementById('carousel').appendChild(cardDiv);

      var button = document.createElement('button');
      button.classList.add('btn')
      button.classList.add('btn-sm')
      button.classList.add('btn-warning')
      button.classList.add('customB_')
      button.innerHTML = "More"
      button.addEventListener('click', function () {
        openMe(card)
      })
      document.getElementById(`carousel_caption${index}`).appendChild(button);
    }
  })

}

function hideAllElements() {
  // document.getElementById('watchList').style.display = 'none'
  document.getElementById('video').style.display = 'none'
  document.getElementById('movieDetails').style.display = 'none'
  document.getElementById('loading__').style.display = 'none'
  document.getElementById('watchList').style.display = 'none'

}

function showFev() {
  // document.getElementById('watchList').style.display = 'none'
  document.getElementById('video').style.display = 'none'
  document.getElementById('movieDetails').style.display = 'none'
  document.getElementById('loading__').style.display = 'none'
  $('#watchList').fadeIn();
}
function back() {
  document.getElementById('watchList').style.display = 'none'
  document.getElementById('video').style.display = 'none'
  document.getElementById('movieDetails').style.display = 'none'
  document.getElementById('watchList').style.display = 'none'

}




