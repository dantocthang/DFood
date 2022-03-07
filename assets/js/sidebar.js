const minimizeBtn=document.querySelector(".minimize-btn")
const sidebar=document.querySelector(".sidebar")
const admin=document.querySelector(".admin-container")
const hamburger=document.querySelector(".hamburger");
minimizeBtn.addEventListener( 'click', ()=>{
    sidebar.classList.toggle('minimize') 
    admin.classList.toggle('maximize')
    hamburger.classList.toggle('is-active')
    console.log("ok")
})
