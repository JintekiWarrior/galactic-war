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

const moveGamePiece = function(selected) {
  const selectedId = selected.id
  $(selected).toggle(
    function () {
      console.log("clicked yellow")
      $(this).css("borderColor", "yellow")
    },
    function () {
      console.log("clicked black")
      $(this).css("borderColor", "black")
    }
  )
}

const hero = $("#space-95")
hero.addClass('hero')
$(".space-element").click(function(event) {
  moveGamePiece(event.target)
})





