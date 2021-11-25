function toggleMenu () 
{
    let menu = document.querySelector(".nav-mobile");

    if (menu.style.display == "block")
    {
        menu.style.display = "none";
    }
    else 
    {
        menu.style.display = "block";
    }
}