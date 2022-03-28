import axios from 'axios';

const GENERAL_URL = 'http://localhost:3001';

export async function createCard(details) {
  const {
    songName,
    description,
    imageURL,
  } = details;

  await axios.post(`${GENERAL_URL}/api/createCards`, {
    songName, description, imageURL,
  }).then((res) => {
    res.send('ok');
  }).catch(() => 'something went wrong');
}

export async function getAllCards() {
  await axios.get(`${GENERAL_URL}/api/getAllCards`).then((res) => {
    res.send('ok');
  }).catch(() => 'something went wrong');
}
