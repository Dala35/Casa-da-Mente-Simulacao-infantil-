// Função para movimentar o meteorito aleatoriamente

function animateMeteor() {

    const meteor = document.querySelector('.meteor');

    setInterval(() => {

        const randomTop = Math.floor(Math.random() * 100);

        const randomLeft = Math.floor(Math.random() * 100);

        meteor.style.top = `${randomTop}%`;

        meteor.style.left = `${randomLeft}%`;

    }, 5000);

}



window.onload = function() {

    animateMeteor();

};

