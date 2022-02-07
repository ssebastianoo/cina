//const sectionsEl = document.getElementById('sections');
let sections = document.getElementsByClassName('section');
let scrolled = 0;

document.addEventListener("DOMContentLoaded", function () {
    twemoji.parse(document.body);
    setTimeout(() => {
        sections[scrolled].scrollIntoView();
    }, 1000);
});


window.addEventListener('keydown', (e) => {
    e.preventDefault();

    switch(e.code) {
        case 'Space':
            scrolled++;
            break;
        case 'ArrowDown':
            scrolled++;
            break
        case 'ArrowUp':
            scrolled--;
            break;
    }
    if (scrolled > sections.length - 1) {
        scrolled = 0;
    } else if (scrolled < 0) {
        scrolled = sections.length - 1;
    }
    sections[scrolled].scrollIntoView();
})