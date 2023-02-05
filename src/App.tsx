import { ChangeEvent, useState } from "react";
import { Route, Routes } from "react-router-dom";
import OnePage from "./OnePage/OnePage";

import TwoPage from "./TwoPage/TwoPage";

function App() {
  const [maxValue, setMaxValue] = useState(5);
  const [startValue, setStartValue] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);

  const incButtonHandler = () => setCurrentValue(currentValue + 1);

  const resetButtonHandler = () => setCurrentValue(startValue);

  const inputMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setMaxValue(Number(e.currentTarget.value));

  const inputStartValueHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setStartValue(Number(e.currentTarget.value));

  const setButtonHandler = () => setCurrentValue(startValue);

  let disabledInkClass = currentValue === maxValue;

  let disabledResetClass = currentValue === startValue;

  let disabledSetClass = maxValue <= startValue || startValue < 0;

  return (
    <div>
      <Routes>
        <Route
          path={"/onepage"}
          element={
            <OnePage
              incButtonHandler={incButtonHandler}
              resetButtonHandler={resetButtonHandler}
              currentValue={currentValue}
              disabledInkClass={disabledInkClass}
              disabledResetClass={disabledResetClass}
            />
          }
        />
        <Route
          path={"/"}
          element={
            <TwoPage
              inputMaxValueHandler={inputMaxValueHandler}
              inputStartValueHandler={inputStartValueHandler}
              startValue={startValue}
              maxValue={maxValue}
              currentValue={currentValue}
              setButtonHandler={setButtonHandler}
              disabledSetClass={disabledSetClass}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
