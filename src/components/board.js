import React from 'react';
import styled from 'styled-components'
import Kannon from './kannon'

const Table = styled.table`
  border-collapse:    collapse;
  td {
    border:           thin solid silver;
  }
`

const Cell = ({state, ...props}) =>
  <td>{state===1?'●':'・'}</td>

const Row = ({data, ...props}) =>
  <tr>
    {data.map((it, idx) =>
      <Cell key={idx} state={it} />
    )}
  </tr>

const Board = ({state, size, ...props}) =>
  <div style={{width: '92vw'}}>
    <h1>コンウェイのライフゲーム</h1>

    <Kannon left="200px">
      <div style={{backgroundColor: 'floralwhite', padding: '1rem', borderRadius: '12px'}}>
        <label htmlFor="size01">サイズ</label>
        <input
          id        = "size01"
          type      = "number"
          value     = {size}
          onChange  = {props.handleSize}
        />
        <br />
        <input
              type    = "button"
              value   = "次"
              onClick = {props.handleForward}
            />
      </div>
      <div style={{backgroundColor: 'lightgray', padding: '1rem', borderRadius: '12px'}}>
        <Table>
          <tbody>
            {state.map((it, idx) =>
              <Row key={idx} data={it} />
            )}
          </tbody>
        </Table>
      </div>
    </Kannon>
  </div>


export default Board
