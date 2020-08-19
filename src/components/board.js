import React from 'react';
import styled from 'styled-components'
import {useRecoilValue} from 'recoil'
import lifeState from '../atoms/life'

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

const Board = ({...props}) => {
  const life = useRecoilValue(lifeState)

  return (
    <Table>
      <tbody>
        {life.map(it =>
          <Row data = {it} />
        )}
      </tbody>
    </Table>
  )
}

export default Board
