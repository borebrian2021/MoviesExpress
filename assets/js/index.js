
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
  const playB= document.getElementById('youtube').addEventListener('click',function(){

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
  document.getElementById('video').src=data.youtube
  //LOOP ON RATES
  renderRates(data.rates)

  //UNHIDE MMOVIE DETAILS
  const movieDetails = document.getElementById("movieDetails");
  $('#cardsHolder_').fadeOut();
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
    document.getElementById(`description${index}`).appendChild(detailsButton);


  })
}


//PERFORM DATA SEARCH
function searchRecords(query) {
  fetch(BASE_URL)
    .then(function (response) {
      return response.json();
    }).then(function (response_) {

      // console.log(data)
   
  // console.log(response_)
    response_.map((card, index, records) => {
    console.log(card);
    if(card.title.includes(query) || card.description.includes(query)){
      let parent=document.getElementById(`cardsHolder_`)
      removeAllChildNodes(parent);
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
    let child=document.getElementById(`description${index}`)

    child.appendChild(detailsButton);
  }
  else{
  }
  })
})};
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
    button.innerHTML="More"
    button.addEventListener('click',function(){
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
      button.innerHTML="More"
      button.addEventListener('click',function(){
        openMe(card)
      })
      document.getElementById(`carousel_caption${index}`).appendChild(button);
    }})



}

function hideAllElements() {
  document.getElementById('watchList').style.display = 'none'
  document.getElementById('video').style.display = 'none'
  document.getElementById('movieDetails').style.display = 'none'
}
function back() {
  document.getElementById('watchList').style.display = 'none'
  document.getElementById('video').style.display = 'none'
  document.getElementById('movieDetails').style.display = 'none'
}

// function renderNameOfTheBeer(response) {

//   console.log(response.length)
//   console.log(response);
//   for (let i = 0; i < response.length; i++) {
//     console.log(response[i].name)
//     let beerName_ = response[i].name;
//     const unoderedList = document.getElementById("beer-list");
//     const list = document.createElement("li");
//     list.addEventListener('click', function (e) {
//       openMe(response[i])
//       // alert("working")

//     });
//     list.innerHTML = beerName_
//     unoderedList.appendChild(list)
//   }

// }
// function renderBeerReviews(reviews_) {
//     const unoderedList = document.getElementById("review-list");
//     reviews_.forEach(element => {
//         const list = document.createElement("li");
//         list.innerHTML = element
//         unoderedList.appendChild(list)
//     });
// }
// function openMe(response) {
//     console.log(response)
//     let beerName_ = response.name;
//     let beerImag_ = response.image_url
//     let beerDescription_ = response.description
//     let reviews_ = response.reviews

//     const beerName = document.getElementById("beer-name");
//     const beerDescription = document.getElementById("beer-description");
//     const beerImage = document.getElementById("beer-image");

//     beerName.innerText = beerName_;
//     beerDescription.innerText = beerDescription_;
//     beerImage.innerText = beerDescription_;
//     beerImage.src = beerImag_;
//     renderBeerReviews(reviews_)

// }

// document.getElementById('update').addEventListener('click', editBeer);

// function editBeer() {
//     let newDescription = document.getElementById('description').value
//     fetch('https://expressmovies254.herokuapp.com/beers/1', {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             'description': newDescription
//         }),
//     }).then(function (response) {
//         return response.json();
//     })
//         .then(function (data) {
//             appllyData(data)
//             return renderNameOfTheBeer(data);
//         });
// }

// let reviewForm = document.getElementById('review-form')
// reviewForm.addEventListener('submit', function (event) {
//     event.preventDefault()
//     let newReview = document.getElementById('review').value
//     let oldReviews = [];
//     fetch('https://expressmovies254.herokuapp.com/beers')
//         .then(function (response) {
//             return response.json();
//         }).then(function (data) {
//             oldReviews = data[0].reviews
//             oldReviews.push(newReview);
//             console.log(oldReviews);
//         });
//     console.log("Logging data");
//     console.log(oldReviews)
//     fetch('https://expressmovies254.herokuapp.com/beers/1', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             'reviews': oldReviews
//         }),
//     }).then(function (response) {
//         return response.json();
//     })
//         .then(function (data) {
//             appllyData(data)
//             return renderNameOfTheBeer(data);
//         });
// });
// fetchBeerDetails();


