import fetch from 'node-fetch';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '19668c176bmsha76050a4b747794p188878jsnd448d56c8fd9',
    'x-rapidapi-host': 'exercises-by-api-ninjas.p.rapidapi.com'
  }
};
let baseURL = 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises';

export const getExerciseData = async (muscle, type = '', difficulty = '') => {
  try {
    let url = `${baseURL}?muscle=${muscle}`;
    if (type) url += `&type=${type}`;
    if (difficulty) url += `&difficulty=${difficulty}`;

    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching exercise data:', error);
    throw error;
  }
};
