import React, { useState } from "react";
import styles from "./styles.module.scss";
import Button from "./button";
import Bets from "./bets";
import BetInput from "./betInput";

const PokerActions = () => {
  //placeholder
  const [isMyTurn, setIsMyTurn] = useState(true);
  const [position, setPosition] = useState("bigBlind");
  const [minBet, setMinBet] = useState(50);

  return (
    <div className={styles.pokerActions}>
      <div className="betBtns">
        <Bets name="min" isMyTurn={isMyTurn} />
        <Bets name="1/2 Pot" isMyTurn={isMyTurn} />
        <Bets name="Pot" isMyTurn={isMyTurn} />
        <Bets name="All in" isMyTurn={isMyTurn} />
        <BetInput />
      </div>
      <div className="actionBtns">
        <Button action="Fold" isMyTurn={isMyTurn} setIsMyTurn={setIsMyTurn} />
        <Button action="Call" isMyTurn={isMyTurn} setIsMyTurn={setIsMyTurn} />
        <Button action="Raise" isMyTurn={isMyTurn} setIsMyTurn={setIsMyTurn} />
      </div>
    </div>
  );
};

export default PokerActions;
