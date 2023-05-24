// Получаем элементы модального окна
const modal4 = document.querySelector('.modal4');
const modalCloseButton4 = document.querySelector('.modal__close');
const gearsTitle4 = document.getElementById('gears4');

// Функция для открытия модального окна
function openModal() {
  modal4.classList.add('open');
}

// Функция для закрытия модального окна
function closeModal() {
  modal4.classList.remove('open');
}

// Обработчик события для кнопки закрытия
modalCloseButton4.addEventListener('click', closeModal);

// Обработчик события для открытия модального окна при клике на заголовок "Gear and Setup"
gearsTitle4.addEventListener('click', openModal);