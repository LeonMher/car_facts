const displayName = document.querySelector('.name');
const displayYear = document.querySelector('.year');
const picture = document.querySelector('.img');
const desc = document.querySelector('.description');



var params = {};
location.search.slice(1).split("&").forEach(function (pair) {
    pair = pair.split("=");
    params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
});
const theId = params.id
console.log(params.id)





fetch(`http://localhost:5555/api/${theId}`)
    .then(res => res.json())
    .then(data => {
        displayName.textContent = data.name
        displayYear.textContent = data.year
        picture.src = data.img
        desc.textContent = data.description
    })