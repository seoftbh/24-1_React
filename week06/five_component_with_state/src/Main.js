import React from 'react'
import './Main.css'
import Card from './Card'

function Main(props) {
  return (
    <main>
      <Card alt="unsplash.com's Screenshot imgae" 
            img="./img/unsplash.png" 
            url="https://unsplash.com" 
            title="Unsplash" 
            description="고품질의 무료 사진을 제공하는 사이트">
      </Card>
      <Card alt="emojidb.org's Screenshot imgae" 
            img="./img/emojidb.png" 
            url="https://emojidb.org"
            title="EmojiDB" 
            description="키워드에 맞는 이모지를 추천해주는 사이트">
      </Card>
      <Card alt="icontify.design's Screenshot imgae" 
            img="./img/icontify.png" 
            url="https://icon-sets.iconify.design"
            title="Icontify" 
            description="오픈소스 벡터 아이콘들을 제공하는 사이트">
      </Card>
      <Card alt="shecodes.io's Screenshot imgae" 
            img="./img/shecodes.png" 
            url="https://gradients.shecodes.io"
            title="SheCodes - CSS Gradients" 
            description="다양한 스타일의 그라디언트를 제공하는 사이트">
      </Card>
    </main>
  )
}

export default Main
