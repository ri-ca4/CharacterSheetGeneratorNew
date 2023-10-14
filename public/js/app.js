import { dnd, WoW, alliance, horde, genders, alignments, motivations, flaws, personalities, statRoll } from "./stats.js"


//roll for ... functions
function rollForDnDRace(){
    var races = dnd.races;
    var rand = Math.floor(Math.random() * races.length);
    var race = races[rand];
    return race
}

function rollForDnDClass(){
    var classes = dnd.classes;
    var rand = Math.floor(Math.random() * classes.length);
    var _class = classes[rand];
    return _class
}

function rollForWoW(){
    var races = Object.keys(WoW)//get just the races
    var race = races[Math.floor(Math.random() * races.length)]
    var _class = WoW[race][Math.floor(Math.random()* WoW[race].length)]//get random class from race's array
    return [race, _class]
}

function rollForAlliance(){
    var races = Object.keys(alliance)//get just the races
    var race = races[Math.floor(Math.random() * races.length)]
    var _class = alliance[race][Math.floor(Math.random()* alliance[race].length)]//get random class from race's array
    return [race, _class]
}

function rollForHorde(){
    var races = Object.keys(horde)//get just the races
    var race = races[Math.floor(Math.random() * races.length)]
    var _class = horde[race][Math.floor(Math.random()* horde[race].length)]//get random class from race's array
    return [race, _class]
}

function rollForGender(){
    var rand = Math.floor(Math.random() * genders.length);
    var gender = genders[rand];
    return gender
}

function rollForAlignment(){
    var rand1 = Math.floor(Math.random() * 3)
    var rand2 = Math.floor(Math.random() * 3)
    var align1 = alignments[0][rand1];
    var align2 = alignments[1][rand2];
    var alignment = align1 + ' ' + align2;
    if(alignment == 'Neutral Neutral'){
        alignment = 'True Neutral'
    }
    return alignment
}

function rollForMotive(){
    var rand = Math.floor(Math.random() * motivations.length);
    var motive = motivations[rand];
    return motive
}

function rollForFlaw(){
    var rand = Math.floor(Math.random() * flaws.length);
    var flaw = flaws[rand];
    return flaw
}

function rollForPersonality(){
    var rand = Math.floor(Math.random() * personalities.length);
    var personality = personalities[rand];
    return personality
}

function rollForStats(){
    var stats = {};
    stats.str = statRoll();
    stats.dex = statRoll();
    stats.con = statRoll();
    stats.int = statRoll();
    stats.wis = statRoll();
    stats.chr = statRoll();
    return stats
}

const radios = document.getElementsByName('choose');
const wowBtns   = document.getElementsByClassName('wow-buttons');
//functions to set background and toggle wow buttons
function setImgBtns(){
    var game;
    for(const f of radios){
        if (f.checked){
            game = f.value
        }
    }
    if(game == "dnd"){
        document.getElementById('container').style.backgroundImage = "url('../assets/dndbackground.jpg')";
        for(const f of wowBtns){
            f.style.display = 'none'
        }
    }
    if(game == "wow"){
        document.getElementById('container').style.backgroundImage = "url('../assets/wowbackground.jpg')";
        for(const f of wowBtns){
            f.style.display = 'block'
        }
    }
}

setImgBtns();
for(let i=0; i<radios.length; i++){
    radios[i].addEventListener('click', setImgBtns)
}

//create character class
class DnDCharacter {
    constructor(){
        this.race = rollForDnDRace(),
        this.class = rollForDnDClass(),
        this.gender = rollForGender(),
        this.align = rollForAlignment(),
        this.motive = rollForMotive(),
        this.flaw = rollForFlaw(),
        this.person = rollForPersonality(),
        this.stats = rollForStats()
    }
}

class WoWCharacter {
    constructor(){
        const [race, _class] = rollForWoW()
        this.race = race,
        this.class = _class,
        this.gender = rollForGender(),
        this.align = rollForAlignment(),
        this.motive = rollForMotive(),
        this.flaw = rollForFlaw(),
        this.person = rollForPersonality(),
        this.stats = rollForStats()
    }
}

class AllianceCharacter {
    constructor(){
        const [race, _class] = rollForAlliance()
        this.race = race,
        this.class = _class,
        this.gender = rollForGender(),
        this.align = rollForAlignment(),
        this.motive = rollForMotive(),
        this.flaw = rollForFlaw(),
        this.person = rollForPersonality(),
        this.stats = rollForStats()
    }
}

class HordeCharacter {
    constructor(){
        const [race, _class] = rollForHorde()
        this.race = race,
        this.class = _class,
        this.gender = rollForGender(),
        this.align = rollForAlignment(),
        this.motive = rollForMotive(),
        this.flaw = rollForFlaw(),
        this.person = rollForPersonality(),
        this.stats = rollForStats()
    }
}

//toggle between alliance and horde
var faction = '';

document.getElementById('alliance').addEventListener('click',()=>{
    if(faction == 'alliance'){
        faction = ''
        document.getElementById('alliance').style.backgroundColor = '#6494ed8e'
    }else{
        faction = 'alliance'
        document.getElementById('alliance').style.backgroundColor = '#6494ed'
        document.getElementById('horde').style.backgroundColor = '#dd49679a'
    }
})

document.getElementById('horde').addEventListener('click',()=>{
    if(faction == 'horde'){
        faction = ''
        document.getElementById('horde').style.backgroundColor = '#dd49679a'
    }else{
        faction = 'horde'
        document.getElementById('horde').style.backgroundColor = '#dd4967'
        document.getElementById('alliance').style.backgroundColor = '#6494ed8e'
    }
})

function generate(){//generate new character and display
    var game;
    for(const f of radios){
        if (f.checked){
            game = f.value
        }
    }
    console.log(game)
//New character
    var char;
    if(game == 'dnd'){
        char = new DnDCharacter
    }

    if(game == 'wow'){
        if(faction == 'alliance'){
            char = new AllianceCharacter
        }else if(faction == 'horde'){
            char = new HordeCharacter
        }else{
            char = new WoWCharacter
        }
    }
//Display in DOM
    document.getElementById('race').innerHTML = char.race;
    document.getElementById('class').innerHTML = char.class;
    document.getElementById('gender').innerHTML = char.gender;
    document.getElementById('align').innerHTML = char.align;
    document.getElementById('motive').innerHTML = char.motive;
    document.getElementById('flaw').innerHTML = char.flaw;
    document.getElementById('person').innerHTML = char.person;

    document.getElementById('str').innerHTML = char.stats.str;
    document.getElementById('dex').innerHTML = char.stats.dex;
    document.getElementById('con').innerHTML =  char.stats.con;
    document.getElementById('int').innerHTML = char.stats.int;
    document.getElementById('wis').innerHTML = char.stats.wis;
    document.getElementById('chr').innerHTML = char.stats.chr;
}

generate();
//Event listener
let generateBtn = document.getElementById('generate');
generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    generate();
});