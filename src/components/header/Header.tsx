import { ChangeEvent, FC } from "react";
import { setLimit } from "../../store/pokemons";
import { useAppDispatch } from "../../store";

const Header: FC = () => {
  const dispatch = useAppDispatch();

  const handleLimitChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLimit(Number(event.target.value)));
  };

  return (
    <header className={"header"}>
      <select onChange={handleLimitChange}>
        <option value={10}>10 pokemons</option>
        <option value={30}>30 pokemons</option>
      </select>
    </header>
  );
};

export default Header;
