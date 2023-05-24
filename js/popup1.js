// Получаем элементы модального окна
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal__close');
const gearsTitle = document.getElementById('gears1');

// Функция для открытия модального окна
function openModal() {
  modal.classList.add('open');
}

// Функция для закрытия модального окна
function closeModal() {
  modal.classList.remove('open');
}

// Обработчик события для кнопки закрытия
modalCloseButton.addEventListener('click', closeModal);

// Обработчик события для открытия модального окна при клике на заголовок "Gear and Setup"
gearsTitle.addEventListener('click', openModal);

// Получаем элементы модального окна
const modal2 = document.querySelector('.modal2');
const modalCloseButton2 = document.querySelector('.modal__close2');
const gearsTitle2 = document.getElementById('gears2');

// Функция для открытия модального окна
function openModal2() {
    modal2.classList.add('open');
}

// Функция для закрытия модального окна
function closeModal2() {
    modal2.classList.remove('open');
}

// Обработчик события для кнопки закрытия
modalCloseButton2.addEventListener('click', closeModal2);

// Обработчик события для открытия модального окна при клике на заголовок "Gear and Setup"
gearsTitle2.addEventListener('click', openModal2);