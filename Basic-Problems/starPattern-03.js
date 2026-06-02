

const n = 5;

for(let i =n;i>0;i--){
    let rows = "";
    for(let j=0;j<n;j++){ // 5 1
        if(i == j || i<j) {
            console.log(i,j)
            rows = rows+"*"
        }
        else rows = rows = "-"
    }
    console.log(rows)
}