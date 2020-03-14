var btn = document.querySelector(`.search-form-btn`);
var popup = document.querySelector(`.search`);

btn.addEventListener(`click`, function(evt) {
    evt.preventDefault();
    popup.classList.toggle(`search-close`);
})