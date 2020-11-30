import {Button} from './button'
import {render, fireEvent, screen } from '@testing-library/react'

describe('ボタンが動作すること', () => {
  const mockClick = jest.fn()
  let target = null
  beforeEach(() => {
    mockClick.mockClear()
    render(<Button label = "ラベル" handleClick = {mockClick} />)
    target = screen.getByDisplayValue('ラベル')
  })
  it('ラベルが設定されていること', () => {
    expect(target).toBeInTheDocument()
  })
  it('ハンドラーが呼ばれること', () => {
    fireEvent.click(target)
    expect(mockClick).toBeCalledTimes(1)
  })
})
