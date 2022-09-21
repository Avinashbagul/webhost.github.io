window.addEventListener('scroll', function(){
    var navbar = this.document.getElementById('navbar')
    if(this.window.pageYOffset >= 300){
        navbar.classList.add('stycky');
    }
    else{
        navbar.classList.remove('stycky');
    }
 });
 
 
 AOS.init({
    offset: 150,
    duration: 1000,
 });