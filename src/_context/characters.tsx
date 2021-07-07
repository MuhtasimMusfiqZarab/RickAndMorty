import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import {useLazyQuery} from '@apollo/client';

import getCharacters from '../api/query/get-characters';

const CharactersContext = createContext({
  characters: null,
  getMoreCharacters: () => {},
  setPage: (value: number) => {},
  loading: true,
});

interface Props {
  children: ReactNode;
}

function CharactersProvider({children}: Props) {
  const [allCharacters, setAllCharacters] = useState<any>([]);
  const [page, setPage] = useState<number>(1);

  const [GetCharacters, {data, error, loading, refetch}] = useLazyQuery(
    getCharacters,
    {
      variables: {
        page,
      },
    },
  );

  useEffect(() => {
    if (data?.characters?.results?.length > 0) {
      setAllCharacters((prevState: any) => {
        return [...prevState, ...data?.characters?.results];
      });
    }
  }, [data]);

  return (
    <CharactersContext.Provider
      value={{
        characters: allCharacters,
        getMoreCharacters: GetCharacters,
        setPage,
        loading,
      }}>
      {children}
    </CharactersContext.Provider>
  );
}

const useCharacters = () => useContext(CharactersContext);

export {CharactersProvider, useCharacters};
