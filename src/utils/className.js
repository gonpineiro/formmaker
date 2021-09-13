const className = (id, name, type) => {
  const element = document.getElementById(id);
  console.log(element);
  if (element && type === "add") element.classList.add(name);
  if (element && type === "remove" && element) element.classList.remove(name);
};

export default className;
