import React from 'react';
import {atom, useRecoilState} from 'recoil'
import Board from '../components/board'
import {LifeGame} from '../modules/lifegame'

/**
 * ライフゲームのステート
 */
const lifeStore = atom({
  key:    'lifeState',
  default:  {
    life: new LifeGame(10, ['2,1', '4,2', '1,3', '2,3', '5,3', '6,3', '7,3'])
  },
  persistence_UNSTABLE: {
    type: 'log'
  }
})

/**
 * ボードコンテナ
 */
const LifeContainer = ({...props}) => {
  const [lifeState, setLife] = useRecoilState(lifeStore)

  /**
   * サイズ変更の処理
   * @param {*} event 
   */
  const handleSize = event => {
    setLife(state => ({...state,
      life:         new LifeGame(parseInt(event.target.value), lifeState.life.size)
    }))
  }

  /**
   * 次ボタンの処理
   * @param {*} event JavaScript イベント
   */
  const handleNextBoard = event => {
    setLife(state => ({...state,
      life:           lifeState.life.nextLife()
    }))
  }

  return (
    <Board
      life            = {lifeState.life}
      handleSize      = {handleSize}
      handleNextBoard = {handleNextBoard}
    />
  )
}


export default LifeContainer
