import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import * as S from "./styles";

import SearchImg from "@/assets/search.svg";
import { ChangeEvent, useState } from "react";
type OnSearchType = (value: string) => void;
type props = {
  onSearch: OnSearchType
}
function Search({ onSearch }:props) {
  const [search, setSearch] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const handleButtonClick = () => {
    onSearch(search); 
  };

  return (
    <S.Body>
      <Input
        placeholder="Pesquise uma palavra-chave"
        onChange={handleInputChange}
        value={search}
      >
      </Input>
      <Button
        onClick={handleButtonClick}
      >
        <img src={SearchImg} alt="Search"></img>
      </Button>
    </S.Body>
  );
}

export default Search;
