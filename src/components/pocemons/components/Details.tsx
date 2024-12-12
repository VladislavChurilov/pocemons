import { FC } from "react";
import { useGetPokemonQuery } from "../../../store/pokemons";
import styles from "../Pocemon.module.css";
import PocemonsMap, { AbilityMap } from "../../../types/map.ts";

interface pokemonDetailsProps {
  id: number;
}

const Details: FC<pokemonDetailsProps> = ({ id }) => {
  const { data, isLoading } = useGetPokemonQuery(id);

  return isLoading ? (
    "Loading"
  ) : (
    <div className={styles.pokemon_details_container}>
      <h1 className={styles.pokemon_name}>
        {data?.name ? PocemonsMap[data.name] || data.name : ""}
      </h1>
      <img
        width={200}
        height={200}
        src={data?.sprites.front_default}
        alt={data?.name || "pocemon"}
      />
      <div className={styles.abilities}>
        <p>Abilities:</p>
        <ul className={styles.abilities_container}>
          {data?.abilities.map((item, i) => {
            const ability = item?.ability.name
              ? AbilityMap[item.ability.name] || item.ability.name
              : "";
            return (
              <li key={item?.ability.name + i}>
                {data?.abilities.length - 1 === i ? ability : `${ability}, `}
              </li>
            );
          })}
        </ul>
      </div>
      <p style={{ color: "yellow", fontSize: "20px", marginBottom: "10px" }}>
        Characteristics:
      </p>
      <ul className={styles.stats}>
        {data?.stats.map((e) => {
          return (
            <li key={e.stat.name} className={styles.stat}>
              <span>{e.stat.name}:</span>
              {e.base_stat}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Details;
