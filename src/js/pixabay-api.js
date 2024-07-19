const getArr = userParam => {
  const searchParams = new URLSearchParams({
    key: '45012251-1fd54445ad7ef6677a1cc96fc',
    q: userParam,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

export default getArr;