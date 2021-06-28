export default function Data() {
  const getItem = (name) => localStorage.getItem(name);

  const getItemParse = (name) => {
    if (getItem(name) === null) return null;
    return JSON.parse(localStorage.getItem(name));
  };

  const setItem = (name, value) => localStorage.setItem(name, value);

  const setItemStringify = (name, value) => localStorage.setItem(name, JSON.stringify(value));

  const clear = () => localStorage.clear();

  return {
    getItem, setItem, getItemParse, setItemStringify, clear,
  };
}
