const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor( matrix ) {

    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate (direction) {
    // do work here
    // let PA = this.matrix;
    let newPA = [];
    if(direction === Direction.CW ){
  

    for (var i = 0; i <= this.matrix.length-1; i++){
      let newCA = [];
      newPA.push(newCA);
      
     for (var j = this.matrix.length-1; j >= 0; j--){ 
        newCA.push(this.matrix[j][i]);
     }
    }
  }else{

    for (var k = 0; k <= this.matrix.length-1; k++){
     let newCA = [];
      newPA.unshift(newCA);
      
     for (var l = this.matrix.length-1; l >= 0; l--){ 
        newCA.unshift(this.matrix[l][k]);
     }
    }

  }

  this.matrix = newPA;
    // must be a valid Direction, see Direction.js

  }
};
