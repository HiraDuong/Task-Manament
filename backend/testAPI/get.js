const { APIpath } = require("../config/APIpath");
const subPath = '/tasks/1';
const getPath = `${APIpath}${subPath}`;

const fetchData = async () => {
  try {
    const response = await fetch(getPath, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
