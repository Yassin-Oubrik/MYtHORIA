const boosters = [
  {
    id: 1,
    name: "Beginner Pack",
    price: 50,
    image: "images/img2.jpg",
    description: "Start your Mythoria adventure.",
    quantite: 1,
    nombreCartes: 5,
    categories: ["Heroes", "Monsters"]
  },
  {
    id: 2,
    name: "Summoning of the Legends",
    price: 100,
    image: "images/img7.jpg",
    description: "Discover legendary cards.",
    quantite: 1,
    nombreCartes: 8,
    categories: ["Heroes", "Spells"]
  },
  {
    id: 3,
    name: "Dark Summoning",
    price: 150,
    image: "images/img8.jpg",
    description: "Discover the power of darkness.",
    quantite: 1,
    nombreCartes: 10,
    categories: ["Monsters", "Spells"]
  },
  {
    id: 4,
    name: "Lucky Pack",
    price: 75,
    image: "images/img9.jpg",
    description: "Discover your surprise cards.",
    quantite: 1,
    nombreCartes: 5,
    categories: ["Heroes", "Monsters", "Minions", "Spells"]
  }
];

const cards = [
  {
    id: 1,
    name: "The Eternal Knight",
    type: "Heroes",
    rarity: "Legendary",
    power: 90,
    image: "images/oGJ4oakg_CB8n93SWmX8DhKsgtbUkJc3zgF6KFVjsouutdz-qIsEzBudz63GNy5CpNOMf957K9c1D5auqWl2ExCPQS3yJs4Y7ptZe12mvv5oGf1lL8svkwbh-YO5LXTAd1_O1tEHQPDUgXWpWmc_RT1tyzWGa_qvnQM1pTkiISdmLkb5I6c61lQbGZW8ffVo.jpg",
    description: "A fearless warrior."
  },
  {
    id: 2,
    name: "The Shadow Dragon",
    type: "Monsters",
    rarity: "Legendary",
    power: 100,
    image: "images/img10.jpg",
    description: "An ancient dragon of darkness."
  },
  {
    id: 3,
    name: "The Arcane Sorcerer",
    type: "Spells",
    rarity: "Legendary",
    power: 85,
    image: "images/img12.jpg",
    description: "A master of forgotten spells."
  },  {
    id: 4,
    name: "The Arcane Sorcerer",
    type: "Spells",
    rarity: "Legendary",
    power: 85,
    image: "images/img13.png",
    description: "A master of forgotten spells."
  }
];
const card_opening = [
    {
        id: 1,
        name: "The Eternal Knight",
        type: "Serviteurs de la Lumière",
        rarity: "Legendary",
        power: 100,
        description: "Un chevalier immortel qui protège le royaume contre les forces des ténèbres.",
        image: "images/oGJ4oakg_CB8n93SWmX8DhKsgtbUkJc3zgF6KFVjsouutdz-qIsEzBudz63GNy5CpNOMf957K9c1D5auqWl2ExCPQS3yJs4Y7ptZe12mvv5oGf1lL8svkwbh-YO5LXTAd1_O1tEHQPDUgXWpWmc_RT1tyzWGa_qvnQM1pTkiISdmLkb5I6c61lQbGZW8ffVo.jpg"
    },
    {
        id: 2,
        name: "The Shadow Dragon",
        type: "Serviteurs des Ténèbres",
        rarity: "Legendary",
        power: 95,
        description: "Un dragon maléfique qui dévore la lumière et répand les ténèbres sur le monde.",
        image: "images/img10.jpg"
    },
    {
        id: 3,
        name: "The Arcane Sorcerer",
        type: "Serviteurs de la Lumière",
        rarity: "Legendary",
        power: 85,
        description: "Un puissant sorcier qui maîtrise les secrets de la magie ancienne.",
        image: "images/img12.jpg"
    },
    {
        id: 4,
        name: "The Crystal Mage",
        type: "Serviteurs de la Lumière",
        rarity: "Epic",
        power: 78,
        description: "Une mage qui canalise l'énergie des cristaux pour lancer des sorts puissants.",
        image: "images/img13.png"
    },
    {
        id: 5,
        name: "The Flame Guardian",
        type: "Minions",
        rarity: "Rare",
        power: 65,
        description: "Un gardien de feu qui défend ses alliés grâce à ses flammes ardentes.",
        image: "images/img14.jpg"
    },
    {
        id: 6,
        name: "The Cursed Beast",
        type: "Serviteurs des Ténèbres",
        rarity: "Epic",
        power: 82,
        description: "Une créature maudite dont la rage augmente à chaque combat.",
        image: "images/img15.png"
    },
    {
        id: 7,
        name: "The Moon Priestess",
        type: "Serviteurs de la Lumière",
        rarity: "Epic",
        power: 80,
        description: "Une prêtresse mystique qui tire ses pouvoirs de la lumière de la lune.",
        image: "images/img16.jpg"
    },
    {
        id: 8,
        name: "The Void Serpent",
        type: "Serviteurs des Ténèbres",
        rarity: "Legendary",
        power: 98,
        description: "Un serpent colossal venu du néant qui engloutit tout sur son passage.",
        image: "images/img17.jpg"
    },
    {
        id: 9,
        name: "The Healing Light",
        type: "Spells",
        rarity: "Common",
        power: 30,
        description: "Un sort de guérison qui restaure une partie des points de vie d'un allié.",
        image: "images/img18.jpg"
    },
    {
        id: 10,
        name: "The Iron Defender",
        type: "Minions",
        rarity: "Common",
        power: 40,
        description: "Un défenseur robuste en armure de fer qui protège les autres serviteurs.",
        image: "images/img19.jpg"
    },
    {
        id: 11,
        name: "The Frost Wyrm",
        type: "Serviteurs des Ténèbres",
        rarity: "Rare",
        power: 68,
        description: "Un wyrm glacé capable de geler ses ennemis grâce à son souffle glacial.",
        image: "images/img20.png"
    },
    {
        id: 12,
        name: "The Thunder Lord",
        type: "Serviteurs de la Lumière",
        rarity: "Legendary",
        power: 95,
        description: "Un seigneur de la foudre qui déchaîne des éclairs dévastateurs contre ses ennemis.",
        image: "images/img21.jpg"
    },
    {
        id: 13,
        name: "The Dark Ritual",
        type: "Spells",
        rarity: "Rare",
        power: 60,
        description: "Un rituel interdit qui libère une énergie sombre pour affaiblir les adversaires.",
        image: "images/img22.jpg"
    },
    {
        id: 14,
        name: "The Forest Guardian",
        type: "Minions",
        rarity: "Common",
        power: 45,
        description: "Un protecteur de la forêt qui utilise la force de la nature pour défendre ses alliés.",
        image: "images/img23.jpg"
    },
    {
        id: 15,
        name: "The Abyssal Kraken",
        type: "Serviteurs des Ténèbres",
        rarity: "Epic",
        power: 88,
        description: "Un monstre marin gigantesque qui entraîne ses ennemis dans les profondeurs abyssales.",
        image: "images/img24.jpg"
    },
    {
        id: 16,
        name: "The Golden Phoenix",
        type: "Serviteurs de la Lumière",
        rarity: "Legendary",
        power: 97,
        description: "Un oiseau légendaire qui renaît de ses cendres et illumine le champ de bataille.",
        image: "images/img25.jpg"
    },
    {
        id: 17,
        name: "The Arcane Shield",
        type: "Spells",
        rarity: "Common",
        power: 35,
        description: "Un sort protecteur qui crée une barrière magique autour d'un allié.",
        image: "images/img29.jpg"
    },
    {
        id: 18,
        name: "The Silent Assassin",
        type: "Serviteurs des Ténèbres",
        rarity: "Rare",
        power: 72,
        description: "Un assassin furtif qui frappe ses cibles avant même qu'elles ne le remarquent.",
        image: "images/img26.jpg"
    },
    {
        id: 19,
        name: "The Bone Reaper",
        type: "Serviteurs des Ténèbres",
        rarity: "Epic",
        power: 86,
        description: "Un faucheur macabre qui manipule les os et répand la terreur parmi ses ennemis.",
        image: "images/img27.jpg"
    },
    {
        id: 20,
        name: "The Starfall",
        type: "Spells",
        rarity: "Rare",
        power: 70,
        description: "Un sort céleste qui fait tomber une pluie d'étoiles sur les adversaires.",
        image: "images/img30.png"
    }
];