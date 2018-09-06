const axios = require('axios');

const { fetchData } = require('./utils');

module.exports = {
  Query: {
    getPerson: async (_, { id }) => {
      try {
        const { data } = await axios({
          url: `people/${id}`,
          baseURL: 'https://swapi.co/api/'
        });

        return data;
      } catch (e) {
        console.log(e);
      }
    }
  },
  Person: {
    homeworld: async (parent, args, ctx, { fieldName }) => await fetchData(parent[fieldName]),
    films: async (parent, args, ctx, { fieldName }) => await fetchData(parent[fieldName]),
    species: async (parent, args, ctx, { fieldName }) => await fetchData(parent[fieldName]),
  }
};
