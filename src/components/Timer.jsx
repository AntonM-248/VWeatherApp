import { useEffect, useState } from "react"

const Timer = () => {
  const [countDownNumber, setCountDownNumber] = useState(0);
  const [countDownStarted, setCountDownStarted] = useState(false);

  useEffect(() => {
    console.log('in cd func ', countDownStarted);
    if(countDownStarted && countDownNumber > 0) {
      console.log('use effect ', countDownNumber);
      const newCDNumber = countDownNumber - 1;
      setTimeout(() => setCountDownNumber(newCDNumber), 300);
    }
  }, [countDownNumber, countDownStarted]);

  return (
    <>
      <div className='col'>
        <div className="row">
          <h1>Timer</h1>
        </div>
          <label >Number to count down from:</label>
          <input type="number" onChange={(e) => setCountDownNumber(e.target.value)}/>
        <div>
          <button type="button" className="btn btn-primary" onClick={() => setCountDownStarted(true)}>Start the Countdown</button>
        </div>
        <div>
          {countDownStarted ? countDownNumber : ''}
        </div>
      </div>
    </>
  )
}

export default Timer