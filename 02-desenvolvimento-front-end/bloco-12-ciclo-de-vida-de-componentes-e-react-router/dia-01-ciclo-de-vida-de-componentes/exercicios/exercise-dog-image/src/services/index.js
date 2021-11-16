const fetchDogApi = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const json = await response.json();
  return json;
}

export default fetchDogApi;