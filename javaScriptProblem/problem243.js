//

function canNested(arr1, arr2) {
  let a1L = arr1[0];
  let a1S = arr1[0];

  let a2L = arr2[0];
  let a2S = arr2[0];

  for (i = 0; i <= arr1.length - 1; i++) {
    if (arr1[i] > a1L) {
      a1L = arr1[i];
    } else if (arr1[i] < a1S) {
      a1S = arr1[i];
    }
  }

  for (j = 0; j <= arr2.length - 1; j++) {
    if (arr2[j] > a2L) {
      a2L = arr2[j];
    } else if (arr2[j] < a2S) {
      a2S = arr2[j];
    }
  }
  if (a1S > a2S && a1L < a2L) {
    return true;
  } else {
    return false;
  }
}

console.log(canNested([1,2,3,4], [0,6]));//true

