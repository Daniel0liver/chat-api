import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({
    message: 'request a get',
  });
});

app.post('/', (request, response) => {
  return response.json({
    message: 'request a post',
  });
});

app.delete('/', (request, response) => {
  return response.json({
    message: 'request a delete',
  });
});

app.patch('/', (request, response) => {
  return response.json({
    message: 'request a patch',
  });
});

app.listen(3333, () => console.log('Server is running on port 3333'));
