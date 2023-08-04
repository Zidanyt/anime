const animes = [
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.55403484a1dc6c1736058866072683df?rik=Bp4SxPMnzArqkw&pid=ImgRaw&r=0" alt="onepiece" /> </a><h3 class="card__titulo">One Piece</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/dragonBallZ.html"><img src="https://th.bing.com/th/id/OIP.jUhREZmYLBkJCe7cmSdevwHaEX?pid=ImgDet&rs=1" alt="dragonballz" /> </a><h3 class="card__titulo">Dragon Ball Z</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/Pokemon.html"><img src="https://th.bing.com/th/id/R.2b642120c35f938b62290e8961409ee7?rik=59pDd3zEEe4LjA&pid=ImgRaw&r=0" alt="pokémon" /> </a><h3 class="card__titulo">Pokémon</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OsCavaleirosDoZodíaco.html"><img src="https://th.bing.com/th/id/OIP.KzlmCnYumPXv1CVVcz1IiAHaJv?pid=ImgDet&rs=1" alt="cavaleiros do zodíaco" /> </a><h3 class="card__titulo">Cavaleiros do Zodíaco</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/SwordArtOnline.html"><img src="https://th.bing.com/th/id/R.c14200b48e70301615da4c387fbdf696?rik=QeVWpCjDY2ojHQ&pid=ImgRaw&r=0" alt="sword art online" /> </a><h3 class="card__titulo">Sword Art Online</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/Hellsing.html"><img src="https://th.bing.com/th/id/OIP.RRq_2r72YtKKIOifBkrZwgHaEK?pid=ImgDet&rs=1" alt="Hellsing" /> </a><h3 class="card__titulo">Hellsing</h3></div>',
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://i.pinimg.com/originals/7d/c0/95/7dc095cac032890656fce9c4d8cb7530.jpg" alt="Hunter × Hunter" /> </a><h3 class="card__titulo">Hunter × Hunter</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/OIP.PlDr5rpToOyowDI1HJKrQAHaFD?pid=ImgDet&rs=1" /></a><h3 class="card__titulo">Konosuba</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.cf16eed362ee11bbbb37feca4ee3352c?rik=nOK5qzQTWX5V6w&riu=http%3a%2f%2fpm1.narvii.com%2f6194%2fce64bdaa236a13d3a28db0489863bd0dd37f3ef3_hq.jpg&ehk=W5dHvhIdiXv5GIkx1%2fS84BdvdGpdmEzfvfbX9mAEzMQ%3d&risl=&pid=ImgRaw&r=0" alt="Re:Zero kara Hajimeru Isekai Seikatsu" /> </a><h3 class="card__titulo">Re:Zero kara Hajimeru Isekai Seikatsu</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/OIP.8q15eScw-LV6WmBrEiq5rAAAAA?pid=ImgDet&rs=1" alt="Jujutsu Kaisen" /> </a><h3 class="card__titulo">Jujutsu Kaisen</h3></div>',
  
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.1ec7598a3cbdd6082e1b1b5b2c10569e?rik=8RRBPUxh1aE4bg&pid=ImgRaw&r=0" alt="Mushoku Tensei" /> </a><h3 class="card__titulo">Mushoku Tensei</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f64ea0e9418058df9d220511546978b?rik=P4ZLLwCVSH%2frKw&riu=http%3a%2f%2ffc03.deviantart.net%2ffs71%2ff%2f2013%2f333%2fe%2f2%2fshingeki_no_kyojin_wallpaper_3_by_deathb00k-d6w262n.png&ehk=mHqUCU4lGXvntLUjoZS5mHKHb80ojfQzYL2P14y3Wlw%3d&risl=&pid=ImgRaw&r=0" alt="Shingeki no Kyojin" /> </a><h3 class="card__titulo">Shingeki no Kyojin</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/OIP.209hrK1TVP2ePGa-k51nGQHaGo?pid=ImgDet&rs=1" alt="Goblin Slayer" /> </a><h3 class="card__titulo">Goblin Slayer</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://wallpapercave.com/wp/wp2492447.png" alt="Hataraku Maou-sama!!" /> </a><h3 class="card__titulo">Hataraku Maou-sama!!</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/OIP.ecK5hgbkU1-r5pjumpKS3QHaNK?pid=ImgDet&rs=1" alt="Horimiya" /> </a><h3 class="card__titulo">Horimiya</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://www.kolpaper.com/wp-content/uploads/2021/03/Chainsaw-Man-Wallpaper-2.jpg" alt="Chainsaw Man" /> </a><h3 class="card__titulo">Chainsaw Man</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://wallpapercave.com/wp/wp3968852.jpg" alt="Tensei shitara Slime Datta Ken" /> </a><h3 class="card__titulo">Tensei shitara Slime Datta Ken</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.0ec9bf187eb98c20ed8ff151680f2d24?rik=MDZ9K8NoXrPccA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fAb0GqqS.jpg&ehk=dBw2pGQ%2fIG6VE06gNR1Sbi7srfmoImRyNQnsWUyMIfQ%3d&risl=&pid=ImgRaw&r=0" alt="Fullmetal Alchemist: Brotherhood" /> </a><h3 class="card__titulo">Fullmetal Alchemist: Brotherhood</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/OIP.8bEeNxgGcDkKWEor2JDKpgAAAA?pid=ImgDet&rs=1" alt="Bleach" /> </a><h3 class="card__titulo">Bleach</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.d84be0198482f877a5fce096def56e9d?rik=Ae37uwiz15gdLg&pid=ImgRaw&r=0" alt="Kaguya-sama wa Kokurasetai" /> </a><h3 class="card__titulo">Kaguya-sama wa Kokurasetai</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.687a7ea3bf10f001eea8ea21c66895c1?rik=QFqqsLOaBgotBg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1892092.png&ehk=48jdHoCK0AAvsiJSSMGRYHnBj3%2f%2fwxx2CZvEmNCJ5xQ%3d&risl=&pid=ImgRaw&r=0" alt="Kimi no Na wa" /> </a><h3 class="card__titulo">Kimi no Na wa</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://wallpapercave.com/wp/wp1959352.png" alt="Mob Psycho" /> </a><h3 class="card__titulo">Mob Psycho</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.a67c06c36ad541bd51d01592ab46f411?rik=0vluvx78VkuC5A&pid=ImgRaw&r=0" alt="Kimetsu no Yaiba" /> </a><h3 class="card__titulo">Kimetsu no Yaiba</h3></div>',
  ];
  
  const lista = document.getElementById("lista");
  
  function populateList() {
    let t = "";
    for (let i = 0; i < animes.length; i++) {
      t += animes[i];
    }
    lista.innerHTML = t;
  }
  
  function handleSearch(e) {
    const searchString = e.target.value.toLowerCase();
    const items = lista.getElementsByClassName("controle");
  
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const text = item.textContent.toLowerCase();
      const shouldDisplay = text.includes(searchString);
      item.style.display = shouldDisplay ? "" : "none";
    }
  }
  
  populateList();
  
  const pesquisa = document.getElementById("pesquisa");
  pesquisa.addEventListener("input", handleSearch);
  