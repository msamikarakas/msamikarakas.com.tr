document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('current'));
            tabContents.forEach(tc => tc.classList.remove('current'));

            tab.classList.add('current');
            document.getElementById(target).classList.add('current');
        });
    });
});