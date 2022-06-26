
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
function fetchMoviesDetails() {
  fetch(BASE_URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // appllyData(data)
      console.log(data)
      return renderNameOfTheBeer(data);
    });
}
function hideAllElements() {
  document.getElementById('watchList').style.display = 'none'
  document.getElementById('movieDetails').style.display = 'none'
}

function renderNameOfTheBeer(response) {

  console.log(response.length)
  console.log(response);
  for (let i = 0; i < response.length; i++) {
    console.log(response[i].name)
    let beerName_ = response[i].name;
    const unoderedList = document.getElementById("beer-list");
    const list = document.createElement("li");
    list.addEventListener('click', function (e) {
      openMe(response[i])
      // alert("working")

    });
    list.innerHTML = beerName_
    unoderedList.appendChild(list)
  }

}
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
// function appllyData(response) {
//     console.log(response)
//     let beerName_ = response[0].name;
//     let beerImag_ = response[0].image_url
//     let beerDescription_ = response[0].description
//     let reviews_ = response[0].reviews

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


