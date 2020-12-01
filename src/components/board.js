import React from 'react'
import styled from 'styled-components'
import Kannon from './kannon'
import {Button} from './l1_atoms/button'
import {LifeBoard} from './l3_organisms/life_board'

const Frame = styled.div`
  color:            white;
  background-color: darkblue;
  padding:          1rem;
  border-radius:    12px;
`

const ControlPanel = ({size, ...props}) =>
  <Frame>
    <label htmlFor="size01">サイズ</label>
    <input
      id        = "size01"
      type      = "number"
      value     = {size}
      onChange  = {props.handleSize || (() => {})}
    />
    <br />
    <Button
      label       = "次"
      handleClick = {props.handleNextBoard}
    />
  </Frame>

const Board = ({life, ...props}) => {
  return (
    <div style={{width: '92vw'}}>
      <h1>コンウェイのライフゲーム</h1>

      <Kannon left="200px">
        <ControlPanel size={life.size} {...props} />
        <LifeBoard life={life} />
      </Kannon>
    </div>
  )
}


export default Board
