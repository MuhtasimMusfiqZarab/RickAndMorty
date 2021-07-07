import {gql} from '@apollo/client';

const getCharacters = gql`
  query GetCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
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
`;

export default getCharacters;
