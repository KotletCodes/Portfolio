document.querySelectorAll('a').forEach(link=>{link.addEventListener('click',e=>{e.preventDefault();
    document.body.classList.add('fadeout');
    setTimeout(()=>{window.location.href = link.href},1000)
    });
});