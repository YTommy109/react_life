import React from 'react'
import {render, fireEvent, screen } from '@testing-library/react'
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
      const target = screen.getByDisplayValue('次') 
      expect(target).toBeInTheDocument()
    })
    it('サイズ入力があること', () => {
      const target = screen.getByLabelText('サイズ') 
      expect(target).toBeInTheDocument()
    })
  })

  describe('セルの状態が表示されること', () => {
    beforeEach(() => {
      render(<Board
        state={[[1, 0], [1, 1]]}
        lifes={[[1,1], [2,1], [2,2]]}
        size={2}
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

  describe('イベントハンドラーが呼ばれること', () => {
    const mockSize = jest.fn()
    const mockNext = jest.fn()
    beforeEach(() => {
      render(<Board state={[]}
        handleSize      = {mockSize}
        handleNextBoard = {mockNext}
      />)
    })
    it('次ボタンのハンドラーが呼ばれること', () => {
      const target = screen.getByDisplayValue('次')
      fireEvent.click(target)
      expect(mockNext).toBeCalledTimes(1)
    })
    it('サイズ変更ハンドラーが呼ばれること', () => {
      const target = screen.getByLabelText('サイズ')
      expect(target).toHaveValue(null)
      fireEvent.change(target, {target: {value: '100'}})
      expect(mockSize).toBeCalledTimes(1)
      expect(target).toHaveValue(100)
    })
  })
})
