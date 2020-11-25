import engine from './engine'
import {life} from './life'

jest.mock('./life')

const b1 = [
  [0, 0, 0],
  [1, 1, 1],
  [0, 0, 0]
]

const b2 = [
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0]
]

describe('ルールエンジンについて', () => {
  describe('ブリンカパターンが動作すること', () => {
    it('b1 から b2 が得られること', () => {
      expect(engine.forward(b1)).toEqual(b2)
    })

    it('b2 から b1 が得られること', () => {
      expect(engine.forward(b2)).toEqual(b1)
    })
  })
  describe('新エンジンを呼び出せること', () => {
    const lifes = [[1,1]]
    engine.nextBoard(lifes)
    expect(life.nextLife).toBeCalledTimes(1)
    expect(life.nextLife).toBeCalledWith(lifes)
  })
})
