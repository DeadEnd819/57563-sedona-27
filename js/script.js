var btn = document.querySelector(".search-form-btn");
var popup = document.querySelector(".search");
var search = document.querySelector(".search form");
var arrival = search.querySelector("[name=arrival-date]");
var departure = search.querySelector("[name=departure-date]");
var adult = search.querySelector("[name=adults]");
var child = search.querySelector("[name=children]");
var filter = document.querySelector(".filter");
var minPrice = document.querySelector("[name=min-price]");
var maxPrice = document.querySelector("[name=max-price]");


btn.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("search-close");
});

search.addEventListener("submit", function(evt) {
    if (!arrival.value || !departure.value || !adult.value || !child.value) {
        evt.preventDefault();
        if (!arrival.value) {
            arrival.classList.add("error");
        }
        if (!departure.value) {
            departure.classList.add("error");
        }
        if (!adult.value) {
            adult.classList.add("error");
        }
        if (!child.value) {
            child.classList.add("error");
        }
    } else {
        arrival.classList.remove("error");
        departure.classList.remove("error");
        adult.classList.remove("error");
        child.classList.remove("error");
    }
});