const getUserData = () => {
  return getData();
};

const getData = () => {
  const url = new URL(window.location.href);
  const searchParams = url.searchParams;
  const keys = [...searchParams.keys()];

  return keys.reduce(
    (obj, key) => ({ ...obj, [key]: searchParams.get(key) }),
    {}
  );
};

export default getUserData;
