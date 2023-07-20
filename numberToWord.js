function numberToWords(num) {
  const singleDigits = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const specialCases = [
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
    "sixteen", "seventeen", "eighteen", "nineteen"
  ];

  
  function convertGroup(num) {
    let result = "";

    const hundreds = Math.floor(num / 100);
    num %= 100;

    if (hundreds > 0) {
      result += singleDigits[hundreds] + " hundred ";
    }

    if (num > 0) {
      if (num >= 20) {
        const tensDigit = Math.floor(num / 10);
        result += tens[tensDigit] + " ";
        num %= 10;
      } else if (num >= 10) {
        result += specialCases[num - 10] + " ";
        return result.trim();
      }

      if (num > 0) {
        result += singleDigits[num] + " ";
      }
    }

    return result.trim();
  }

  if (num === 0) {
    return "zero";
  }

  let result = "";
  let groups = [];


  while (num > 0) {
    groups.push(num % 1000);
    num = Math.floor(num / 1000);
  }

 
  const magnitudes = ["", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion"];
  for (let i = 0; i < groups.length; i++) {
    const groupWords = convertGroup(groups[i]);
    if (groupWords) {
      result = groupWords + magnitudes[i] + " " + result;
    }
  }

  return result.trim();
}

// Test the function
const inputNumber = 125403;
const words = numberToWords(inputNumber);
console.log(words); 
