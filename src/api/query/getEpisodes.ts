import {gql} from '@apollo/client';

const getEpisodes = gql`
  query {
    episodes {
      results {
        id
        name
        air_date
        episode
        characters {
          id
          name
        }
        created
      }
    }
  }
`;

export default getEpisodes;
