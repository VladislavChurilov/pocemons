import { FC, useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Pokemons from "./components/Pokemons.tsx";
import { getIdFromUrl } from "../../helpers/helpers.ts";
import { useGetPokemonsQuery } from "../../store/pokemons";
import { useAppSelector } from "../../store";
import Details from "./components/Details.tsx";

const PocemonsPage: FC = () => {
  const { limit } = useAppSelector((state) => state.pokemons);
  const { data, isLoading } = useGetPokemonsQuery(limit);
  const [pokemons, setPokemons] = useState<
    { name: string; url: string }[] | undefined
  >();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleNameClick = (id: number) => {
    setSelectedId(id);
  };

  useEffect(() => {
    if (!isLoading && data) {
      setPokemons(data.results);
    }
  }, [isLoading, data]);

  const handleOnDragEnd = (result: any) => {
    const items = Array.from(pokemons!);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setPokemons(items);
  };

  return (
    <div className="pocemons_container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="pokemons">
            {(provided) => (
              <div
                className="names-container"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {pokemons?.map((item, i) => {
                  const id = getIdFromUrl(item.url);
                  return (
                    <Pokemons
                      index={i}
                      key={item.url}
                      name={item.name}
                      id={id}
                      handleNameClick={() => handleNameClick(id)}
                    />
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
      {selectedId && <Details id={selectedId} />}
    </div>
  );
};

export default PocemonsPage;
