const replaceUrl = (path) => {
  window.history.replaceState({}, document.title, path);
};

export default replaceUrl;
