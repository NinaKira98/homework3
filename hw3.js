const threeArg = function (num1, num2, num3) {
	return (num1 + num2) / num3;
};

const noArg = function () {
	return "This function takes no arguments and returns this";
};

const noReturn = function (val1, val2) {
	console.log(val1 % val2);
};

const fullName = function (firstName, lastName) {
	return firstName + " " + lastName;
};

const length = function (str1, str2, str3) {
	const strL1 = str1.length;
	const strL2 = str2.length;
	const strL3 = str3.length;

	if (strL1 >= strL2 && strL1 >= strL3) {
		return str1;
	}
	else if (strL2 >= strL1 && strL2 >= strL3) {
		return str2;
	}
	else  {
		return str3;
	}
};

const compare = function (num1, num2) {
	if (num1 === num2) {
		return 0;
	}
	else if (num1 > num2) {
		return 1;
	}
	else {
		return -1;
	}
};

const firstTy = function (val1, val2, val3) {
	return val1 || val2 || val3 || false;
};
