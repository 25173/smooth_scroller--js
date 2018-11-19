let index = 0;// geeft welke link actief zijn en welke inhoud moet worden voorgeschoten
let main = document.querySelector('.inhoud');
let deLinkjes = document.querySelectorAll('.nav__menuitem');
let allelinkjesArr = [];
deLinkjes.forEach((item) => {
    item.addEventListener('click', (e) => {
       index = allelinkjesArr.indexOf(item);
       activeren(index);
    });
    allelinkjesArr.push(item);
});

const activeren = (num) =>{
    // verwijder eventuele actieve pagina icons
    verwijderactief()
    //activeer de link num
    allelinkjesArr[num].classList.add('nav--actief');
//    schuif de inhoud num voor
    main.style.marginLeft = (-100*num) + 'vw';
};

const verwijderactief = () =>{
    allelinkjesArr.forEach((item) =>{
        item.classList.remove('nav--actief')
    })
};

// bij de eerste item
activeren(index);

