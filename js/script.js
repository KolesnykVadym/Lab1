document.querySelector('.header-burger').addEventListener('click', function(){
   this.classList.toggle('active')
   document.querySelector('.navbar').classList.toggle('open')
})

window.onscroll = () => {
   let header = document.querySelector('header');

   header.classList.toggle('sticky', window.scrollY > 100);
}