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
          results {
            name
          }
        }
      }
    `,
  );

  console.log('I got the data', data);

  return (
    <CharactersContext.Provider
      value={{
        characters: data?.characters?.results,
      }}>
      {children}
    </CharactersContext.Provider>
  );
}

const useEpisodes = () => useContext(CharactersContext);

export {CharactersProvider, useEpisodes};
