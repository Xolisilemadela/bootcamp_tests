var regNumbersForPaarl = [];
function allPaarl(regNumbersStr) {
  const regNumbers = regNumbersStr.split(', ');
  for (var i=0;i<regNumbers.length;i++) {
    var Paarl = regNumbers[i];
 if (Paarl.startsWith('CJ ')) {
     regNumbersForPaarl.push(Paarl);
  }
  }
  return regNumbersForPaarl;
} 