window.addEventListener('DOMContentLoaded', (event) =>{
    console.log('Dom fully loaded and parsed');
    const btn = document.getElementById('btn');
    btn.addEventListener('click', (event) =>{
        document.querySelector('p').className = 'hilite';
    });
});