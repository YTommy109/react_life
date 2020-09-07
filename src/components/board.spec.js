import React from 'react'
import {render, screen } from '@testing-library/react'
import Board from './board'

describe('Board について', () => {
  describe('項目が画面にあること', () => {
    beforeEach(() => {
      render(<Board state={[]} />)
    })
    it('タイトルがあること', () => {
      const target = screen.getByText('コンウェイのライフゲーム') 
      expect(target).toBeInTheDocument()
    })
    it('次ボタンがあること', () => {
      const target = screen.getByText('次') 
      expect(target).toBeInTheDocument()
    })
  })

  describe('セルの状態が表示されること', () => {
    beforeEach(() => {
      render(<Board state={[[1, 0], [1, 1]]} />)
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
})
