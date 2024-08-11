export type Player = {
  nickname: string;
  score: number;
  status: "Alive" | "Dead";
  kills: number;
  deaths: number;
  id: number;
};
