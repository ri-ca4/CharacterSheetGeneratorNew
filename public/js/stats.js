const dnd = {

    races: ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 
        'Halfling', 'Half-Orc', 'Human', 'Tiefling'],

    classes: ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 
        'Monk', 'Palidin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 
        'Wizard', 'Artificer', 'Blood Hunter']

}

const WoW ={    
    'Human':    ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Palidin', 'Monk', 'Death Knight'],
    'Dwarf':    ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Palidin', 'Shaman', 'Monk', 'Death Knight'],
    'Night Elf':['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Druid', 'Monk', 'Demon Hunter', 'Death Knight'],
    'Gnome':    ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Monk', 'Death Knight'],
    'Draenei':  ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Palidin', 'Shaman', 'Monk', 'Death Knight'],
    'Worgen':   ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Druid', 'Monk', 'Death Knight'],
    'Pandaren': ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Shaman', 'Monk', 'Death Knight'],
    'Dracthyr': ['Evoker'],
    'Orc':      ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Shaman', 'Monk', 'Death Knight'],
    'Undead':   ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Monk', 'Death Knight'],
    'Tauren':   ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Palidin', 'Druid', 'Shaman', 'Monk', 'Death Knight'],
    'Troll':    ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Druid', 'Shaman', 'Monk', 'Death Knight'],
    'Blood Elf':['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Palidin', 'Monk', 'Demon Hunter', 'Death Knight'],
    'Goblin':   ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Shaman', 'Monk', 'Death Knight'],
    'Void Elf': ['Warrior', 'Hunter', 'Mage','Rogue', 'Priest', 'Warlock', 'Monk', 'Death Knight'],
    'Lightforged Draenei':  ['Warrior', 'Hunter', 'Mage','Rogue', 'Priest','Warlock', 'Palidin', 'Monk', 'Death Knight'],
    'Dark Iron Dwarf':      ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest','Warlock', 'Palidin', 'Shaman', 'Monk', 'Death Knight'],
    'Kul Tiran':            ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Druid', 'Shaman', 'Monk', 'Death Knight'],
    'Mechagnome':           ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Monk', 'Death Knight'],
    'Nightborne':           ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock','Monk', 'Death Knight'],
    'High Mountain Tauren': ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Druid', 'Shaman', 'Monk', 'Death Knight'],
    'Mag\'Har Orc':         ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Shaman', 'Monk', 'Death Knight'],
    'Zandalari Troll':      ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Palidin', 'Druid', 'Shaman', 'Monk', 'Death Knight'],
    'Vulpera':              ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Shaman', 'Monk', 'Death Knight']
}

const alliance = {
    'Human':    ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Palidin', 'Monk', 'Death Knight'],
    'Dwarf':    ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Palidin', 'Shaman', 'Monk', 'Death Knight'],
    'Night Elf':['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Druid', 'Monk', 'Demon Hunter', 'Death Knight'],
    'Gnome':    ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Monk', 'Death Knight'],
    'Draenei':  ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Palidin', 'Shaman', 'Monk', 'Death Knight'],
    'Worgen':   ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Druid', 'Monk', 'Death Knight'],
    'Pandaren': ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Shaman', 'Monk', 'Death Knight'],
    'Dracthyr': ['Evoker'],
    'Void Elf': ['Warrior', 'Hunter', 'Mage','Rogue', 'Priest', 'Warlock', 'Monk', 'Death Knight'],
    'Lightforged Draenei': ['Warrior', 'Hunter', 'Mage','Rogue', 'Priest','Warlock', 'Palidin', 'Monk', 'Death Knight'],
    'Dark Iron Dwarf':     ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest','Warlock', 'Palidin', 'Shaman', 'Monk', 'Death Knight'],
    'Kul Tiran':           ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Druid', 'Shaman', 'Monk', 'Death Knight'],
    'Mechagnome':          ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Monk', 'Death Knight']
}

const horde = {
    'Orc':      ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Shaman', 'Monk', 'Death Knight'],
    'Undead':   ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Monk', 'Death Knight'],
    'Tauren':   ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Palidin', 'Druid', 'Shaman', 'Monk', 'Death Knight'],
    'Troll':    ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Druid', 'Shaman', 'Monk', 'Death Knight'],
    'Blood Elf':['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Palidin', 'Monk', 'Demon Hunter', 'Death Knight'],
    'Goblin':   ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Shaman', 'Monk', 'Death Knight'],
    'Pandaren': ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Shaman', 'Monk', 'Death Knight'],
    'Dracthyr': ['Evoker'],
    'Nightborne':           ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock','Monk', 'Death Knight'],
    'High Mountain Tauren': ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Druid', 'Shaman', 'Monk', 'Death Knight'],
    'Mag\'Har Orc':         ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Shaman', 'Monk', 'Death Knight'],
    'Zandalari Troll':      ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Palidin', 'Druid', 'Shaman', 'Monk', 'Death Knight'],
    'Vulpera':              ['Warrior', 'Hunter', 'Mage', 'Rogue', 'Priest', 'Warlock', 'Shaman', 'Monk', 'Death Knight']
}

const genders = ['Male', 'Female', 'Non-binary'];

const alignments = [
    ['Lawful', 'Neutral', 'Chaotic'],
    ['Good', 'Neutral', 'Evil'] 
];

const motivations = ['Revenge', 'Power', 'Money', 'Healing', 'Justice', 'Entertainment',
                     'Love', 'Adventure', 'Education', 'Respect', 'Redemption', 'Boredom',
                     'Curiosity', 'Lust', 'Anarchy', 'Rebellion', 'Survival', 'Courage', 
                     'Glory', 'Honor'];

const flaws = ['Gullible', 'Clumbsy', 'Lazy', 'Naive', 'Pride', 'Stubborn', 'Anxious', 'Apathetic', 'Ignorant',
                'Hot-headed', 'Obsessive', 'Distractable', 'Arrogant', 'Forgetful', 'Compulsive Liar'];

const personalities = ['Bold', 'Shy', 'Quiet', 'Serious', 'Modest', 'Brave', 'Quirky', 'Careful', 'Honest', 
                    'Loyal', 'Humble', 'Responsible', 'Combative', 'Witty', 'Simple Minded', 'Bright', 
                    'Impulsive', 'Compassionate', 'Leader', 'Hard-working'];

function statRoll (){//simulates rolling 4 d6, dropping lowest, and adding the remaining
    let rolls = [];
    for(let i=1; i<=4; i++){//roll the dice
        rolls.push(Math.floor(Math.random() * 6) + 1)
    }
    rolls.sort(function(a, b){return b - a});//sort the dice
    rolls.pop();//drop the lowest
    var stat = rolls.reduce(function (a, b) {//add the remaining
        return a + b;
      }, 0);
    return stat
}

export {dnd, WoW, alliance, horde, genders, alignments, motivations, flaws, personalities, statRoll}