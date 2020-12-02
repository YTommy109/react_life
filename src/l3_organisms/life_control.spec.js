import React from 'react'
import {render, fireEvent, screen } from '@testing-library/react'
import {LifeControl} from './life_control'

describe('Board について', () => {
  describe('項目が画面にあること', () => {
    beforeEach(() => {
      render(<LifeControl />)
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

  describe('イベントハンドラーが呼ばれること', () => {
    const mockSize = jest.fn()
    const mockNext = jest.fn()
    beforeEach(() => {
      render(<LifeControl
        size            = {3}
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
      expect(target).toHaveValue(3)
      fireEvent.change(target, {target: {value: '100'}})
      expect(mockSize).toBeCalledTimes(1)
    })
  })
})
