import React, { useState } from 'react'
import './Quote.css'

function Quotes() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 5));
  const [count, setCount] = useState(0);

  const refresh = () => {
    setNumber(Math.floor(Math.random() * 5));
    setCount(count + 1);
  };

  const quotes = [
    "우리는 모두 자신의 힘으로 발견한 내용을 가장 쉽게 익힌다. - 도널드 크누스",
    "좋은 프로그래머 대부분은 돈이나 대중에게 받을 찬사를 기대하고 프로그래밍을 하지 않고 프로그래밍이 재미 있어서 한다. - 리누스 토르발스",
    "훌륭한 코드는 훌륭한 문서보다 낫다. - Steve McConnell",
    "당신이 6개월 이상 한 번도 보지 않은 코드는 다른 사람이 다시 만드는 게 훨씬 더 나을 수 있다. - Eagleson’s Law",
    "만일 디버깅이 벌레를 잡는 과정이라면 프로그래밍은 그걸 집어넣는 과정이다. - Edsger W. Dijkstra",
  ];

  return (
    <div className='quote'>
      <p id='q'>{quotes[number]}</p>
      <p id='c'>{count === 0 ? '' : '새로 고침 ' + count + '회'}</p>
      <button id='b' onClick={refresh}>🔄</button>
    </div>
  )
}

export default Quotes
