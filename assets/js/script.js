const appRoot = $("#root")

/* function that creates the gameboard */
const gameBoard = function() {
  let spaceId = 1 

  for (let row = 1; row <= 10; row++) {
  
    const rowElement = $("<div>")
    rowElement.attr('id', `row-${row}`)
    appRoot.append(rowElement)
  
    for (let col = 1; col <= 10; col++) {
  
      const space = $("<div>")
      space.attr('id', `space-${spaceId}`)
      space.addClass("space-element")
  
      rowElement.append(space)
  
      spaceId++
    }
  }
}

gameBoard()

const moveGamePiece = function(gamePiece) {
  gamePiece.click(function() {
    $(this).attr('id')
  })
}

const hero = $("#space-95")
hero.addClass('hero')

moveGamePiece(hero)




