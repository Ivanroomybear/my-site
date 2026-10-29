document.getElementById('scare-btn').addEventListener('click', function(e) {
    // Создаем новый текстовый элемент
    const bwaaa = document.createElement('div');
    bwaaa.classList.add('fly-text');
    bwaaa.innerText = 'bwaaaaa~~';

    // Генерируем случайное смещение по горизонтали и случайный угол поворота
    const randomX = (Math.random() - 0.5) * 160; // разлет влево-вправо на 80px
    const randomRot = (Math.random() - 0.5) * 40;  // поворот от -20 до +20 градусов

    // Позиционируем надпись ровно там, где находится кнопка в данный момент
    bwaaa.style.left = `calc(50% + ${randomX}px)`;
    bwaaa.style.bottom = '70px'; // Чуть выше самой кнопки
    bwaaa.style.setProperty('--rot', `${randomRot}deg`); // Передаем угол в CSS-анимацию

    // Добавляем текст на страницу
    document.body.appendChild(bwaaa);

    // Удаляем элемент из памяти через 1 секунду, когда закончится анимация, чтобы сайт не лагал
    setTimeout(() => {
        bwaaa.remove();
    }, 1000);
});

