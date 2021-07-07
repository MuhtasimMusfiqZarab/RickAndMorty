import {gql} from '@apollo/client';

const getLocations = gql`
  query getLocations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        count
        pages
      }
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
