const debounce = (fn, delay) => {
  let id; // will be in the closure of the returned function
  // console.log(`id at immediate load: ${id}`);
  return (...args) => {
    // console.log(`previous id: ${id}`);
    if (id) clearTimeout(id);
    id = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export { debounce };
