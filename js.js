const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    setTimeout(() => {
        const box = document.getElementById('roulette-2');

        // 👇️ removes element from DOM
        box.style.display = 'none';

        // 👇️ hides element (still takes up space on page)
        // box.style.visibility = 'hidden';
    }, 2200);
});