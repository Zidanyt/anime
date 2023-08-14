const animes = [
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.55403484a1dc6c1736058866072683df?rik=Bp4SxPMnzArqkw&pid=ImgRaw&r=0" alt="onepiece" /> </a><h3 class="card__titulo">One Piece</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/dragonBallZ.html"><img src="https://th.bing.com/th/id/OIP.ym9T8jzpfmSmrIiMxifnGAHaE6?pid=ImgDet&rs=1" alt="dragonballz" /> </a><h3 class="card__titulo">Dragon Ball Z</h3></div>',

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
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.4f671c5de9bbbe124aa7448050d0c86b?rik=dUvMZVAqaFg2ng&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fgNAoc2g.jpg&ehk=ex80mzu%2byChOigwHSbsB2Qzo%2bh94sEdZZGbfI39%2fIVM%3d&risl=&pid=ImgRaw&r=0" alt="Death Note" /> </a><h3 class="card__titulo">Death Note</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/OIP.eac6mH5Wrv-wEWy8Olt3bwAAAA?pid=ImgDet&rs=1" alt="JoJos Bizarre Adventure" /> </a><h3 class="card__titulo">JoJo Bizarre Adventure</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.4507cbd227d4a967d8cd1b02e5f6b801?rik=uNo7YmAwJKT0og&riu=http%3a%2f%2fcm1.narvii.com%2f7349%2f4427b32821492f1982d55cec46428f745ff3bfe3_00.jpg&ehk=nci5ze9xU9wsAWo7Q0OdbFE7nPjiKKVJdyHn0npdxWQ%3d&risl=&pid=ImgRaw&r=0" alt="Seishun Buta de Hajime Kamoshida" /> </a><h3 class="card__titulo">Seishun Buta de Hajime Kamoshida</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://wallpaperaccess.com/full/3795806.jpg" alt="Spy x Family" /> </a><h3 class="card__titulo">Spy x Family</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://i.redd.it/dzztuu3jpen01.png" alt="Berserk" /> </a><h3 class="card__titulo">Berserk</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.590a0de010702c95144080e852d7df68?rik=kGsgmeAc8s2%2fuA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1951417.jpg&ehk=9bTJaOmnmVIxiKpz3KXy1mmDj0Cp1M7ggkphTs24KVQ%3d&risl=&pid=ImgRaw&r=0" alt="Ansatsu Kyoushitsu" /> </a><h3 class="card__titulo">Ansatsu Kyoushitsu</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="One Punch Man" /> </a><h3 class="card__titulo">One Punch Man</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Ahiru no sora" /> </a><h3 class="card__titulo">Ahiru no sora</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Aho girl" /> </a><h3 class="card__titulo">Aho girl</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Akagame ga kill" /> </a><h3 class="card__titulo">Akagame ga kill</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Amagi brilliant park" /> </a><h3 class="card__titulo">Amagi brilliant park</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Another" /> </a><h3 class="card__titulo">Another</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Ao no exorcist" /> </a><h3 class="card__titulo">Ao no exorcist</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Auraburu kisetsu no otome-domo yo" /> </a><h3 class="card__titulo">Auraburu kisetsu no otome-domo yo</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="B gate h kei" /> </a><h3 class="card__titulo">B gate h kei</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Baki" /> </a><h3 class="card__titulo">Baki</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Beastars" /> </a><h3 class="card__titulo">Beastars</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Blood lad" /> </a><h3 class="card__titulo">Blood lad</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Boku dake ga inai machi" /> </a><h3 class="card__titulo">Boku dake ga inai machi</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Boku no hero academia" /> </a><h3 class="card__titulo">Boku no hero academia</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Burn the witch" /> </a><h3 class="card__titulo">Burn the witch</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Charlotte" /> </a><h3 class="card__titulo">Charlotte</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Chuuniby demo  koi ga shitai" /> </a><h3 class="card__titulo">Chuuniby demo  koi ga shitai</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Darling in the franXX" /> </a><h3 class="card__titulo">Darling in the franXX</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Deadman wonderland" /> </a><h3 class="card__titulo">Deadman wonderland</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Death march kara hajimaru isekai kyousoukyoku" /> </a><h3 class="card__titulo">Death march kara hajimaru isekai kyousoukyoku</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Dororo" /> </a><h3 class="card__titulo">Dororo</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Dr. stone" /> </a><h3 class="card__titulo">Dr. stone</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Dungeon ni deai o motomeru no wa machigatteiru darou ka" /> </a><h3 class="card__titulo">Dungeon ni deai o motomeru no wa machigatteiru darou ka</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Enen no shouboutai" /> </a><h3 class="card__titulo">Enen no shouboutai</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Gleipnir" /> </a><h3 class="card__titulo">Gleipnir</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Hai to gensou no grimgar" /> </a><h3 class="card__titulo">Hai to gensou no grimgar</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="isekai maou to shoukan shoujo no dorei majustu" /> </a><h3 class="card__titulo">isekai maou to shoukan shoujo no dorei majustu</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="ishuzoku reviewers" /> </a><h3 class="card__titulo">ishuzoku reviewers</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="jaku-chara tomozaki-kun" /> </a><h3 class="card__titulo">jaku-chara tomozaki-kun</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="jiranaide, nagatoro-san" /> </a><h3 class="card__titulo">jiranaide, nagatoro-san</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Kamisama kazoku" /> </a><h3 class="card__titulo">Kamisama kazoku</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Kaijo" /> </a><h3 class="card__titulo">Kaijo</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="kenja no mago" /> </a><h3 class="card__titulo">kenja no mago</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Kobayashi-san chi no maid drangon" /> </a><h3 class="card__titulo">Kobayashi-san chi no maid drangon</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="komi-san wa, comyushou desu" /> </a><h3 class="card__titulo">komi-san wa, comyushou desu</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Kuroko no basket" /> </a><h3 class="card__titulo">Kuroko no basket</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="kyokou suiri" /> </a><h3 class="card__titulo">kyokou suiri</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Kyoukai no kanata" /> </a><h3 class="card__titulo">Kyoukai no kanata</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Log horizon" /> </a><h3 class="card__titulo">Log horizon</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Magi" /> </a><h3 class="card__titulo">Magi</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Mahouka koukou no rettousei" /> </a><h3 class="card__titulo">Mahouka koukou no rettousei</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Mahoutsukai no yome" /> </a><h3 class="card__titulo">Mahoutsukai no yome</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Masamune-kun no revenge" /> </a><h3 class="card__titulo">Masamune-kun no revenge</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="meiruko-chan" /> </a><h3 class="card__titulo">meiruko-chan</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Munou na nana" /> </a><h3 class="card__titulo">Munou na nana</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="nanatsu no taizai" /> </a><h3 class="card__titulo">nanatsu no taizai</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Naruto" /> </a><h3 class="card__titulo">Naruto</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="No game no life" /> </a><h3 class="card__titulo">No game no life</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Noragami" /> </a><h3 class="card__titulo">Noragami</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Overlord" /> </a><h3 class="card__titulo">Overlord</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Rakudai kishi no cavalry" /> </a><h3 class="card__titulo">Rakudai kishi no cavalry</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Rokudenashi majutsu koushi to akashic records" /> </a><h3 class="card__titulo">Rokudenashi majutsu koushi to akashic records</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Satsuriku no tenshi" /> </a><h3 class="card__titulo">Satsuriku no tenshi</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Shimoneta to iu gainen ga sonzai shinai taikutsu na sekai" /> </a><h3 class="card__titulo">Shimoneta to iu gainen ga sonzai shinai taikutsu na sekai</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Shingeki no bahamut" /> </a><h3 class="card__titulo">Shingeki no bahamut</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Soul eater" /> </a><h3 class="card__titulo">Soul eater</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Tate no yuusha no nariagari" /> </a><h3 class="card__titulo">Tate no yuusha no nariagari</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Tokyo ghoul" /> </a><h3 class="card__titulo">Tokyo ghoul</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Uzaki-chan wa asobitai" /> </a><h3 class="card__titulo">Uzaki-chan wa asobitai</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Watashi ga motenai no wa kangaetemo omaera ga warui" /> </a><h3 class="card__titulo">Watashi ga motenai no wa kangaetemo omaera ga warui</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Yahari ore no seishun love come wa machigatteiru" /> </a><h3 class="card__titulo">Yahari ore no seishun love come wa machigatteiru</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Yofukashi no uta" /> </a><h3 class="card__titulo">Yofukashi no uta</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Classroom of elite" /> </a><h3 class="card__titulo">Classroom of elite</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Yu-Gi-Ho" /> </a><h3 class="card__titulo">Yu-Gi-Ho</h3></div>',
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
  