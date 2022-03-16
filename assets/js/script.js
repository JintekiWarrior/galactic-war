const appRoot = $("#root")

// gameboard will be a 10 X 10 board with 100 spaces 
let spaceId = 1 

for (let row = 1; row <= 10; row++) {
  const rowElement = $("<div>")
  rowElement.attr('id', `row-${row}`)
  appRoot.append(rowElement)
  for (let col = 1; col <= 10; col++) {
    const space = $("<div>")
    space.attr('id', `space-${spaceId}`)
    space.addClass("space-element")
    space.text("test")
    rowElement.append(space)
    spaceId++
  }
}