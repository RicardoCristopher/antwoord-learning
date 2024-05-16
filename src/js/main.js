function pageListenersJS(){

    const alert   = document.getElementById('alert');
    const confirm = document.getElementById('confirm');
    const reverse = document.getElementById('reverse');
    const evenGrp = document.querySelector('.play');

    alert.addEventListener('click',()=>{
        window.alert('Hola Mundo');
    });

    confirm.addEventListener('click',()=>{
        window.confirm('de veritas de veritas?');
    });

    reverse.addEventListener('click',()=>{
        evenGrp.classList.contains('reverse') ? evenGrp.classList.remove('reverse') : evenGrp.classList.add('reverse');
    });

};