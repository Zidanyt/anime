animes = [
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.55403484a1dc6c1736058866072683df?rik=Bp4SxPMnzArqkw&pid=ImgRaw&r=0" alt="onepiece" /> </a><h3 class="card__titulo">One Piece</h3></div>',
    '<div class="controle"><a href="cardsAnimeZ/dragonBallZ.html"><img src="https://th.bing.com/th/id/OIP.jUhREZmYLBkJCe7cmSdevwHaEX?pid=ImgDet&rs=1" alt="dragonballz" /> </a><h3 class="card__titulo">Dragon Ball Z</h3></div>',
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.2b642120c35f938b62290e8961409ee7?rik=59pDd3zEEe4LjA&pid=ImgRaw&r=0" alt="pokémon" /> </a><h3 class="card__titulo">Pokémon</h3></div>',
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/OIP.KzlmCnYumPXv1CVVcz1IiAHaJv?pid=ImgDet&rs=1" alt="cavaleiros do zodíaco" /> </a><h3 class="card__titulo">Cavaleiros do Zodíaco</h3></div>',
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.c14200b48e70301615da4c387fbdf696?rik=QeVWpCjDY2ojHQ&pid=ImgRaw&r=0" alt="sword art online" /> </a><h3 class="card__titulo">Sword Art Online</h3></div>',
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/OIP.RRq_2r72YtKKIOifBkrZwgHaEK?pid=ImgDet&rs=1" /> </a><h3 class="card__titulo">One Piece</h3></div>',
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://i.pinimg.com/originals/7d/c0/95/7dc095cac032890656fce9c4d8cb7530.jpg" alt="dragonballz" /> </a><h3 class="card__titulo">One Piece</h3></div>',
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/OIP.PlDr5rpToOyowDI1HJKrQAHaFD?pid=ImgDet&rs=1" /> </a><h3 class="card__titulo">One Piece</h3></div>',
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.cf16eed362ee11bbbb37feca4ee3352c?rik=nOK5qzQTWX5V6w&riu=http%3a%2f%2fpm1.narvii.com%2f6194%2fce64bdaa236a13d3a28db0489863bd0dd37f3ef3_hq.jpg&ehk=W5dHvhIdiXv5GIkx1%2fS84BdvdGpdmEzfvfbX9mAEzMQ%3d&risl=&pid=ImgRaw&r=0" /> </a><h3 class="card__titulo">One Piece</h3></div>',
];
 t = ""

 for(i in animes){
    t += "<li>"+animes[i]+"</li>"
   
 }

 lista.innerHTML = t
 pesquisa.onkeyup = function(e) {
    t = this.value;

    r = new RegExp(t, 'g')
    for(i in animes) {
        if(!animes[i].match(r))
        lista.children[i].style.display="none"    
        else
        lista.children[i].removeAttribute("style");
            
    }
 }