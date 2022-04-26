let icomenu = document.querySelector(".icomenu");
const nav = document.querySelector(".mobile .mob");
icomenu.addEventListener("click", ()=>{
    nav.classList.toggle("hidden");
});

document.addEventListener("click", function (e) {
    if (e.target.closest(".icomenu")) return; 
    nav.classList.add("hidden");
})



