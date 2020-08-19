import React from 'react';
import {atom, useRecoilState} from 'recoil'
import Board from '../components/board'

const blinker = [[
  [0, 0, 0],
  [1, 1, 1],
  [0, 0, 0]
], [
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0]
]]

const lifeState = atom({
  key:          'lifeState',
  default:  {
    size:       3,
    generation: 1,
    status:     blinker[0]
  }
})

const LifeContainer = ({...props}) => {
  const [life, setLife] = useRecoilState(lifeState)
  const handleForward = evt => {
    setLife(state => ({...state,
      generation:   state.generation + 1,
      status:       blinker[state.generation % 2]
    }))
  }

  return (
    <Board
      state         = {life.status}
      handleForward = {handleForward}
    />
  )
}


export default LifeContainer
