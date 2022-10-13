const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

const header = document.getElementById("header");
const footer = document.getElementById("footer");
const upArrow = document.getElementById("upArrow");
const downArrow = document.getElementById("downArrow");
const contact = document.getElementById("contactAbout");

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})



const displayHeader = () => {
    if(header.classList.contains("show")){
        header.style.display = "block";
        downArrow.setAttribute("hidden", "hidden");
        header.classList.remove("show");
    } else {
        header.style.display = "none";
        downArrow.removeAttribute("hidden")
        header.classList.toggle("show");

    }
    
}

const displayFooter = () => {
    if(footer.classList.contains("show")){
        footer.style.display = "block";
        upArrow.setAttribute("hidden", "hidden");
        footer.classList.remove("show");
    } else {
        footer.style.display = "none";
        upArrow.removeAttribute("hidden")
        footer.classList.toggle("show");

    }
    
}



header.addEventListener('dblclick', displayHeader)
footer.addEventListener('dblclick', displayFooter)
downArrow.addEventListener('click', displayHeader)
upArrow.addEventListener('click', displayFooter)
contact.addEventListener('click', () => contact.setAttribute("href=", "mailto:alegraleeson@gmail.com"));