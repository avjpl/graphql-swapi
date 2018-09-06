const axios = require('axios');
const { isArray, isString } = require('lodash');

const fetchData = async (field) => {
  if (isArray(field)) {
    try {
      return field.map(async item => {
        const { data } = await axios({
          url: item,
          baseURL: 'https://swapi.co/api/'
        });

        return data;
      });
    } catch (e) {
      console.log(e);
    }
  } else if (isString(field) && !isArray(field)) {
    try {
      const { data } = await axios({
        url: field,
        baseURL: 'https://swapi.co/api/'
      });

      return data;
    } catch (e) {
      console.log(e);
    }
  } else {
    return null;
  }
}

module.exports = {
  fetchData,
};
