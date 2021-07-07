import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import {useQuery} from '@apollo/client';

import getCharacters from '../api/query/getCharacters';

const CharactersContext = createContext({
  characters: null,
});

interface Props {
  children: ReactNode;
}

function CharactersProvider({children}: Props) {
  const [allCharacters, setAllCharacters] = useState<any>(null);

  const {data, error, loading, refetch} = useQuery(getCharacters);

  useEffect(() => {
    if (data?.characters?.results?.length > 0) {
      setAllCharacters((prevState: any) => {
        return {...prevState, data};
      });
    }
  }, [data]);

  return (
    <CharactersContext.Provider
      value={{
        characters: allCharacters?.data?.characters?.results,
      }}>
      {children}
    </CharactersContext.Provider>
  );
}

const useCharacters = () => useContext(CharactersContext);

export {CharactersProvider, useCharacters};
