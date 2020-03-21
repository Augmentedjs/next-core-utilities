
/**
 * The Hamming Distance is the number of different symbols between two
 * strings/numbers (equal length). It can be also considered as the number of
 * changes required to convert from one input to another.
 *
 * @param {number|string} num1 First number
 * @param {number|string} num2 Second number
 * @returns {number} the distance
 */
const hammingDistance = (num1, num2) => {
  let distance = 0;
  // Convert the numbers to their binary string representations
  let binA = num1.toString(2);
  let binB = num2.toString(2);

  // We need to zero-pad if the resulting binary string representations are not of equal length
  let diff = binB.length - binA.length;

  // binary string representations of num1 is longer
  if (diff > 0) {
    let pad = '';
    while (diff) {
      pad += '0';
      diff--;
    }
    binA = pad + binA;
  // binary string representations of num2 is longer
  } else if (diff < 0) {
    let pad = '';
    while (diff) {
      pad += '0';
      diff++;
    }
    binB = pad + binB;
  }

  // Go through each character of the binary string representations and compare
  binA.split('').forEach((n, i)=> {
    // If there is a difference, increase the distance value
    if (n !== binB[i]) distance++;
  });
  return distance;
}

export default hammingDistance;
