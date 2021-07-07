import {gql} from '@apollo/client';

const getCharacters = gql`
  query GetCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
          type
          dimension
          created
        }
        location {
          name
        }
        image
        episode {
          name
        }
        created
      }
    }
  }
`;

export default getCharacters;
