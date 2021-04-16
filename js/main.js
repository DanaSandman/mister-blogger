'use strict'

var elModal;

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}

function onOpenModal() {
    elModal = document.querySelector('.modal').style.display = "block";
    var span = document.getElementsByClassName("close")[0];

}

function onCloseModal() {
    elModal = document.querySelector('.modal').style.display = "none";
}

function onDropDown() {
    var elDropdown;
    elDropdown = document.querySelector('.dropdown-content').classList.toggle('drop-open');
}
   
   