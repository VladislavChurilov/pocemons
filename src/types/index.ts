interface Pokemons {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<Stat>;
}

interface Pokemon {
  abilities: { ability: Stat }[];
  base_experience: number;
  id: number;
  height: number;
  name: string;
  weight: number;
  stats: { base_stat: number; effort: number; stat: Stat }[];
  sprites: {
    front_default: string;
  };
}
interface Stat {
  name: string;
  url: string;
}
export type { Pokemons, Pokemon, Stat };
