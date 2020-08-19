import React from 'react';
import {atom, useRecoilState} from 'recoil'
import Board from '../components/board'

const lifeState = atom({
  key:      "lifeState",
  default:  [
    [1, 1, 1],
    [1, 1, 1],
    [0, 0, 0]
  ]
})

const LifeContainer = ({...props}) => {
  const [life, setLife] = useRecoilState(lifeState)
  const handleForward = evt => {
    setLife(state => [
      [1, 0, 1],
      [1, 0, 1],
      [0, 0, 0]
    ])
  }

  return (
    <Board
      state         = {life}
      handleForward = {handleForward}
    />
  )
}

export default LifeContainer
