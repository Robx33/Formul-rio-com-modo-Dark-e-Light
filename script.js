const mode = document.getElementById('mode-icon')

mode.addEventListener('click', () => {
    const form = document.getElementById('login-form')

    if(mode.classList.contains('fa-moon')){ // Aqui ele está vendo se o mode possuí a classe fa moon
        mode.classList.remove('fa-moon')      
        mode.classList.add('fa-sun')      // Caso ele tenha a classe fa moon ele remove e add o sun 

        form.classList.add('dark')

        return;
    }

    mode.classList.add('fa-moon')  // Não passar na condição do if acima irá vir para cá
    mode.classList.remove('fa-sun')

    form.classList.remove('dark')

})  