const createPlayer = (x, y, game) => {
    const sprite = game.add.sprite(x, y, 'swan')
    game.physics.p2.enable(sprite, false)
    return sprite
  }
  
  export default createPlayer