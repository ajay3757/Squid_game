import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./mediumgame.css"

function Mediumgame() {
    const [currentcolor, setcurrentcolor] = useState("green")
  const [score, setscore] = useState(0)
  const [gameOver, setGameOver] = useState(false);
  const [greenClickCount, setGreenClickCount] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(40);


  useEffect(() => {
    let colorchangeInterval;
    let timer;
    if (!gameOver) {
      colorchangeInterval = setInterval(() => {
        const nextcolor = Math.random() < 0.5 ? 'green' : 'red';
        setcurrentcolor(nextcolor);
      }, 1000);
    }


    timer = setTimeout(() => {
      setGreenClickCount(0);
    }, 40000);


    const timerInterval = setInterval(() => {
      if (timerSeconds > 0) {
        setTimerSeconds(timerSeconds - 1);
      } else {
        setGameOver(true);
        clearInterval(timerInterval); 
      }
    }, 1000);


    return () => {
      clearInterval(colorchangeInterval);
      clearTimeout(timer);
      clearTimeout(timerInterval);
    };
  }, [gameOver,timerSeconds]);

  const handleColorClick = () => {
    if (currentcolor === 'green') {
      setscore(score + 1);
      setGreenClickCount(greenClickCount + 1);
     
        
    } else if (currentcolor === 'red') {
      setGameOver(true);
    }
  };
  useEffect(() => {
    if (greenClickCount === 15) {
      setGameOver(true);
    }
  }, [greenClickCount]);
  return (
    <div>
        <h1 style={{color:"gold",marginRight:"1px"}}>Mediumgame
        <h1  style={{color:"maroon",marginRight:"1px"}}>SCORE:{score}</h1>
        <p style={{ color: "white" }}>Time Left: {timerSeconds} seconds</p>
        <span>15 POINTS TO WIN</span>
        </h1>
        <div className='container'>
        <div className='whole2' style={{ backgroundColor: currentcolor }} onClick={handleColorClick}>
          {gameOver ? (
            <>
              <p style={{color:"white"}}>{greenClickCount === 15 ? 'You won!' : 'You lost! Game over!'}</p>
              <Link to="/">
                <button type='button' className='btn btn-warning'>Try Again</button>
              </Link>
            </>
          ) : null}
        </div>
      </div>
     
    </div>
  )
}

export default Mediumgame