import React from 'react';
import {atom, useRecoilState} from 'recoil'
import Board from '../components/board'
import engine from '../modules/engine'

const lifeState = atom({
  key:          'lifeState',
  default:  {
    size:       3,
    status:     engine.blinker[0]
  }
})

const LifeGame = ({...props}) => {
  const [life, setLife] = useRecoilState(lifeState)
  const handleForward = event => {
    setLife(state => ({...state,
      status:       engine.forward(life.status)
    }))
  }

  return (
    <Board
      state         = {life.status}
      handleForward = {handleForward}
    />
  )
}


export default LifeGame
