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
  setSearchTerm: (value: string) => {},
  searchTerm: null,
  totalPages: 0,
  currentPage: 0,
  setValue: (value: string) => {},
  value: null,
});

interface Props {
  children: ReactNode;
}

function CharactersProvider({children}: Props) {
  const [allCharacters, setAllCharacters] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState<any>(null);
  const [value, setValue] = useState<any>(null);

  const [page, setPage] = useState<number>(1);

  const [GetCharacters, {data, error, loading, refetch}] = useLazyQuery(
    getCharacters,
    {
      variables: {
        page,
        filter: {
          name: searchTerm,
          status: value,
        },
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

  const changeSearchTerm = (term: string) => {
    setAllCharacters([]);
    setSearchTerm(term);
    setPage(1);
  };

  const changeFilterValue = (term: string) => {
    setAllCharacters([]);
    setValue(term);
    setPage(1);
  };

  return (
    <CharactersContext.Provider
      value={{
        characters: allCharacters,
        getMoreCharacters: GetCharacters,
        setPage,
        loading,
        setSearchTerm: changeSearchTerm,
        searchTerm,
        totalPages: data?.characters?.info?.pages,
        currentPage: page,
        value,
        setValue: changeFilterValue,
      }}>
      {children}
    </CharactersContext.Provider>
  );
}

const useCharacters = () => useContext(CharactersContext);

export {CharactersProvider, useCharacters};
