export function initNavigation() {
    // Ищем элементы, с которыми будет взаимодействовать и добавляем их в переменные
    const html = document.documentElement;
    const menu = document.querySelector('[data-menu]');
    const menuToggler = document.querySelector('[data-menu-toggler]');

    // Проверяем, существуют ли элементы, чтобы избежать ошибок
    if (!menu || !menuToggler) return;

    const toggleMenuState = () => {
        html.classList.toggle('is-lock');
        menu.classList.toggle('is-active');
    };

    const closeOnOutsideClick = (e) => {
        if (
            menu.classList.contains('is-active') &&
            !menu.contains(e.target) &&
            !menuToggler.contains(e.target)
        ) {
            toggleMenuState();
        }
    };

    const closeOnEsc = (e) => {
        if (e?.key === 'Escape' && menu.classList.contains('is-active')) {
            toggleMenuState();
        }
    };

    const init = () => {
        menuToggler.addEventListener('click', toggleMenuState);
        document.addEventListener('click', closeOnOutsideClick);
        document.addEventListener('keydown', closeOnEsc);
        console.log('Navigation initialized');
    };

    init();
}
