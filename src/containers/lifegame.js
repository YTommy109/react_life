import React from 'react';
import {atom, useRecoilState} from 'recoil'
import Board from '../components/board'
import engine from '../modules/engine'

/**
 * ライフゲームのステート
 */
const lifeState = atom({
  key:          'lifeState',
  default:  {
    size:       3,
    status:     engine.blinker[0],
    lifes:      [[2,1], [2,2], [2,3]]
  },
  persistence_UNSTABLE: {
    type:       'log'
  }
})

/**
 * ボードコンテナ
 */
const LifeGame = ({...props}) => {
  const [life, setLife] = useRecoilState(lifeState)

  /**
   * 次ボタンの処理
   * @param {*} event JavaScript イベント
   */
  const handleForward = event => {
    setLife(state => ({...state,
      status:       engine.forward(life.status)
    }))
  }

  /**
   * サイズ変更の処理
   * @param {*} event 
   */
  const handleSize = event => {
    setLife(state => ({...state,
      size:         event.target.value
    }))
  }

  const handleNextBoard = event => {
    setLife(state => ({...state,
      lifes:         engine.nextBoard(life.lifes)
    }))
  }

  return (
    <Board
      size            = {life.size}
      state           = {life.status}
      handleForward   = {handleForward}
      handleSize      = {handleSize}
      handleNextBoard = {handleNextBoard}
    />
  )
}


export default LifeGame
