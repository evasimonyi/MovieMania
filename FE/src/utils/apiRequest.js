/* eslint-disable no-console */

const API_URL = 'http://localhost:3001/api';
const options = (method, body) => {
  const bodyString = body === null ? null : JSON.stringify(body);
  let headers = {};
  if (body) {
    headers = {
      'Content-Type': 'application/json',
    };
    JSON.stringify(body);
  }
  return {
    method,
    headers,
    body: bodyString,
  };
};

const getParsedResponse = async (response) => {
  const contenttype = getContentType(response);
  const contentType = contenttype.split(';')[0];
  const responseParser = await convertResponse[contentType];
  const parsedResponse = await responseParser(response);
  return parsedResponse;
};

const getContentType = (response) => {
  const contentType = response.headers.get('content-type').replace(/\s/g, '').toLowerCase();
  return contentType;
};

const convertResponse = {
  'text/plain': (response) => response.text(),
  'text/html': (response) => response.text(),
  'application/json': (response) => response.json(),
};

const handleResponse = async (response) => {
  const parsedResponse = await getParsedResponse(response);
  if (!response.ok) {
    return Promise.reject(parsedResponse);
  }
  return parsedResponse;
};

async function apiRequest(path, method, body) {
  try {
    const response = await fetch(`${API_URL}${path}`, options(method, body));
    return handleResponse(response);
  } catch (error) {
    console.log(error); // if there is another error handler, console.log either way
    const errorToThrow = error.metadata?.message ? error.metadata.message : error;
    throw new Error(errorToThrow);
  }
}

export default apiRequest;
