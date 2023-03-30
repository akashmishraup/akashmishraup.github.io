function downloadResume(){
    window.open("assets\\images\\fw21_0463-Akash_Chandra Mishra_Resume.pdf","_blank")
}


// close nav 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show")
    })
})