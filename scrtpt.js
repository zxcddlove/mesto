const popup = document.querySelector('.popup');
const box = popup.querySelector('.popup__box');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const editButton = document.querySelector('.profile__edit');
const cancelButton = document.querySelector('.popup__cancel');
const likeButton = document.querySelectorAll('.card__button');
const nameTitle = document.getElementById('name');
const jobTitle = document.getElementById('job');


function showPopup () {
    popup.classList.add('popup_opened');
    nameTitle.value = profileName.textContent;
    statusTitle.value = profileJob.textContent;
}

function hidePopup () {
    popup.classList.remove('popup_opened');
}

function addText (evt) {
    evt.preventDefault();
    profileName.textContent = nameTitle.value;
    profileJob.textContent = jobTitle.value;
    hidePopup();
}

editButton.addEventListener('click', showPopup);
cancelButton.addEventListener('click', hidePopup);
box.addEventListener('submit', addText);