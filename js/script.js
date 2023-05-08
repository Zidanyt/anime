animes = [
    '<div><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.55403484a1dc6c1736058866072683df?rik=Bp4SxPMnzArqkw&pid=ImgRaw&r=0" alt="onepiece" /> </a><h3 class="card__titulo">One Piece</h3></div>',
    '<div><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/OIP.jUhREZmYLBkJCe7cmSdevwHaEX?pid=ImgDet&rs=1" alt="dragonballz" /> </a><h3 class="card__titulo">One Piece</h3></div>',
    '<div><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/OIP.jUhREZmYLBkJCe7cmSdevwHaEX?pid=ImgDet&rs=1" alt="dragonballz" /> </a><h3 class="card__titulo">One Piece</h3></div>',
    '<div><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/OIP.jUhREZmYLBkJCe7cmSdevwHaEX?pid=ImgDet&rs=1" alt="dragonballz" /> </a><h3 class="card__titulo">One Piece</h3></div>',
    '<div><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/OIP.jUhREZmYLBkJCe7cmSdevwHaEX?pid=ImgDet&rs=1" alt="dragonballz" /> </a><h3 class="card__titulo">One Piece</h3></div>',
    '<div><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/OIP.jUhREZmYLBkJCe7cmSdevwHaEX?pid=ImgDet&rs=1" alt="dragonballz" /> </a><h3 class="card__titulo">One Piece</h3></div>',
    '<div><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/OIP.jUhREZmYLBkJCe7cmSdevwHaEX?pid=ImgDet&rs=1" alt="dragonballz" /> </a><h3 class="card__titulo">One Piece</h3></div>',
    '<div><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/OIP.jUhREZmYLBkJCe7cmSdevwHaEX?pid=ImgDet&rs=1" alt="dragonballz" /> </a><h3 class="card__titulo">One Piece</h3></div>',
    '<div><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/OIP.jUhREZmYLBkJCe7cmSdevwHaEX?pid=ImgDet&rs=1" alt="dragonballz" /> </a><h3 class="card__titulo">One Piece</h3></div>',
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