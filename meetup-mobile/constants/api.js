import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

const fakeGroupId = '59a3890aedbfb4227c186374'

export const fetchMeetups = () =>
  fetch('http://localhost:3000/api/meetups/')
    .then(res => res.json())
