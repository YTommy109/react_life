const blinker = [[
  [0, 0, 0],
  [1, 1, 1],
  [0, 0, 0]
], [
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0]
]]

/**
 * ライフゲームのルールエンジン
 */
const engine = {
  blinker: blinker,
  forward: current => {
    if (current.toString() === blinker[0].toString()) {
      return blinker[1]
    }
    return blinker[0]
  }
}

export default engine
