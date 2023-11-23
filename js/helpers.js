export const getData = async function (url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const movie = await response.json();
    return movie;
  } catch (err) {
    throw err;
  }
};
