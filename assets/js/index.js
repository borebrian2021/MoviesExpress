
const BASE_URL = "https://expressmovies254.herokuapp.com/movies"
document.addEventListener('DOMContentLoaded', () => {
  // let btn = document.getElementById('btn');
  // btn.addEventListener('click', () => {
  //     // handle the click event
  //     console.log('clicked');
  // });
  hideAllElements()
  fetchMoviesDetails()

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


  //SET DATA
  
  poster.style.backgroundImage = `url('${data.poster}')`
  director.innerHTML=data.director
  actor.style.backgroundImage = `url('${data.producerPoster}')`
  title.innerHTML=data.title
  genre.innerHTML=data.
  // wholeCard.style.backgroundImage = `url('${data.poster}')`
  renderBeerReviews(reviews_)

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
  response.map((card,index,records) => {
    var cardDiv = document.createElement('div');
    cardDiv.innerHTML = ` <div class="card">
      <img class="full" src="${card.poster}"/>
      <div class="description" id="description${index}">
        <h5>${card.title}</h5>
        <small>${card.description.split(' ').slice(0, 15).join(' ')+'...'}</small><br/>
    
      </div>
    </div>`
    document.getElementById('cardsHolder_').appendChild(cardDiv);
    var detailsButton = document.createElement('button');
    detailsButton.classList.add("btn");
    detailsButton.classList.add("btn-sm");
    detailsButton.classList.add("btn-warning");
    detailsButton.classList.add("customB");

    detailsButton.innerText="More"
    detailsButton.addEventListener('click', function (e) {
              openMe(card)
              // alert("working")
  
            });
    document.getElementById(`description${index}`).appendChild(detailsButton);

   
  })
}


  //RENDER CAROUSEL GAMES
  function renderCarousel(response) {
    console.log(response)
    response.map((card,index) => {

      var cardDiv = document.createElement('div');
      
      
      if(index===1){
      cardDiv.classList.add("item");
      cardDiv.classList.add("active");
      cardDiv.innerHTML =
        ` 
   
    <img src="${card.carousel}" alt="Los Angeles" style="width:100%;">
    <div class="carousel-caption">
      <h3>${card.title}</h3>
      <p>${card.description}</p>
      <button class="btn btn-sm btn-warning customB_">More</button>

    </div>
 
    `
      }
      else{
        cardDiv.classList.add("item");
        cardDiv.innerHTML =
          ` 
     
      <img src="${card.carousel}" alt="Los Angeles" style="width:100%;">
      <div class="carousel-caption">
        <h3>${card.title}</h3>
        <p>${card.description}</p>
      <button class="btn btn-sm btn-warning customB_">More</button>

      </div>
   
      `
      }
     
      document.getElementById('carousel').appendChild(cardDiv);
    })


    
    // for (let i = 0; i < response.length; i++) {
    //       console.log(response[i].title)
    //       let beerName_ = response[i].name;
    //       const unoderedList = document.getElementById("cardsHolder");
    //       const createCard = document.createElement("li");
    //       list.addEventListener('click', function (e) {
    //         openMe(response[i])
    //         // alert("working")

    //       });
    //       list.innerHTML = beerName_
    //       unoderedList.appendChild(list)
    //     }

    // let beerName_ = response[0].name;
    // let beerImag_ = response[0].image_url
    // let beerDescription_ = response[0].description
    // let reviews_ = response[0].reviews
    // const beerName = document.getElementById("beer-name");
    // const beerDescription = document.getElementById("beer-description");
    // const beerImage = document.getElementById("beer-image");
    // beerName.innerText = beerName_;
    // beerDescription.innerText = beerDescription_;
    // beerImage.innerText = beerDescription_;
    // beerImage.src = beerImag_;
    // renderBeerReviews(reviews_)
  }


  function hideAllElements() {
    document.getElementById('watchList').style.display = 'none'
    // document.getElementById('movieDetails').style.display = 'none'
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


