import { memo } from "react";
import "./PostBattleScreen.css";
import teams from "../mocks/teams.json";
import { PlayersTable } from "../components/PlayersTable/PlayersTable";
import { Team } from "../types/Team";

const playersTeam1 = teams.team1 as Team;
const playersTeam2 = teams.team2 as Team;

const PostBattleScreen = memo(() => {
  return (
    <div className="post-battle-screen">
      <PlayersTable team1={playersTeam1} team2={playersTeam2} />
    </div>
  );
});

export default PostBattleScreen;
