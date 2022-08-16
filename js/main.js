const boxes = document.querySelectorAll(".faqs .box")
const labelsWave = document.querySelectorAll(".contact label")
const sections = document.querySelectorAll(".body-section")
const scrollBtn = document.querySelector(".scroll-top")
const barsBtn = document.querySelector(".bars")
const closeBtn = document.querySelector(".close-btn")
const navLinks = document.querySelector("nav .links ")
const header = document.querySelector(".header")
// add question effect 
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.classList.toggle("active")
    })
})
// add animation form contact 
labelsWave.forEach((el) => {
    el.innerHTML = el.innerText.split("").map((char, indx) => {
        return `<span style="transition-delay: ${indx * 50}ms">${char}</span>`
    }).join("")
})


// add active section 
function scrollActive() {
    const scrollY = window.scrollY
    sections.forEach((sec) => {
        let sectionHeight = sec.offsetHeight
        let sectionTop = sec.offsetTop - 100
        let secId = sec.getAttribute("id")
        if (scrollY >= sectionTop && scrollY <= sectionHeight + sectionTop) {
            document.querySelector(`nav a[href ='#${secId}']`).classList.add("active")
        } else {
            document.querySelector(`nav a[href ='#${secId}']`).classList.remove("active")
        }
    })
}
window.addEventListener("scroll", scrollActive)

// Scroll To Top 
window.onscroll = () => {
    if (window.scrollY > 100) {
        scrollBtn.style.display = "block"
        console.log("yes")
    } else {
        scrollBtn.style.display = "none"
    }
    // shodow header in scroll
    if (window.scrollY > 72) {
        header.classList.add("shadow-header")
    } else {
        header.classList.remove("shadow-header")
    }
}
scrollBtn.onclick = function () {
    window.scrollTo({
        top: 0, behavior: "smooth"

    })
}
// show menu button 
barsBtn.addEventListener("click", () => {
    navLinks.style.display = "block"
})
closeBtn.addEventListener("click", () => {
    navLinks.style.display = "none"
})



// dark light mode
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})