export function matMul(A, B) {
  if (!A[0].length || !B.length || A[0].length !== B.length) {
    throw new Error("Unexpected matrix size.");
  }
  var result = new Array(A.length).fill(0).map(row => new Array(B[0].length).fill(0));

  return result.map((row, i) => {
      return row.map((_, j) => {
          return A[i].reduce((sum, elm, k) => sum + (elm*B[k][j]), 0)
      })
  })
}

export function getMassCenter(base_mat) {
  let mass_center = new Array(base_mat[0].length).fill(0);
  return mass_center.map((_, i) => {
    return base_mat.reduce((sum, row) => sum + row[i], 0) / base_mat.length;
  })
}
