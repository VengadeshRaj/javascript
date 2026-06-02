//     *
//    **
//   ***
//  ****
// *****

const n = 5;

for(let i = n; i>0; i--){
    let rows = "";
    for(let j=1;j<=n;j++){
        if(i == j || i<j) rows = rows+"*"
        else rows = rows + " "
    }
    console.log(rows)
}