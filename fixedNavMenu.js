/* Developed by Amin Arjmand
Email: aminarj2000@gmail.com | Site: aminarjmand.com | GitHub: @sibche2013 
*/

document.addEventListener("DOMContentLoaded", function () {
    var menu = document.getElementById("menu");
    // Cache the absolute initial top positions dynamically outside the scroll loop
    var stickyThreshold = menu.offsetTop;

    window.addEventListener("scroll", function () {
        // High performance class switching based on computed coordinates
        if (window.scrollY >= stickyThreshold) {
            menu.classList.add("topMenu");
        } else {
            menu.classList.remove("topMenu");
        }
    });
});
