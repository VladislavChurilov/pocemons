import { FC } from "react";
import styles from "../Pocemon.module.css";
import { Draggable } from "react-beautiful-dnd";
import PocemonsMap from "../../../types/map.ts";

interface pokemonContainerProps {
  name: string;
  id: number;
  index: number;
  handleNameClick: () => void;
}

const Pokemons: FC<pokemonContainerProps> = ({
  name,
  id,
  index,
  handleNameClick,
}) => (
  <Draggable index={index} draggableId={"pokemon-" + id}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={styles.pokemonContainer}
      >
        <p className={styles.name} onClick={handleNameClick}>
          {PocemonsMap[name] || name}
        </p>
      </div>
    )}
  </Draggable>
);

export default Pokemons;
