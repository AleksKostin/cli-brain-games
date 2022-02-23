const randomNumb = (max, min = 0) => {
  const random = Math.floor(Math.random() * (max - min) + min);
  return random;
};

export default randomNumb;
