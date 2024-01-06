/*

*
**
***
****

*/

function pattern1(n){
    for(let row = 1; row <= n; row++){
        let str = "";
        for(let col = 1; col <= row; col++){
            str += "*";
        }
        console.log(str)
    }
}

// pattern1(4);

/*

   *
  **
 ***
****

*/

function pattern2(n){
    for(let row = 1; row <= n; row++){
        let str = "", spaces = n - row;
        for(let j = 1; j <= spaces; j++){
            str += " ";
        }
        for(let col = 1; col <= row; col++){
            str += "*";
        }
        console.log(str)
    }
}  

// pattern2(4);

/*

   *
  ***
 *****
*******

*/

function pattern3(n){
    for(let row = 1; row <= n; row++){
        let str = "";
        for(let j = 1; j <= n - row; j++){
            str += " ";
        }
        for(let col = 1; col <= 2 * row - 1; col++){
            str += "*"
        }
        console.log(str);
    }
}

// pattern3(4)

/*

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
    
    n is always odd here n = 5 
     
*/

function upperTriangle(n){
    for(let row = 1; row <= n; row++){
        let str = "";
        for(let space = 1; space <= n - row; space++){
            str += " ";
        }
        for(let star = 1; star <= (2 * row - 1); star++){
            str += "*";
        }
        console.log(str)
    }
}
function lowerTriangle(n){
    for(let row = 1; row <= n-1; row++){
        let str = "";
        for(let space = 1; space <= row; space++){
            str+= " ";
        }
        for(let star = 1; star <= (2 * (n - row) - 1); star++){
            str += "*";
        }
        console.log(str)
    }
}

function pattern4(n){
    upperTriangle(n);
    lowerTriangle(n);
}

pattern4(5)
