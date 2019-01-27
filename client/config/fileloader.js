import { ASSETS_URL } from '.'

const fileLoader = game => {
  game.load.crossOrigin = 'Anonymous'
  game.stage.backgroundColor = '#1E1E1E'
  game.load.image('bground', `${ASSETS_URL}/sprites/bground/bground.png`)
  game.load.image('swan', `${ASSETS_URL}/sprites/swan/swan.png`)
}

export default fileLoader