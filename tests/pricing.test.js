const { calcTotal, maxTickets } = require('../js/pricing');

test('two tickets cost 724', function () { assertEq(calcTotal(2), 724); });
test('one ticket costs 362', function () { assertEq(calcTotal(1), 362); });
test('regular customers may buy up to 8', function () { assertEq(maxTickets(), 8); });
test('members receive 20% off and have a 6-ticket cap', function () {
	assertEq(calcTotal(2, true), 584);
	assertEq(maxTickets(true), 6);
	assertEq(calcTotal(6, true), 1752);
	assertEq(calcTotal(7, true), null);
});
test('students receive 15% off and members do not stack discounts', function () {
	assertEq(calcTotal(2, false, true), 619);
	assertEq(calcTotal(2, true, true), 584);
});
