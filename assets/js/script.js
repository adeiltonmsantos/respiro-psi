document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('.mobile-menu-content');
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const mobileMenuItems = mobileMenu.querySelectorAll('ul li');

    mobileMenuIcon.addEventListener('click', (e) => {
        const currentClass = mobileMenu.classList;
        if (currentClass.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }
    });

    mobileMenuItems.forEach(item => {
        item.addEventListener('click', (e) =>{
            // Disabling default link behavior
            e.preventDefault();

            // Hiding the mobile menu 300ms after clicking a link
            const idTime = setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);

            // Getting url from clicked item
            const url = item.querySelector('a').getAttribute('href');

            // Navigating to the clicked link
            window.location.href = url;

        })});
});