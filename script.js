function letterCombinations(input_digit) {
  if (!input_digit || input_digit.length === 0) {
    return [];
  }

  const mapping = {
    '0': ['0'],
    '1': ['1'],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };

  const result = [];

  function backtrack(index, current) {
    if (index === input_digit.length) {
      result.push(current);
      return;
    }

    const letters = mapping[input_digit[index]];
    for (let ch of letters) {
      backtrack(index + 1, current + ch);
    }
  }

  backtrack(0, "");
  return result;
}

module.exports = letterCombinations;
