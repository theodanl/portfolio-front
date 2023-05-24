// Получаем все элементы с классом "visible"
const visibleImages = document.querySelectorAll('.visible');

// Добавляем обработчик события наведения на каждый элемент
visibleImages.forEach((image) => {
  image.addEventListener('mouseover', () => {
    // Скрываем текущую картинку
    image.style.opacity = '0';
    // Находим родительский элемент
    const parentElement = image.parentNode;
    // Находим следующую картинку с классом "hidden"
    const hiddenImage = parentElement.querySelector('.hidden');
    // Показываем следующую картинку
    hiddenImage.style.display = 'block';
    hiddenImage.style.opacity = '1';
  });

  // Добавляем обработчик события ухода курсора с элемента
  image.addEventListener('mouseout', () => {
    // Показываем текущую картинку
    image.style.opacity = '1';
    // Находим родительский элемент
    const parentElement = image.parentNode;
    // Находим следующую картинку с классом "hidden"
    const hiddenImage = parentElement.querySelector('.hidden');
    // Скрываем следующую картинку
    hiddenImage.style.opacity = '0';
    hiddenImage.style.display = 'none';
  });
});