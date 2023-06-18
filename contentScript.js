function replaceTextOnPage(oldStrings, to) {
    const elements = document.querySelectorAll('*');
  
    elements.forEach((element) => {
      if (element.childNodes.length === 1 && element.childNodes[0].nodeType === 3) {
        // Replace text in text nodes
        let textContent = element.textContent;
        oldStrings.forEach((oldString) => {
          const regex = new RegExp(oldString, 'gi');
          textContent = textContent.replace(regex, to);
        });
        element.textContent = textContent;
      } else {
        // Replace text in attribute values
        const attributes = element.attributes;
        for (let i = 0; i < attributes.length; i++) {
          const attr = attributes[i];
          oldStrings.forEach((oldString) => {
            const regex = new RegExp(oldString, 'gi');
            if (attr.value.match(regex)) {
              attr.value = attr.value.replace(regex, to);
            }
          });
        }
      }
    });
  }

  let data = [
    'Minecraft',
    'Fortnite',
    'Grand Theft Auto V',
    'PlayerUnknown\'s Battlegrounds',
    'Apex Legends',
    'League of Legends',
    'Counter-Strike: Global Offensive',
    'Call of Duty: Warzone',
    'Valorant',
    'Among Us',
    'The Legend of Zelda: Breath of the Wild',
    'Overwatch',
    'FIFA 21',
    'Rocket League',
    'Madden NFL 21',
    'Destiny 2',
    'Assassin\'s Creed Valhalla',
    'Cyberpunk 2077',
    'Super Smash Bros. Ultimate',
    'Red Dead Redemption 2',
    'Monster Hunter: Rise',
    'Final Fantasy VII Remake',
    'The Witcher 3: Wild Hunt',
    'Among Us',
    'Genshin Impact',
    'The Last of Us Part II',
    'Hades',
    'Animal Crossing: New Horizons',
    'Sekiro: Shadows Die Twice',
    'Marvel\'s Spider-Man: Miles Morales',
    'Resident Evil Village',
    'Ghost of Tsushima',
    'Doom Eternal',
    'Persona 5 Royal',
    'Halo Infinite',
    'Death Stranding',
    'Nier: Automata',
    'Control',
    'Star Wars Jedi: Fallen Order',
    'Demon\'s Souls',
    'Mass Effect Legendary Edition',
    'Assassin\'s Creed Odyssey',
    'Rainbow Six Siege',
    'God of War',
    'World of Warcraft',
    'The Elder Scrolls V: Skyrim',
    'Mortal Kombat 11',
    'Tom Clancy\'s The Division 2',
    'Fortnite',
    'Fallout 4',
    'Sea of Thieves',
    'Dota 2',
    'Terraria',
    'Final Fantasy XIV',
    'Call of Duty: Black Ops Cold War',
    'Borderlands 3',
    'Apex Legends',
    'Warframe',
    'Valorant',
    'Among Us',
    'Mortal Kombat X',
    'Pokémon Sword and Shield',
    'Rainbow Six Siege',
    'League of Legends',
    'Minecraft Dungeons',
    'The Sims 4',
    'The Legend of Zelda: Ocarina of Time',
    'Final Fantasy XV',
    'Diablo III',
    'World of Tanks',
    'StarCraft II',
    'Need for Speed Heat',
    'Dead by Daylight',
    'Tom Clancy\'s Rainbow Six: Siege',
    'Fall Guys: Ultimate Knockout',
    'NieR Replicant ver.1.22474487139...',
    'Battlefield V',
    'Assassin\'s Creed Origins',
    'Mafia: Definitive Edition',
    'Crash Bandicoot 4: It\'s About Time',
    'Rust',
    'ARK: Survival Evolved',
    'The Sims 3',
    'Persona 5 Strikers',
    'Ghostrunner',
    'Little Nightmares II',
    'Detroit: Become Human',
    'No Man\'s Sky',
    'Far Cry 5',
    'Tom Clancy\'s Ghost Recon Breakpoint',
    'Dead Space',
    'Resident Evil 2 Remake',
    'Outriders',
    'Biomutant',
    'It Takes Two',
    'Star Wars Jedi: Fallen Order',
    'Ratchet & Clank: Rift Apart',
    'Cyber Shadow',
    'Scarlet Nexus',
    'Returnal',
    'Back 4 Blood',
    'Far Cry 6',
    'Battlefield 2042',
    'Elden Ring',
    'Hogwarts Legacy',
    'Horizon Forbidden West',
    'God of War: Ragnarok',
    'Resident Evil Village',
    'Final Fantasy XVI',
    'The Elder Scrolls VI',
    'Starfield',
    'Metroid Prime 4',
    'Bayonetta 3',
    'Halo Infinite',
    'Gotham Knights',
    'Fable',
    'Suicide Squad: Kill the Justice League',
    'GhostWire: Tokyo',
    'Project 007',
    'Baldur\'s Gate III',
    'Elden Ring',
    'Metroid Dread',
    'Far Cry 6',
    'Horizon Forbidden West',
    'God of War: Ragnarok',
    'Starfield',
    'The Elder Scrolls VI',
    'Final Fantasy XVI',
    'Resident Evil 4 Remake',
    'Marvel\'s Spider-Man 2',
    'Gran Turismo 7',
    'The Legend of Zelda: Breath of the Wild 2',
    'Fable',
    'Hellblade II: Senua\'s Saga',
    'Suicide Squad: Kill the Justice League',
    'GhostWire: Tokyo',
    'Project 007',
    'Bayonetta 3',
    'Gotham Knights',
    'Elden Ring',
    'Final Fantasy XVI',
    'Metroid Prime 4',
    'Horizon Forbidden West',
    'The Elder Scrolls VI',
    'Starfield',
    'Far Cry 6',
    'God of War: Ragnarok',
    'Resident Evil 4 Remake',
    'Marvel\'s Spider-Man 2'
  ];

// Listen to changes in the extension storage
chrome.storage.local.get(['titleChanger'], function(result) {
    if (result['titleChanger']) {
        replaceTextOnPage(data, 'Spellbreak'); // replace 'old text' and 'new text' with your actual texts
    }
});
