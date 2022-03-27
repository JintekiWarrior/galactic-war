const Hero = require('../lib/Hero')

test("create a hero object", () => {
  const hero = new Hero('Luke', 'sword')

  expect(hero.name).toBe('Luke')
  expect(hero.weapon).toBe('sword')
  expect(hero.health).toEqual(expect.any(Number))
  expect(hero.strength).toEqual(expect.any(Number))
  expect(hero.inventory).toEqual(expect.any(Array))
})

test("get hero stats as an object", () => {
  const hero = new Hero('Luke', 'sword')

  expect(hero.getStats()).toHaveProperty('health')
  expect(hero.getStats()).toHaveProperty('strength')
})

test("get the hero's health", () => {
  const hero = new Hero('Luke', 'sword')

  expect(hero.getHealth()).toEqual(expect.stringContaining(hero.health.toString()))
})

test("add damage to the hero's health", () => {
  const hero = new Hero('Luke', 'sword')
  const health = hero.health

  hero.damageHealth(5)

  expect(hero.health).toBe(health - 5)

  // Check to make sure the heros health doesn't go below 0.
  hero.health = 0
  hero.damageHealth(5) 

  expect(hero.health).toBe(0)
})