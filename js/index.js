const elementEditor = document.querySelector('.editor');
const formName = document.querySelector('.editor__form-input[name="name"]');
const formPost = document.querySelector('.editor__form-input[name="post"]');
const profileName = document.querySelector('.profile__name');
const profilSubtitle = document.querySelector('.profile__subtitle');
const btnEditor = document.querySelector('.profile__edit-button');
const btnSave = document.querySelector('.editor__form-submit');
const btnClose = document.querySelector('.editor__close');
const form = document.querySelector('.editor__form');
const className = elementEditor.className;

function toggleEditor () {
    elementEditor.classList.toggle("editor__opened");
}

btnEditor.addEventListener('click', function () {
    toggleEditor();
    formName.value = profileName.innerText;
    formPost.value = profilSubtitle.innerText;
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    profileName.innerText = formName.value;
    profilSubtitle.innerText = formPost.value;
    toggleEditor();
});

btnClose.addEventListener('click', function() {
    toggleEditor();
});