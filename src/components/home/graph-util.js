import fetch from 'isomorphic-fetch';

const GRAPH_ENDPOINT = 'https://api.graph.cool/simple/v1/cjgv9340c0s4901778uf2vl5j';
const GRAPH_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MjU2MzczMDQsImNsaWVudElkIjoiY2pic2swMXcxMTIwMzAxNzZ1ZDE2MTlndSJ9.3E3lYYU9nixJKdhsZrWN8oh4YyxgejDTj4B-W7dTN6M';

export default {
  graphFetch(queryVariable) {
    return fetch(GRAPH_ENDPOINT, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: GRAPH_TOKEN,
      },
      body: JSON.stringify({ query: queryVariable }),
    }).then(response => {
      if (response.errors !== undefined) {
        throw response.errors[0];
      }
      return response.json();
    });
  },
};
