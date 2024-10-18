function searchAnime(){
    const input = document.getElementById('searchInput').value.toLowerCase();
    const animeCards = document.querySelectorAll('.anime-card');

    animeCards.forEach(card => {
        const animeName = card.getAttribute('data-name').toLowerCase();
        if (animeName.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function myFunction() {
    let element = document.body;
    element.classList.toggle("darkmode");
}