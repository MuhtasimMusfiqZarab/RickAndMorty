import {gql} from '@apollo/client';

const getLocations = gql`
  query {
    locations {
      results {
        id
        name
        type
        dimension
        residents {
          id
          name
        }
        created
      }
    }
  }
`;

export default getLocations;
