import React from 'react'
import {render, fireEvent, screen } from '@testing-library/react'
import {LifeBoard} from './life_board'
import {LifeGame} from '../../modules/lifegame'

describe('セルの状態が表示されること', () => {
  beforeEach(() => {
    render(<LifeBoard
      life = {new LifeGame(2, ['1,1', '1,2', '2,2'])}
    />)
  })
  it('生存数が 3 であること', () => {
    const target = screen.getAllByText('●') 
    expect(target).toHaveLength(3)
  })
  it('死亡数が 1 であること', () => {
    const target = screen.getAllByText('・') 
    expect(target).toHaveLength(1)
  })
})
