class SuperHuman {
   constructor(name, powerLevel) {
      this.name = name;
      this.powerLevel = powerLevel;
   }
}

class SuperHero extends SuperHuman {
   constructor(name, alias, powerLevel) {
      // Call parent constructor
      super(name, powerLevel);
      this.alias = alias;
   }

   battle(villain) {
      // Return true if hero's powerLevel is greater than or equal to villain's
      return this.powerLevel >= villain.powerLevel;
   }
}

class SuperVillain extends SuperHuman {
   constructor(name, alias, powerLevel) {
      // Call parent constructor
      super(name, powerLevel);
      this.alias = alias;
   }

   getEvilChuckle() {
      return "Ha ha ha!";
   }
}