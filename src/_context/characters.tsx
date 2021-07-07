import React, {createContext, useContext, ReactNode} from 'react';
import {useQuery, gql} from '@apollo/client';

const CharactersContext = createContext({
  characters: null,
});

interface Props {
  children: ReactNode;
}

function CharactersProvider({children}: Props) {
  const {data, error, loading, refetch} = useQuery(
    gql`
      query {
        characters {
          info {
            count
          }
          results {
            id
            name
            image
          }
        }
      }
    `,
  );

  return (
    <CharactersContext.Provider
      value={{
        characters: data?.characters?.results,
      }}>
      {children}
    </CharactersContext.Provider>
  );
}

const useCharacters = () => useContext(CharactersContext);

export {CharactersProvider, useCharacters};
