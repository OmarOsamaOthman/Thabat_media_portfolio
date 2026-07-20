/* page header */
const navLinks = document.querySelectorAll(".navigation a");


function clearActiveLink() {
    navLinks.forEach(link => {
        link.classList.remove("active");
    });
}


// Scrolling functionalty 

const homeLink = document.querySelector("header .navigation .home");
const logoLink = document.querySelector("header .brand a");
const pageHeader = document.querySelector("#page-header");
const headerLinks = [homeLink, logoLink];


const exploreProjectBtn = document.querySelector(".explore-project-btn");

let scollingLinks = [...navLinks]
scollingLinks.push(logoLink, exploreProjectBtn);


/* scolling to the section when click on anchors */
function scrollToSection(section) {
    window.scrollTo({
        top: section.offsetTop - pageHeader.offsetHeight,
        behavior: "smooth"
    });
}

scollingLinks.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(anchor.getAttribute("href"));
        scrollToSection(target);
    });
});

// --------------------------------------------

/* coloring the navbar anchors while scrolling */
const mainSections = document.querySelectorAll("main>section");

window.addEventListener("scroll", function (e) {

    const currentScrollPoint = window.scrollY + 150;

    mainSections.forEach(section => {

        const start = section.offsetTop;
        const end = start + section.offsetHeight;

        if (currentScrollPoint >= start && currentScrollPoint < end) {

            navLinks.forEach(link => {
                clearActiveLink();
            });

            document.querySelector(`.navigation nav a[href="#${section.id}"]`)
                .classList.add("active");

        }
    });
});
/** ------------------------------------------- */



/* stats section */
const statsCards = document.querySelectorAll(".hero .stats .card");

/* hover on card in stats section */
statsCards.forEach(card => {
    card.addEventListener("mouseenter", function () {
        card.classList.add("hover");
    });

    card.addEventListener("mouseleave", function () {
        card.classList.remove("hover");
    });
});
/** ------------------------------------------- */

/* portfolio section */

/* filter of portfolio */
const filterButtons = document.querySelectorAll(".portfolio-section button span");
const menus = document.querySelectorAll(".select-menu");

function updateMenusVisibility() {
    menus.forEach(menu => {
        if (menu.classList.contains("show"))
            menu.style.display = `block`;
        else
            menu.style.display = "none";
    })
}

/* showing the dropdown list */
filterButtons.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.stopPropagation();

        const menu = btn.parentElement.nextElementSibling;

        menus.forEach(item => {
            if (item !== menu)
                item.classList.remove("show");
        });
        menu.classList.toggle("show");
        updateMenusVisibility();
    });
});

/* coloring the item in filters dropdown list when apply it */
const portfolioFilterItems = document.querySelectorAll(".portfolio-section .filter-container ul li");

portfolioFilterItems.forEach(li => {
    li.addEventListener("click", function () {
        li.classList.add("applyed");

        const bigButton = li.parentElement.previousElementSibling;
        const title = bigButton.children[0];

        bigButton.children[1].style.display = "block";
        title.textContent = li.textContent;
        bigButton.classList.add("selected");

        [...li.parentElement.children].forEach(el => {
            if (el !== li) el.classList.remove("applyed");
        })
    })
})

/* delete btns at the filters in portfolio explore section */
const filterDeleteButtons = document.querySelectorAll(".select-btn i");

filterDeleteButtons.forEach(btn => {
    btn.addEventListener("click", function () {

        const bigButton = btn.parentElement;
        const currentUl = bigButton.nextElementSibling;
        const title = bigButton.firstElementChild;

        btn.style.display = "none";

        title.textContent = bigButton.getAttribute("default-value");

        bigButton.classList.remove("selected");
        [...currentUl.children].forEach(li => li.classList.remove("applyed"));
    })
})

/* hide the dropdown list when click on window */
document.addEventListener("click", function () {
    menus.forEach(menu => {
        menu.classList.remove("show");
    });
    updateMenusVisibility();
});


/* project layout Gallrey or case study */

const portfolioProjects = document.querySelectorAll(".portfolio-section article");
const previewStyleLinks = document.querySelectorAll(".portfolio-section .preview-style button");

console.log(previewStyleLinks)
previewStyleLinks.forEach(link => {
    link.addEventListener("click", function () {
        previewStyleLinks.forEach(link => link.classList.remove("selected"));
        link.classList.add("selected");
        let classTitle = "";
        if (link.textContent == "Gallery") {
            classTitle = "gallery";
        } else {
            classTitle = "case-study";
        }
        [...portfolioProjects].forEach(card => {
            card.classList.remove("case-study");
            card.classList.remove("gallery");
            card.classList.add(classTitle);
        })
    })
})
/** ----------------------------------------- */