export function chunk(array, size) {
  return Array.from({
    length: Math.ceil(array.length / size)
  }, (v, i) => array.slice(i * size, i * size + size));
}