//const sectionsEl = document.getElementById('sections');
let sections = document.getElementsByClassName('section');
let scrolled = 0;

let buttons = document.getElementsByClassName('scroll-button');

document.addEventListener("DOMContentLoaded", function () {
    twemoji.parse(document.body);
    setTimeout(() => {
        sections[scrolled].scrollIntoView();
    }, 1000);
});

function scroll() {
    if (scrolled > sections.length - 1) {
        scrolled = 0;
    } else if (scrolled < 0) {
        scrolled = sections.length - 1;
    }
    sections[scrolled].scrollIntoView();
}

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
    scroll();
})

for (i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        let scrollEl;
        if (!e.target.id) {
            scrollEl = e.target.parentElement;
        } else {
            scrollEl = e.target;
        }
        switch (scrollEl.id) {
            case 'scrollUp':
                scrolled--;
                break;
            case 'scrollDown':
                scrolled++;
                break
        }
        console.log(scrollEl);
        scroll();
    })
}