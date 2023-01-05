
// You should implement your task here.


module.exports = function towelSort (matrix) {
  let count = [];
  if (matrix === undefined){
    return count;
  };
  for (let i = 0; i < matrix.length; i++){
    if (i === 0 || i % 2 === 0){
      count = count.concat(matrix[i]);
    } else {
      count = count.concat(matrix[i].reverse());
    };    
  };
  return count;
};
