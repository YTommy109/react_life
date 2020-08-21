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
    {data.map(it =>
      <Cell state={it} />
    )}
  </tr>

const Board = ({state, ...props}) =>
  <div style={{width: '92vw'}}>
    <h1>コンウェイのライフゲーム</h1>

    <Kannon left="100px">
      <div style={{backgroundColor: 'floralwhite'}}>
        <input
              type    = "button"
              value   = "次"
              onClick = {props.handleForward}
            />
      </div>
      <div style={{backgroundColor: 'lightgray'}}>
        <Table>
          <tbody>
            {state.map(it =>
              <Row data = {it} />
            )}
          </tbody>
        </Table>
      </div>
    </Kannon>
  </div>


export default Board
