const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    // "Popcorn",
    // "Gemwoman",
    // "Bolt",
    // "Antwoman",
    // "Mask",
    // "Tiger",
    // "Captain",
    // "Catwoman",
    // "Fish",
    // "Hulk",
    // "Ninja",
    // "Black Cat",
    // "Volverine",
    // "Thor",
    // "Slayer",
    // "Vader",
    // "Slingo"
];

// Player Class
class Player {
    constructor(id, name, type) {
        // Create member variables and assign values
        this.id = id;
        this.name = name;
        this.type = type;
        this.image = "";
        this.strength = getRandomStrength();

    }

    // getting random strength
    getRandomStrength = () => {
        return Math.ceil(Math.random() * 101);
    }

    // Create a player for displaying
    view = () => {
        // Accumulate HTML template
        // Type your code here
        let player = document.createElement('div');
        player.classList.add('player');
        player.setAttribute('data-id', this.id);
        let image = document.createElement('img');
        image.setAttribute('src', this.image);
        let name = document.createElement('div');
        name.textContent = this.name;
        let strength = document.createElement('div');
        strength.textContent = this.strength;
        strength.className = 'strength';
        player.append(image, name, strength);
        return player;

    }
}



// Superwar Class
class Superwar {
    constructor(players) {
        // Create a field players 
        // Use Map method to loop through players argument and create new players
        // Type your code here
        let newPlayers = [].
        this.players = players.map(function (player) {
            newPlayers.append(player);
        });

    }

    // Display players in HTML
    viewPlayers = () => {
        let team = document.getElementById('heroes');
        team.innerHTML = 'hero';
        let fragment = `<div class="player" data-id="${this.id}">
                        <img src="${this.image}">
                        <div class="name">${this.name}</div>
                        <div class="strength">${this.strength}</div>
                        </div>`

        this.buildPlayers('hero');
        team.append(fragment);

        team = document.getElementById('villains');
        team.innerHTML = 'villian';
        fragment = `<div class="player" data-id="${this.id}">
                    <img src="${this.image}">
                    <div class="name">${this.name}</div>
                    <div class="strength">${this.strength}</div>
                    </div>`
        this.buildPlayers('villain');
        team.append(fragment);
    }

    // Build players fragment 
    buildPlayers = (type) => {
        let fragment = document.createDocumentFragment();
        this.players.filter(player => player.type == type)
            .forEach(player => fragment.append(player.view()));
        return fragment;
    }

}


window.onload = () => {
    const superwar = new Superwar(PLAYERS);
    superwar.viewPlayers();
}