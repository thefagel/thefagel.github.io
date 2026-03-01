document.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.getElementById('theme-selector');
    const body = document.body;

    // 1. Проверяем, есть ли сохраненная тема в localStorage
    const savedTheme = localStorage.getItem('site-theme');
    if (savedTheme) {
        body.className = savedTheme;
        themeSelector.value = savedTheme;
    }

    // 2. Слушаем изменения в селекте
    themeSelector.addEventListener('change', (e) => {
        const newTheme = e.target.value;
        
        // Меняем класс у body
        body.className = newTheme;
        
        // Сохраняем выбор пользователя
        localStorage.setItem('site-theme', newTheme);
        
        console.log(`Тема переключена на: ${newTheme}`);
    });
});
