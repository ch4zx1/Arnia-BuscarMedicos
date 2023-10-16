import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import * as S from "./styles";

import SearchImg from "@/assets/search.svg";
import { ChangeEvent, useState } from "react";

function Search() {
  const [search, setSearch] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
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
        onClick={() => {
          console.log(search);
        }}
      >
        <img src={SearchImg} alt="Search"></img>
      </Button>
    </S.Body>
  );
}

export default Search;
