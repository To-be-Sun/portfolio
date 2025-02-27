document.querySelector(".dropdown-toggle").addEventListener("click", (e)=>{
    e.stopPropagation(); // イベントの伝播を停止
    document.querySelector(".dropdown-menu").classList.toggle("active");
    document.querySelector("body").classList.toggle("active");
})
document.querySelector('body').addEventListener("click", () => {
    document.querySelector(".dropdown-menu").classList.remove("active"); 
    document.querySelector("body").classList.remove("active");
})
document.querySelector(".dropdown-menu").addEventListener("click", (e)=>{
    e.stopPropagation(); // イベントの伝播を停止
})
