// naive title case that capitalizes first letter of every word separated by
// whitespace in a string. Will fail on words like "McDonalds" or "O'Neill"
export function toTitleCase (str) {
  return str.replace(
    /\w\S*/g,
    function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}
// Replaces all instances of hyphens with spaces inside a string
export function deSlugify (str) {
  return str.replace(/-/g, ' ')
}
