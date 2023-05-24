// Получаем элементы модального окна
const modal5 = document.querySelector('.modal5');
const modalCloseButton5 = document.querySelector('.modal__close');
const gearsTitle5 = document.getElementById('gears5');

// Функция для открытия модального окна
function openModal() {
  modal5.classList.add('open');
}

// Функция для закрытия модального окна
function closeModal() {
  modal5.classList.remove('open');
}

// Обработчик события для кнопки закрытия
modalCloseButton5.addEventListener('click', closeModal);

// Обработчик события для открытия модального окна при клике на заголовок "Gear and Setup"
gearsTitle5.addEventListener('click', openModal);