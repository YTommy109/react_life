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
    size:       10,
    lifes:      [[2,1], [4,2], [1,3], [2,3], [5,3], [6,3], [7,3]]
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
   * サイズ変更の処理
   * @param {*} event 
   */
  const handleSize = event => {
    setLife(state => ({...state,
      size:         event.target.value
    }))
  }

  /**
   * 次ボタンの処理
   * @param {*} event JavaScript イベント
   */
  const handleNextBoard = event => {
    setLife(state => ({...state,
      lifes:         engine.nextBoard(life.lifes)
    }))
  }

  return (
    <Board
      size            = {life.size}
      lifes           = {life.lifes}
      handleSize      = {handleSize}
      handleNextBoard = {handleNextBoard}
    />
  )
}


export default LifeGame
