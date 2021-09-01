const className = (id, name, type) => {
  const element = document.getElementById(id);
  if (type === "add") element.classList.add(name);
  if (type === "remove" && element) element.classList.remove(name);
};

export default className;
