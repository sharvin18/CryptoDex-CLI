
/// Validation for setting the key.
const isRequired = input => input == '' ? 'This value is required': true;

module.exports = { isRequired }