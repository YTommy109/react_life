import React from 'react'
import {LifeBoard} from '../l3_organisms/life_board'
import {LifeControl} from '../l3_organisms/life_control'
import Kannon from '../l4_templates/kannon'


const Board = ({life, ...props}) =>
  <div style={{width: '92vw'}}>
    <h1>コンウェイのライフゲーム</h1>

    <Kannon left="200px">
      <LifeControl
        size  = {life.size}
        {...props}
      />
      <LifeBoard
        life  = {life}
      />
    </Kannon>
  </div>


export default Board
