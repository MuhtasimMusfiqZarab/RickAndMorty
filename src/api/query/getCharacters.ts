import {gql} from '@apollo/client';

const getCharacters = gql`
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
`;

export default getCharacters;
