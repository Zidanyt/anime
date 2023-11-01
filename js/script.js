const animes = [
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.55403484a1dc6c1736058866072683df?rik=Bp4SxPMnzArqkw&pid=ImgRaw&r=0" alt="onepiece" /> </a><h3 class="card__titulo">One Piece</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/dragonBallZ.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.ym9T8jzpfmSmrIiMxifnGAHaE6?pid=ImgDet&rs=1" alt="dragonballz" /> </a><h3 class="card__titulo">Dragon Ball Z</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/Pokemon.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.2b642120c35f938b62290e8961409ee7?rik=59pDd3zEEe4LjA&pid=ImgRaw&r=0" alt="pokémon" /> </a><h3 class="card__titulo">Pokémon</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OsCavaleirosDoZodíaco.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.KzlmCnYumPXv1CVVcz1IiAHaJv?pid=ImgDet&rs=1" alt="cavaleiros do zodíaco" /> </a><h3 class="card__titulo">Cavaleiros do Zodíaco</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/SwordArtOnline.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.c14200b48e70301615da4c387fbdf696?rik=QeVWpCjDY2ojHQ&pid=ImgRaw&r=0" alt="sword art online" /> </a><h3 class="card__titulo">Sword Art Online</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/Hellsing.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.RRq_2r72YtKKIOifBkrZwgHaEK?pid=ImgDet&rs=1" alt="Hellsing" /> </a><h3 class="card__titulo">Hellsing</h3></div>',
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://i.pinimg.com/originals/7d/c0/95/7dc095cac032890656fce9c4d8cb7530.jpg" alt="Hunter × Hunter" /> </a><h3 class="card__titulo">Hunter × Hunter</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.PlDr5rpToOyowDI1HJKrQAHaFD?pid=ImgDet&rs=1" /></a><h3 class="card__titulo">Konosuba</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.cf16eed362ee11bbbb37feca4ee3352c?rik=nOK5qzQTWX5V6w&riu=http%3a%2f%2fpm1.narvii.com%2f6194%2fce64bdaa236a13d3a28db0489863bd0dd37f3ef3_hq.jpg&ehk=W5dHvhIdiXv5GIkx1%2fS84BdvdGpdmEzfvfbX9mAEzMQ%3d&risl=&pid=ImgRaw&r=0" alt="Re:Zero kara Hajimeru Isekai Seikatsu" /> </a><h3 class="card__titulo">Re:Zero kara Hajimeru Isekai Seikatsu</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.8q15eScw-LV6WmBrEiq5rAAAAA?pid=ImgDet&rs=1" alt="Jujutsu Kaisen" /> </a><h3 class="card__titulo">Jujutsu Kaisen</h3></div>',
  
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.1ec7598a3cbdd6082e1b1b5b2c10569e?rik=8RRBPUxh1aE4bg&pid=ImgRaw&r=0" alt="Mushoku Tensei" /> </a><h3 class="card__titulo">Mushoku Tensei</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.8f64ea0e9418058df9d220511546978b?rik=P4ZLLwCVSH%2frKw&riu=http%3a%2f%2ffc03.deviantart.net%2ffs71%2ff%2f2013%2f333%2fe%2f2%2fshingeki_no_kyojin_wallpaper_3_by_deathb00k-d6w262n.png&ehk=mHqUCU4lGXvntLUjoZS5mHKHb80ojfQzYL2P14y3Wlw%3d&risl=&pid=ImgRaw&r=0" alt="Shingeki no Kyojin" /> </a><h3 class="card__titulo">Shingeki no Kyojin</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.209hrK1TVP2ePGa-k51nGQHaGo?pid=ImgDet&rs=1" alt="Goblin Slayer" /> </a><h3 class="card__titulo">Goblin Slayer</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://wallpapercave.com/wp/wp2492447.png" alt="Hataraku Maou-sama!!" /> </a><h3 class="card__titulo">Hataraku Maou-sama!!</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.ecK5hgbkU1-r5pjumpKS3QHaNK?pid=ImgDet&rs=1" alt="Horimiya" /> </a><h3 class="card__titulo">Horimiya</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://www.kolpaper.com/wp-content/uploads/2021/03/Chainsaw-Man-Wallpaper-2.jpg" alt="Chainsaw Man" /> </a><h3 class="card__titulo">Chainsaw Man</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://wallpapercave.com/wp/wp3968852.jpg" alt="Tensei shitara Slime Datta Ken" /> </a><h3 class="card__titulo">Tensei shitara Slime Datta Ken</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.0ec9bf187eb98c20ed8ff151680f2d24?rik=MDZ9K8NoXrPccA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fAb0GqqS.jpg&ehk=dBw2pGQ%2fIG6VE06gNR1Sbi7srfmoImRyNQnsWUyMIfQ%3d&risl=&pid=ImgRaw&r=0" alt="Fullmetal Alchemist: Brotherhood" /> </a><h3 class="card__titulo">Fullmetal Alchemist: Brotherhood</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.8bEeNxgGcDkKWEor2JDKpgAAAA?pid=ImgDet&rs=1" alt="Bleach" /> </a><h3 class="card__titulo">Bleach</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.d84be0198482f877a5fce096def56e9d?rik=Ae37uwiz15gdLg&pid=ImgRaw&r=0" alt="Kaguya-sama wa Kokurasetai" /> </a><h3 class="card__titulo">Kaguya-sama wa Kokurasetai</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.687a7ea3bf10f001eea8ea21c66895c1?rik=QFqqsLOaBgotBg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1892092.png&ehk=48jdHoCK0AAvsiJSSMGRYHnBj3%2f%2fwxx2CZvEmNCJ5xQ%3d&risl=&pid=ImgRaw&r=0" alt="Kimi no Na wa" /> </a><h3 class="card__titulo">Kimi no Na wa</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://wallpapercave.com/wp/wp1959352.png" alt="Mob Psycho" /> </a><h3 class="card__titulo">Mob Psycho</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.a67c06c36ad541bd51d01592ab46f411?rik=0vluvx78VkuC5A&pid=ImgRaw&r=0" alt="Kimetsu no Yaiba" /> </a><h3 class="card__titulo">Kimetsu no Yaiba</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.4f671c5de9bbbe124aa7448050d0c86b?rik=dUvMZVAqaFg2ng&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fgNAoc2g.jpg&ehk=ex80mzu%2byChOigwHSbsB2Qzo%2bh94sEdZZGbfI39%2fIVM%3d&risl=&pid=ImgRaw&r=0" alt="Death Note" /> </a><h3 class="card__titulo">Death Note</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.eac6mH5Wrv-wEWy8Olt3bwAAAA?pid=ImgDet&rs=1" alt="JoJos Bizarre Adventure" /> </a><h3 class="card__titulo">JoJo Bizarre Adventure</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.4507cbd227d4a967d8cd1b02e5f6b801?rik=uNo7YmAwJKT0og&riu=http%3a%2f%2fcm1.narvii.com%2f7349%2f4427b32821492f1982d55cec46428f745ff3bfe3_00.jpg&ehk=nci5ze9xU9wsAWo7Q0OdbFE7nPjiKKVJdyHn0npdxWQ%3d&risl=&pid=ImgRaw&r=0" alt="Seishun Buta de Hajime Kamoshida" /> </a><h3 class="card__titulo">Seishun Buta de Hajime Kamoshida</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://wallpaperaccess.com/full/3795806.jpg" alt="Spy x Family" /> </a><h3 class="card__titulo">Spy x Family</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://i.redd.it/dzztuu3jpen01.png" alt="Berserk" /> </a><h3 class="card__titulo">Berserk</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.590a0de010702c95144080e852d7df68?rik=kGsgmeAc8s2%2fuA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1951417.jpg&ehk=9bTJaOmnmVIxiKpz3KXy1mmDj0Cp1M7ggkphTs24KVQ%3d&risl=&pid=ImgRaw&r=0" alt="Ansatsu Kyoushitsu" /> </a><h3 class="card__titulo">Ansatsu Kyoushitsu</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="One Punch Man" /> </a><h3 class="card__titulo">One Punch Man</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://wallpapercave.com/wp/wp4858758.png" alt="Ahiru no sora" /> </a><h3 class="card__titulo">Ahiru no sora</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.t4a4Ls2fc9bDsyeZo1kUDQAAAA?pid=ImgDet&rs=1" alt="Aho girl" /> </a><h3 class="card__titulo">Aho girl</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://wallpapercave.com/wp/wp5286943.jpg" alt="Akagame ga kill" /> </a><h3 class="card__titulo">Akagame ga kill</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://wallpapercave.com/wp/wp9314161.jpg" alt="Amagi brilliant park" /> </a><h3 class="card__titulo">Amagi brilliant park</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.tMJaJjWPs1P1XfHRPDgzQAAAAA?pid=ImgDet&rs=1" alt="Another" /> </a><h3 class="card__titulo">Another</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.AD_n83LuzG4HZcfbY5_HnwHaKl?pid=ImgDet&rs=1" alt="Ao no exorcist" /> </a><h3 class="card__titulo">Ao no exorcist</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.da6be7548f9368a233da48b594b89cde?rik=Ae%2fFVvrRmEjfdQ&pid=ImgRaw&r=0" alt="Auraburu kisetsu no otome-domo yo" /> </a><h3 class="card__titulo">Auraburu kisetsu no otome-domo yo</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.JMwd9OSg8os0BqySmFXeCgHaKS?pid=ImgDet&rs=1" alt="B gate h kei" /> </a><h3 class="card__titulo">B gate h kei</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.JkOmE2iL0PuocDKM1X_zoQHaL1?pid=ImgDet&w=728&h=1164&rs=1" alt="Baki" /> </a><h3 class="card__titulo">Baki</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://wallpapercave.com/wp/wp5473809.jpg" alt="Beastars" /> </a><h3 class="card__titulo">Beastars</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.pxxhn8ML2gUmAXK84jEMvwHaLH?pid=ImgDet&rs=1" alt="Blood lad" /> </a><h3 class="card__titulo">Blood lad</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://pm1.narvii.com/6548/17657443c80265fc725c9a119c186bd4290b0a82_hq.jpg" alt="Boku dake ga inai machi" /> </a><h3 class="card__titulo">Boku dake ga inai machi</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.lgn2SHmIjQ_CWS5fpWfyuwHaKd?pid=ImgDet&rs=1" alt="Boku no hero academia" /> </a><h3 class="card__titulo">Boku no hero academia</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://wallpapercave.com/wp/wp7669379.jpg" alt="Burn the witch" /> </a><h3 class="card__titulo">Burn the witch</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.KqdEseo9Xh_RGp93sbcRuwHaJj?pid=ImgDet&rs=1" alt="Charlotte" /> </a><h3 class="card__titulo">Charlotte</h3></div>',
    
    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.d0f2494b49871cb154cb8510aa58eaa0?rik=9rJzYSDMl5%2b9Xg&pid=ImgRaw&r=0" alt="Chuuniby demo koi ga shitai" /> </a><h3 class="card__titulo">Chuuniby demo koi ga shitai</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.cc0edbd6ebbcf6c021a82e3965d6362c?rik=zxwErB1B%2bzCWNA&pid=ImgRaw&r=0" alt="Darling in the franXX" /> </a><h3 class="card__titulo">Darling in the franXX</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://wallpapercave.com/wp/bHSGX1w.jpg" alt="Deadman wonderland" /> </a><h3 class="card__titulo">Deadman wonderland</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.up7M2nfm-lJ6jiNZF8yNdAHaKJ?pid=ImgDet&rs=1" alt="Death march kara hajimaru isekai kyousoukyoku" /> </a><h3 class="card__titulo">Death march kara hajimaru isekai kyousoukyoku</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://images8.alphacoders.com/100/thumb-1920-1004865.jpg" alt="Dororo" /> </a><h3 class="card__titulo">Dororo</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://wallpapercave.com/wp/wp8676050.jpg" alt="Dr. stone" /> </a><h3 class="card__titulo">Dr. stone</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://pm1.narvii.com/5714/c4d1fcacffa1a8d3aefa6be97030705648a3e573_hq.jpg" alt="Dungeon ni deai o motomeru no wa machigatteiru darou ka" /> </a><h3 class="card__titulo">Dungeon ni deai o motomeru no wa machigatteiru darou ka</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.AyzZcMTlMq-Kune4sAsVfwHaKn?pid=ImgDet&rs=1" alt="Enen no shouboutai" /> </a><h3 class="card__titulo">Enen no shouboutai</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.190d4b4a797aaa38ccbe254d29801d56?rik=UF3KDyRqsN3gNw&pid=ImgRaw&r=0" alt="Gleipnir" /> </a><h3 class="card__titulo">Gleipnir</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.ff218507162bbfa676e02830ef034a8a?rik=76gY0v830aTRag&pid=ImgRaw&r=0" alt="Hai to gensou no grimgar" /> </a><h3 class="card__titulo">Hai to gensou no grimgar</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.3cba2d30694d6ef046cb9022cbc52f3d?rik=HpkyKbBQHPgwHQ&pid=ImgRaw&r=0" alt="isekai maou to shoukan shoujo no dorei majustu" /> </a><h3 class="card__titulo">isekai maou to shoukan shoujo no dorei majustu</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://wallpaperaccess.com/full/2370584.png" alt="ishuzoku reviewers" /> </a><h3 class="card__titulo">ishuzoku reviewers</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP._AJ7mP5DVZcitiAw8xRbAQHaKi?pid=ImgDet&rs=1" alt="jaku-chara tomozaki-kun" /> </a><h3 class="card__titulo">jaku-chara tomozaki-kun</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.LKC5eJVuPiA_45tdwkNBPAHaKd?pid=ImgDet&rs=1" alt="jiranaide, nagatoro-san" /> </a><h3 class="card__titulo">jiranaide, nagatoro-san</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.y_nGZ4IZLIG-NCQ_XXcphgHaNK?pid=ImgDet&rs=1" alt="Kaijo" /> </a><h3 class="card__titulo">Kaijo</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://i.pinimg.com/736x/e9/bb/de/e9bbde1c8d26aa609e92651947cdf4e9.jpg" alt="kenja no mago" /> </a><h3 class="card__titulo">kenja no mago</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.94798af5bafc71122a29c981598ab983?rik=a56hbRI0SM86MA&pid=ImgRaw&r=0" alt="Kobayashi-san chi no maid drangon" /> </a><h3 class="card__titulo">Kobayashi-san chi no maid drangon</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.fGDBOB_-OchT3zlTGK6N6wHaLF?pid=ImgDet&rs=1" alt="komi-san wa, comyushou desu" /> </a><h3 class="card__titulo">komi-san wa, comyushou desu</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://i.pinimg.com/736x/88/30/43/883043285aa6b0854968de8c1b03c38e.jpg" alt="Kuroko no basket" /> </a><h3 class="card__titulo">Kuroko no basket</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://i.pinimg.com/originals/20/82/bd/2082bdb5cb9d00f48627228e26c40f3b.jpg" alt="kyokou suiri" /> </a><h3 class="card__titulo">kyokou suiri</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.5MROYpE2delzU_hiTC4vCgHaNK?pid=ImgDet&rs=1" alt="Kyoukai no kanata" /> </a><h3 class="card__titulo">Kyoukai no kanata</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://i0.wp.com/www.otakutale.com/wp-content/uploads/2014/09/Log-Horizon-Season-2-Visual-02.jpg?resize=661%2C950" alt="Log horizon" /> </a><h3 class="card__titulo">Log horizon</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.gbeJyjfJFWe9fh0237XFOAHaKU?pid=ImgDet&w=590&h=822&rs=1" alt="Magi" /> </a><h3 class="card__titulo">Magi</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.3OZMGtRg1T4DNlS6zSlVMAHaKd?pid=ImgDet&rs=1" alt="Mahouka koukou no rettousei" /> </a><h3 class="card__titulo">Mahouka koukou no rettousei</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.sgRFnf3nK_1mSR9XmrV6NgHaKf?pid=ImgDet&rs=1" alt="Mahoutsukai no yome" /> </a><h3 class="card__titulo">Mahoutsukai no yome</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://i.pinimg.com/736x/e2/c5/1f/e2c51f3a2b77484c32bc1bf215915d1d.jpg" alt="Masamune-kun no revenge" /> </a><h3 class="card__titulo">Masamune-kun no revenge</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.7e750dae80e043cfc1c97f0e2fa7cf08?rik=v3tS%2bL5s7plUHg&pid=ImgRaw&r=0" alt="meiruko-chan" /> </a><h3 class="card__titulo">meiruko-chan</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.fSSj6mOmURmP8ZR7y6eh7gHaJX?pid=ImgDet&rs=1" alt="Munou na nana" /> </a><h3 class="card__titulo">Munou na nana</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://wallpapercave.com/wp/wp2414271.jpg" alt="nanatsu no taizai" /> </a><h3 class="card__titulo">nanatsu no taizai</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.cca723bebe39c69a9544e5d0a303e477?rik=le3Q%2f8Vd5kEDZQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fNaruto-mobile-wallpaper-hd.jpg&ehk=ZHSENmwsKTnYFDCYKJy0e3gFLwXa4iGNcMo2Ol18qUY%3d&risl=&pid=ImgRaw&r=0" alt="Naruto" /> </a><h3 class="card__titulo">Naruto</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://wallpapercave.com/wp/wp5993603.jpg" alt="No game no life" /> </a><h3 class="card__titulo">No game no life</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.13da87dd33be7644eab83425fcb7a82a?rik=MNiytt32W5kT6A&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1811723.jpg&ehk=2nUce05P1KHt4qhxXITOXUPFmcNT4jW8VjmquY4OLos%3d&risl=&pid=ImgRaw&r=0" alt="Noragami" /> </a><h3 class="card__titulo">Noragami</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.f74a0b1b093b9ca7db715430fb339718?rik=I5%2b2UF9dT%2bdATQ&pid=ImgRaw&r=0" alt="Overlord" /> </a><h3 class="card__titulo">Overlord</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.02b0a8d2f6e7b722e6775e8b0315e49b?rik=Yp2j%2b1bwZaRUBg&pid=ImgRaw&r=0" alt="Rakudai kishi no cavalry" /> </a><h3 class="card__titulo">Rakudai kishi no cavalry</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://i.pinimg.com/originals/45/e9/8b/45e98b2b05854643942d54ebc9759d76.png" alt="Rokudenashi majutsu koushi to akashic records" /> </a><h3 class="card__titulo">Rokudenashi majutsu koushi to akashic records</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://i.pinimg.com/originals/e7/91/25/e7912564104f01588b8a666b5ecab828.jpg" alt="Satsuriku no tenshi" /> </a><h3 class="card__titulo">Satsuriku no tenshi</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://wallpapercave.com/wp/wp9079295.jpg" alt="Shimoneta to iu gainen ga sonzai shinai taikutsu na sekai" /> </a><h3 class="card__titulo">Shimoneta to iu gainen ga sonzai shinai taikutsu na sekai</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.u4aEzrJNndP_acfMKuXhkQHaKB?pid=ImgDet&rs=1" alt="Shingeki no bahamut" /> </a><h3 class="card__titulo">Shingeki no bahamut</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.e247b83acbaeb470b8b870c2834ebe99?rik=6viX%2fh%2fi0SHKQw&riu=http%3a%2f%2fs3.narvii.com%2fimage%2f6tropeutv724bujutaghju675osrkpri_00.jpg&ehk=PEYS1FXLm8wPmb5Ikx%2fsuR80tB2EPjyoH5NQjSb%2bIV0%3d&risl=&pid=ImgRaw&r=0" alt="Soul eater" /> </a><h3 class="card__titulo">Soul eater</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.4MNOUq3vf3Hr4KZvH7BR6wAAAA?pid=ImgDet&rs=1" alt="Tate no yuusha no nariagari" /> </a><h3 class="card__titulo">Tate no yuusha no nariagari</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://i.pinimg.com/736x/6a/ee/0a/6aee0a9d13e46324299ca657c0f6d0ec.jpg" alt="Tokyo ghoul" /> </a><h3 class="card__titulo">Tokyo ghoul</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.1bed54b645d7d246121035d1bf7f080f?rik=CttJ88Z2y%2fA1DA&pid=ImgRaw&r=0" alt="Uzaki-chan wa asobitai" /> </a><h3 class="card__titulo">Uzaki-chan wa asobitai</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/R.a418fff7ae86fdbaca7dee9a5af21cb3?rik=T5QkrDUzVq3AiQ&pid=ImgRaw&r=0" alt="Watashi ga motenai no wa kangaetemo omaera ga warui" /> </a><h3 class="card__titulo">Watashi ga motenai no wa kangaetemo omaera ga warui</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://s1.zerochan.net/Yahari.Ore.no.Seishun.Love.Come.wa.Machigatteiru.600.1493652.jpg" alt="Yahari ore no seishun love come wa machigatteiru" /> </a><h3 class="card__titulo">Yahari ore no seishun love come wa machigatteiru</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://i.pinimg.com/236x/f7/f7/63/f7f76385413d50b88d310967977df02f.jpg?nii=thttps://th.bing.com/th/id/R.8f2eb673c6f8f871780cb3f7eff98fa8?rik=%2b%2frM%2bQeMbMsO0A&pid=ImgRaw&r=0" alt="Yofukashi no uta" /> </a><h3 class="card__titulo">Yofukashi no uta</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://i.pinimg.com/474x/07/eb/1b/07eb1b63b759d0ce718ccbed8e6b10e2.jpg" alt="Classroom of elite" /> </a><h3 class="card__titulo">Classroom of elite</h3></div>',

    '<div class="controle"><a href="cardsAnimeZ/OnePiece.html"><img class="teste" loading="lazy" src="https://th.bing.com/th/id/OIP.le6Kf0GtJOYcgUowYJ5dLAHaEo?pid=ImgDet&rs=1" alt="Yu-Gi-Ho" /> </a><h3 class="card__titulo">Yu-Gi-Ho</h3></div>',
  ];
  
  const lista = document.getElementById("lista");

  function populateList(animes) {
      let t = "";
      for (let i = 0; i < animes.length; i++) {
          t += `<li class="controle">${animes[i]}</li>`;
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
  
  populateList(animes);
  
  const pesquisa = document.getElementById("pesquisa");
  pesquisa.addEventListener("input", handleSearch);
  
  

  ScrollReveal({
    reset: true,
    distance: '30px',
    duration: 2000,
    delay: 100
})

ScrollReveal().reveal('.teste', {
    delay: 100,
    // interval: 100
})