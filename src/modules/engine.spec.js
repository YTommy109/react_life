import engine from './engine'
import {life} from './life'

jest.mock('./life')

describe('ルールエンジンについて', () => {
  it('新エンジンを呼び出せること', () => {
    const lifes = [[1,1]]
    engine.nextBoard(lifes)
    expect(life.nextLife).toBeCalledTimes(1)
    expect(life.nextLife).toBeCalledWith(lifes)
  })
})
