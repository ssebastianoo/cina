//const sectionsEl = document.getElementById('sections');
let sections = document.getElementsByClassName('section');
let scrolled = -1;

function scroll() {
    if (scrolled > sections.length - 1) {
        scrolled = 0;
    } else if (scrolled < 0) {
        scrolled = sections.length - 1;
    }
    sections[scrolled].scrollIntoView();
}

function scrollDown() {
    for (let i = 0; i < sections.length; i++) {
        if (document.documentElement.scrollTop < sections[i].offsetTop) {
            sections[i].scrollIntoView();
            break;
        }
    }
}

function scrollUp() {
    for (let i = 0; i < sections.length; i++) {
        if (document.documentElement.scrollTop <= sections[i].offsetTop) {
            if (!sections[i - 1]) {
                document.documentElement.scrollTop = 0;
            } else {
                sections[i - 1].scrollIntoView();
                break;
            }
        }
    }
}

window.addEventListener('keydown', (e) => {
    let pressed = false;

    switch (e.code) {
        case 'Space':
            e.preventDefault();
            scrollDown();
            break;
        case 'ArrowDown':
            e.preventDefault();
            scrollDown();
            break
        case 'ArrowUp':
            e.preventDefault();
            scrollUp();
            break;
    }
})

const SectionsManager = {
    data() {
        return {
            sections: [
                {
                    title: 'La dinastia Tang',
                    image: 'https://museocineseparma.org/images/scuole/cina-tang1G.gif',
                },
                {
                    text: "Dal 618 al 907 la Cina fu governata dalla dinastia Tang. Rafforzarono i confini e si espansero in Tibet.",
                },
                {
                    text: "Introdurono il cavallo nell'ambito militare, diffusero grandi coltivazioni di riso in terreni inondati e di tè, che aveva inoltre un ruolo sanitario.",
                    image: 'https://mondodelte.files.wordpress.com/2017/10/chajing-luyu-book-script.jpg',
                },
                {
                    text: "Inventarono macchinari per estrarre il ferro ed il sale, permettendo il commercio con l'occidente.",
                },
                {
                    title: "La dinastia Song",
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/China_-_Song_Dynasty-en.svg/1200px-China_-_Song_Dynasty-en.svg.png',
                },
                {
                    text: "Dal 960 al 1279 la Cina fu governata dalla dinastia Song. Crearono una nuova politica e nuove tecniche: la polvere da sparo, la stampa a caratteri mobili, perfezionarono la bussola e la ghisa.",
                    image: "https://4.bp.blogspot.com/-ImGQZZztaNo/V4pbo1aaX3I/AAAAAAAAA6A/zqYk0e282AE-GkCoMgFT6hladyaE7rHwQCLcB/s1600/guerriero%2Bcinese%2Bcon%2Belmo%252C%2Bspada%252C%2Barco%2Be%2Bfrecce%252C%2Baccende%2Bun%2Bcannone%2Ba%2Bmano%2Bprimitivo.gif",
                },
                {
                    text: "Coltivavano piantagioni di tè, canapa, cotone e gelsi. Inoltre divvenero famosi per i loro pregiati tessuti in seta e per la loro lavorazione della porcellana. Tutto questo fece salire i ruoli sociali dei commercianti."
                },
                {
                    text: "A causa di questo aumento del commercio, fu emanata la moneta di carta. A differenza del potente lato commerciale della dinastia Song, il lato militare era abbastanza debole, infatti nel 1279 venne portata a termine dalla dai Mongoli, che fondarono la dinastia Yuan.",
                    image: "https://live.staticflickr.com/8648/16288205368_ac73c3a928.jpg",
                }
            ],
        };
    },
};
Vue.createApp(SectionsManager).mount("#sections");