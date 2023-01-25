import React from 'react';

function Calculator() {
  return (
    <div className="calc-container">
      <div className="output-bar" />
      <div>
        <div className="button-rows">
          <button type="button" name="AC">AC</button>
          <button type="button" name="plusMinus">+/-</button>
          <button type="button" name="percentage">%</button>
          <button type="button" name="division">÷</button>
        </div>
        <div className="button-rows">
          <button type="button" name="seven">7</button>
          <button type="button" name="eight">8</button>
          <button type="button" name="nine">9</button>
          <button type="button" name="ten">X</button>
        </div>

        <div className="button-rows">
          <button type="button" name="four">4</button>
          <button type="button" name="five">5</button>
          <button type="button" name="six">6</button>
          <button type="button" name="minus">-</button>
        </div>
        <div className="button-rows">
          <button type="button" name="one">1</button>
          <button type="button" name="two">2</button>
          <button type="button" name="three">3</button>
          <button type="button" name="four">+</button>
        </div>
        <div className="last-row">
          <button name="zero" type="button">0</button>
          <button name="dot" type="button">.</button>
          <button name="equal" type="button">=</button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
