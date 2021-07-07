import {gql} from '@apollo/client';

const getEpisodes = gql`
  query GetEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
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
