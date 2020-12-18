let allLinks = document.querySelectorAll('.nav-item__link');
let sections = document.querySelectorAll('section');

let options = {}

const handelCut = (entries, observer) => {
    entries.forEach(entry => {
        console.log(entry.target + " doorsnijdt " + entry.isIntersecting);
    })

};

let observer = new IntersectionObserver(handelCut, options);

observer.observe(sections[1]);

// functie die de class active verwijderd uit een menu item
const deleteActive = () => {
    allLinks.forEach((link) => {
        if (link.classList.contains('active')) {
            link.classList.remove('active');
        }
    });
}

// functie die class active toevoegt aan een menu item
const makeActive = (el) => {
    deleteActive();
    el.classList.add('active');
}

allLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        makeActive(e.target);
        window.location = e.target.href;
    })
})