const name = "Zara Darkbane";
const characterClass = "Hechicera";
let level = 7;
let health = 100;
let mana = 50;
let attack = 25;
let defense = 10;

function calculateDamage(attack, defense) {
    const damage = attack - defense;
    if (damage < 0) {
        return 0;
    }
    return damage;
}

// Arrow function
const isAlive = (health) => {
    return health > 0;
};

// Arrow function
const canCastSpell = (currentMana, spellCost, isStunned) => {
    return currentMana >= spellCost && !isStunned;
};

function getPresentation(name, characterClass, level) {
    return `${name} — ${characterClass} (Nivel: ${level})`;
}

console.log("Daño calculado:", calculateDamage(attack, defense));
console.log("¿Esta vivo?:", isAlive(health));

const spellCost = 20; 
const isStunned = false;
console.log("¿Puede lanzar hechizo?:", canCastSpell(mana, spellCost, isStunned));
console.log("Presentacion:", getPresentation(name, characterClass, level));