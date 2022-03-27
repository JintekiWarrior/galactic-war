function Hero(name, weapon) {
  this.name = name 
  this.weapon = weapon 
  this.health = 30 
  this.strength = 8 
  this.inventory = []
}

Hero.prototype.getStats = function() {
  return {
    health: this.health,
    strength: this.strength
  }
}

Hero.prototype.getHealth = function() {
  return `${this.health}hp`
}

Hero.prototype.damageHealth = function(damage) {
  this.health -= damage 

  if (this.health < 0) {
    this.health = 0
  }
}

module.exports = Hero