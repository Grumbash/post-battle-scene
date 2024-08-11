import { useCallback } from "react";
import { Team } from "../../types/Team";
import { PlayerRow } from "../PlayerRow/PlayerRow";
import "./PlayersTable.css";

type TableProps = {
  team1: Team;
  team2: Team;
};

export const PlayersTable = ({ team1, team2 }: TableProps) => {
  const getFullTitle = useCallback((title: string, isWinning: boolean) => {
    return `${title} - ${isWinning ? "Winning" : "Loosing"}`;
  }, []);

  return (
    <>
      <div className="team-column">
        <h2
          className={`team-name ${team1.isWinners ? "team-green" : "team-red"}`}
        >
          {getFullTitle(team1.title, team1.isWinners)}
        </h2>
        {team1.players.map((player) => (
          <PlayerRow key={player.id} player={player} />
        ))}
      </div>
      <div className="team-column">
        <h2
          className={`team-name ${team2.isWinners ? "team-green" : "team-red"}`}
        >
          {getFullTitle(team2.title, team2.isWinners)}
        </h2>
        {team2.players.map((player) => (
          <PlayerRow key={player.id} player={player} />
        ))}
      </div>
    </>
  );
};
