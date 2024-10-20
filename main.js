// Navbar Interactivity

document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll("nav ul li a");

    navItems.forEach(item => {
        item.addEventListener("click", function() {
            navItems.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        })
    })
})

//



