// Получаем ссылки на элементы меню
const menuItems = document.querySelectorAll('.header__menu-items a');

// Добавляем обработчик события для каждого элемента меню
menuItems.forEach(item => {
  item.addEventListener('click', (event) => {
    // Предотвращаем стандартное поведение перехода по якорю
    event.preventDefault();

    // Получаем целевой якорь из атрибута href элемента меню
    const targetId = item.getAttribute('href');

    // Получаем ссылку на целевую секцию
    const targetSection = document.querySelector(targetId);

    // Вычисляем позицию целевой секции относительно верха страницы
    const targetOffset = targetSection.offsetTop;

    // Плавно прокручиваем страницу к целевой секции
    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth'
    });
  });
});