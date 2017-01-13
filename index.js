exports.sanitize = function(word) {
  console.log('running')
  return word.toLowerCase().replace(/-/g, ' ');
}
