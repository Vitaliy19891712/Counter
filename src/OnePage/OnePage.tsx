import React, { ChangeEvent } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Components/Button";
import s from "./OnePage.module.css";

type OnePagePropsType = {
  incButtonHandler: () => void;
  resetButtonHandler: () => void;
  currentValue: number;
  disabledInkClass: boolean;
  disabledResetClass: boolean;
};

const OnePage: React.FC<OnePagePropsType> = ({
  incButtonHandler,
  resetButtonHandler,
  currentValue,
  disabledInkClass,
  disabledResetClass,
}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.text}><span>{currentValue}</span></div>
      <div className={s.buttons}>
        <Button
          name={"inc"}
          onClickButtonHandler={incButtonHandler}
          disabled={disabledInkClass}
        />
        <Button
          name={"reset"}
          onClickButtonHandler={resetButtonHandler}
          disabled={disabledResetClass}
        />
        <NavLink to={"/"}>
          <Button
            name={"set"}
            onClickButtonHandler={() => {}}
            disabled={false}
          />
        </NavLink>
      </div>
    </div>
  );
};

export default OnePage;
