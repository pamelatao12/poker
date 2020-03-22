import React, { useState } from "react";
import "pages/play/components/table/player.css";
import Card from "pages/play/components/table/card";

const Player = ({ name, pic, position, money, bet, cardSet, showHand }) => {
  const [cards, setCards] = useState([
    [cardSet[0][0], cardSet[0][1]],
    [cardSet[1][0], cardSet[1][1]]
  ]);

  const style = cardSet[0][0] === "" ? { visibility: "hidden" } : {};

  return (
    <div className={`playerProfile${position}`}>
      <div className={`playerBet${position}`} style={style}>
        <span>&#10050;</span>${bet}
      </div>
      <div className={`playerCards${position}`}>
        {cards.map((card, i) => (
          <Card
            key={i}
            number={cardSet[0][0] === "" ? "undef" : card[0]}
            suit={cardSet[0][0] === "" ? "undef" : card[1]}
            show={showHand}
          />
        ))}
      </div>
      <div className="playerDetailsWrapper">
        <img className="circleCrop" src={pic} alt="user" />
        <div className="playerNameMoneyWrapper">
          <div className="playerDetails">{name}</div>
          <div className="playerTotalMoney">${money}</div>
        </div>
      </div>
    </div>
  );
};

export default Player;
