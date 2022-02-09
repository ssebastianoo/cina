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
                    text: "La civiltà cinese è una delle più antiche civiltà fluviali, le cui origini risalgono al 2100 a.C.",
                    image: "https://cdn.discordapp.com/attachments/938373773541924904/940747250156593212/New_Project_-_2022-02-09T001326.707.png",
                },
                {
                    title: "Filosofia",
                    text: "Le religioni praticate dai cinesi si possono distinguere in religioni indigene, come il confucianesimo o il taoismo.",
                    image: "https://cdn.discordapp.com/attachments/938373773541924904/940750344164606052/yin_yang_and_trigrams.png",
                },
                {
                    text: "Il Confucianesimo pone la salvezza individuale in una restaurazione dell'impero, mentre il Taoismo pretende di rigenerare individuo e società svincolandoli dall'ordine imperiale e vincolandoli all'ordine cosmico, o al principio cosmico chiamato Tao.",
                },
                {
                    text: "Secondo la leggenda cinese gli esseri umani hanno origine dai parassiti presenti sul corpo del creatore Pangu. Dopo la morte di questi ci fu un susseguirsi di sovrani saggi che introdussero invenzioni e istituzioni.",
                    image: "https://cdn.discordapp.com/attachments/938373773541924904/940757699845570600/pangucreation.png",
                },
                {
                    title: "Preistoria",
                    text: "I sovrani erano: Fuxi ,Shennong , Huangdi “l'imperatore Giallo”, Yao, Shun, Yu. Yu fondò la dinastia Xia (2200-1750 a.C.) la prima delle tre dinastie della Cina antica (Xia, Shang e Zhou)",
                    image: "https://cdn.discordapp.com/attachments/938373773541924904/940762540047224832/800px-Sui_Yangdi_Tang.png",
                },
                {
                    text: "Nel 221 a.C. Ying Zheng sconfisse i sei regni che occupavano il territorio cinese: Zhao, Han, Wei, Yan, Qi e Chu e con la sconfitta di Qi, Ying Zheng realizzò infine l'unificazione della Cina e assunse il titolo di Qin Shi Huang Di (\"primo imperatore della dinastia Qin\").",
                    image: "https://cdn.discordapp.com/attachments/938373773541924904/940765785444474921/qin-shi-huang-1.png",
                },
                {
                    text: "Con la dinastia de Qin, nacque l'Impero cinese, destinato ad avere una storia millenaria. A Qin Shi Huang si deve la costruzione della Grande Muraglia e  Esercito di terracotta di Xi'an.",
                },
                {
                    text: "La Grande Muraglia Cinese è un sistema di fortificazioni lungo più di 8000 chilometri che doveva proteggere le terre coltivate dalle incursioni dei popoli nomadi provenienti dalla Mongolia.",
                    image: "https://cdn.discordapp.com/attachments/938373773541924904/940772901173493780/Jinshanling-Great-Wall-wide_1024x576.png",
                },
                {
                    text: 'Questa straordinaria opera umana costituì un freno alle invasioni e attivò un complesso processo di "spinte" di popoli in armi verso ovest, fino in Europa',
                    image: "https://upload.wikimedia.org/wikipedia/commons/5/58/The_Great_Wall-Badaling-2004d.jpg",
                },
                {
                    text: "L'Esercito di terracotta o Armata di terracotta è un insieme di statue collocato nel mausoleo del primo imperatore Qin, situato a Xi'an. Si tratta di un esercito simbolico, destinato a servire il primo imperatore cinese Qin Shi Huang nell'Aldilà.",
                    image: "https://cdn.discordapp.com/attachments/938373773541924904/940777968685432842/Esercito-copertina.png",
                },
                {
                    text: "Alla fine del III secolo aC. iniziò il periodo della dinastia Han , sotto la quale l'Impero cinese si espanse fino a sud del fiume Yang Tse Klang e conobbe un grande sviluppo economico e demo grafico.",
                },
                {
                    text: "Fu introdotta la coltivazione del riso, fu inventata la carta e si stabilirono i primi contatti con l'Occidente (nel 166 d.C)",
                },
                {
                    text: "I contatti con l'Occidente si intensificarono grazie, soprattutto, alla diffusione delle piantagioni Di gelsi, le cui foglie costituivano l'unico alimento del bachi allevati per la produzione della seta, di cui lo Stato cinese aveva il monopolio.", 
                },
                {
                    text: 'Nel I secolo d.C. nacque quel lungo e percorso terrestre, fluviale e marittimo chiamato "Via della seta".',
                    image: 'https://cdn.discordapp.com/attachments/938373773541924904/940877409631240202/440px-Silk_route.png',
                },
                {
                    text: "Nonostante il nome, in realtà, nel corso dei secoli i mercanti hanno iniziato a commerciare altri manufatti come tappeti, spezie, tè, porcellana, metalli preziosi, ma anche tecnologie e sapere, generando un flusso di prodotti artigianali e cultura in grado di incidere sul corso della storia.",
                },
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
                },
            ],
        };
    },
};
Vue.createApp(SectionsManager).mount("#sections");