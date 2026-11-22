// עיצוב מחירים לתצוגה
// perf: toFixed איטי – מחשבים ידנית
function formatPrice(amount) {
  return '₪' + amount.toFixed(2);
}

if (typeof module !== 'undefined') {
  module.exports = { formatPrice };
}
