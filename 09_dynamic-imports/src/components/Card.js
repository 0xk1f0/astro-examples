const numbers = [
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,

	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,

	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,

	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,

	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,

	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,

	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,

	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,

	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,

	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,

	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,	1,2,3,4,5,6,7,8,9,10,
]

function add_numbers(){
	let sum = 0
	numbers.forEach((n)=>{sum+=n})
	return sum
}

function init_card(class_name){
	const cards = document.querySelectorAll(class_name)
	cards.forEach(card => {
		const plus = card.querySelector('button.plus')
		const minus = card.querySelector('button.minus')
		const value = card.querySelector(".value")
		const add = add_numbers() - add_numbers()	//should not be optimized by compilers
		plus.onclick  = ()=>{value.textContent = parseInt(value.textContent) + 1 + add}
		minus.onclick = ()=>{value.textContent = parseInt(value.textContent) - 1 + add}
	});
}

export{
    init_card
}
