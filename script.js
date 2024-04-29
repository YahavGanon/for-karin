document.addEventListener("DOMContentLoaded", function() {

    const yesButton = document.querySelector('button')

    const img = document.querySelector('.img-ask')

    yesButton.addEventListener('click', function() {

        img.src = "https://i.pinimg.com/originals/79/5a/54/795a5480fa173887a55ddc5d380ac9aa.gif"

        const backgroundMusic = document.getElementById('background-music');
        backgroundMusic.play();
    })

    const noButton = document.querySelector('.no-button')

    noButton.addEventListener('mouseenter', function() {

        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight

        const randomX = Math.floor(Math.random() * windowWidth)
        const randomY = Math.floor(Math.random() * windowHeight)

        noButton.style.position = 'absolute'
        noButton.style.left = randomX + 'px'
        noButton.style.top = randomY + 'px'
    })
})




