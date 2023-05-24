// Получаем элементы модального окна
const modal3 = document.querySelector('.modal3');
const modalCloseButton3 = document.querySelector('.modal__close');
const gearsTitle3 = document.getElementById('gears3');

// Функция для открытия модального окна
function openModal() {
  modal3.classList.add('open');
}

// Функция для закрытия модального окна
function closeModal() {
  modal3.classList.remove('open');
}

// Обработчик события для кнопки закрытия
modalCloseButton3.addEventListener('click', closeModal);

// Обработчик события для открытия модального окна при клике на заголовок "Gear and Setup"
gearsTitle3.addEventListener('click', openModal);