import axios from 'axios';

const GENERAL_URL = 'http://localhost:3001';

export async function handleSignUp(cred) {
  const {
    firstName, lastName, email, username, password,
  } = cred;

  await axios.post(`${GENERAL_URL}/api/signup`, {
    firstName, lastName, email, username, password,
  }).then((res) => {
    res.send('ok');
  }).catch(() => 'something went wrong');
}

export async function handleSignIn(cred) {
  console.log(cred, 'hey');
  const { username, password } = cred;

  await axios.post(
    `${GENERAL_URL}/api/signin`,
    {
      username,
      password,
    },
  ).then((res) => {
    res.send('ok');
  }).catch(() => 'something went wrong');
}
