import React from 'react'
import styled from 'styled-components'
import Kannon from './kannon'
import {Button} from './l1_atoms/button'
import {life} from '../modules/life'

const LifeTable = styled.table`
  border-collapse:    collapse;
  td {
    border:           thin solid silver;
  }
  .alive {
    animation:        blink 0.8s ease-in-out infinite alternate;
  }
  @keyframes blink{
    0%          {opacity:0;}
    100%        {opacity:1;}
  }
`

const Row = ({data, ...props}) =>
  <tr>
    {data.map((it, idx) =>
      <td key={idx}>{it===1 ?
        <span className='alive'>●</span> : <span>・</span>}
      </td>
    )}
  </tr>

const LifeBoard = ({size, lifes, ...props}) =>
  <div>
    <LifeTable>
      <tbody>
        {new Array(size).fill(0).map((it, idx) =>
          <Row key={idx} data={life.getRow(lifes, idx+1)} />
        )}
      </tbody>
    </LifeTable>
  </div>

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

const Board = ({size, lifes, ...props}) => {
  life.size = size
  return (
    <div style={{width: '92vw'}}>
      <h1>コンウェイのライフゲーム</h1>

      <Kannon left="200px">
        <ControlPanel size={size} {...props} />
        <LifeBoard size={size} lifes={lifes} />
      </Kannon>
    </div>
  )
}


export default Board
