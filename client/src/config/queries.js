import gql from 'graphql-tag';

export default {
      contributors: gql`
            query contributors($where: UserInput) {
                  contributors(where: $where) {
                        value
                        currency
                  }
            }
      `,
};
