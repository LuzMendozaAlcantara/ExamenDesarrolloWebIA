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
    return `${name} — ${characterClass} (Nivel ${level})`;
}
