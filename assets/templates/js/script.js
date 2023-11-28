const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon');




iconToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});


iconClose.addEventListener('click', () => {

    navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    });

});

// backgraund header

function scrollHeader() {
    const header = document.getElementById('header');
    this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
}

window.addEventListener('scroll', scrollHeader)

// Home type effect

const typed = document.querySelector('.typed');
if (typed) {
    let type_strings = typed.getAttribute('data-typed-items');
    type_strings = type_strings.split(',');

    new Typed('.typed', {
        strings: type_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}


// Scroll sections active Link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;

        let sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);


// Scroll resume

const tabs = document.querySelectorAll('.resume_tabs ul li a');


// Her bir sayfa bağlantısına tıklama olayını ekle
tabs.forEach((tab) => {
    tab.addEventListener('click', () => {

        tabs.forEach((t) => t.classList.remove('current'));

        tab.classList.add('current');

    });
});



// Blogs

let filterItems = document.querySelectorAll('.blog_filters li');

function activeBlog(event) {

    filterItems.forEach(el => {
        el.classList.remove('filter-active');

    });
event.target.classList.add('filter-active');


}

filterItems.forEach(el => {
    el.addEventListener('click', activeBlog);
});


let mixerPortfolio = mixitup('.blog_wrap-container', {
    selectors: {
        target: '.blog_item'
    },
    animation: {
        duration: 300
    }
})


//  testimonial section 
let swiper = new Swiper(".testimonial_container", {
    effect: 'slide',
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 100,
    breakpoints: {
        768: {
            slidesPerView: 2,
        }
    }

});


//  service section 
let modalBtns = document.querySelectorAll('.services_button'),
    modalViews = document.querySelectorAll(".services_modal"),
    modalClose = document.querySelectorAll('.close-icon');

let openModal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

let closeModal = function () {
    modalViews.forEach(modalView => {
        modalView.classList.remove('active-modal');
    });
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        openModal(i);
    });
});

modalClose.forEach(el => {
    el.addEventListener('click', () => {
        closeModal();
    });
});

document.addEventListener('click', (event) => {
    if (event.target.closest('.services_modal')) {
        closeModal();
    }
});



// contact 

const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message');

const sendEmail =(e) => {
    e.preventDefault();

    emailjs.sendForm('service_vgqe0re', 'template_zlpetbh', '#contact-form', '9n34o0aYxQXWVNbnN')
    .then(() => {
        contactMessage.textContent = 'Message sent successfully✅'
    }, () => {
        contactMessage.textContent = 'Message not sent (service error)❌'

    });
}

contactForm.addEventListener ('submit', sendEmail)



// animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,

    })
    sr.reveal('.home_content , .contact_container, .footer_container')
    sr.reveal ('.home_img', {origin: 'bottom' })
    sr.reveal (` .about_content, .resume_tabs`, {origin: 'left' })
    sr.reveal (` .about_img , .resume_content `, {origin: 'right' })
    sr.reveal (` .blog_filters li , .blog_item , .testimonial_item , .services_section, .home_social a, .footer_social a `, {interval:100 })