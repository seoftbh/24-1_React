import React from 'react'
import Week01 from './Week01'
import Week02 from './Week02'
import Week03 from './Week03'
import Week04 from './Week04'
import Week05 from './Week05'
import Week06 from './Week06'
import Week07 from './Week07'
import Week09 from './Week09'
import Week00 from './Week00'

function Main() {
  return (
      <div id="w00" style={{
        padding: '32px',
        scrollMarginTop: '100px'
    }}>
        <Week00 />
        {/* <Week01 /> */}
        <div  id="w02" style={{scrollMarginTop: '100px'}}></div>
        <Week02 />
        <div  id="w03" style={{scrollMarginTop: '100px'}}></div>
        <Week03 />
        <div  id="w04" style={{scrollMarginTop: '100px'}}></div>
        <Week04 />
        <div  id="w05" style={{scrollMarginTop: '100px'}}></div>
        <Week05 />
        <div  id="w06" style={{scrollMarginTop: '100px'}}></div>
        <Week06 />
        <div  id="w07" style={{scrollMarginTop: '100px'}}></div>
        <Week07 />
        <div  id="w09" style={{scrollMarginTop: '100px'}}></div>
        <Week09 />
    </div>
  )
}

export default Main