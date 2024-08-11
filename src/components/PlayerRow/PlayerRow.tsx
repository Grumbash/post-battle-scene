import { memo } from "react";
import { Player } from "../../types/Player";
import "./PlayerRow.css";


type PlayerRowProps = {
  player: Player;
};

export const PlayerRow = memo(({ player }: PlayerRowProps) => (
  <div className={`player-row ${player.status.toLowerCase()}`}>
    <span className="player-nickname">{player.nickname}</span>
    <span className="player-score">{player.score}</span>
    <span className="player-status">{player.status}</span>
    <span className="player-tooltip">
      Kills: {player.kills}, Deaths: {player.deaths}
      <button className="friend-request-button">Add Friend</button>
    </span>
  </div>
));
