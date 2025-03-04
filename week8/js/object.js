const person ={
    name: "Rexton",
    hp: 10,
    def: 0,
    atk: 23,
    spd: 3,

    attack(enemyDef){
        const dmg =this.atk - enemyDef
        if (dmg <= 0){
            return 0;
        } else {
            return dmg;
        }
    },

    takeDamage(damageAmount) {
        this.hp -= damageAmount;
    
    },
};

const rkDmg = person.attack(enemy.def);
console.log(rkDmg);
console.log("Slime Hp:")

enemy.takeDamage(rkDmg);
console.log

function showHP

const enemy ={
    name: "slime",
    hp: 4,
    def: 2,
    atk: 1,
    spd:1,

    attack(){

    }

}