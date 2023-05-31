let i =1;
while(i<= 10){

    console.log(i);
    console.log(i*2);
    i++;
}

let j=2;
do {
    console.log('j', j*2);
    j++;
} while (j <= 10);

for (let k =1; k <= 10;k++){

    console.log('k', k*2);
}

for (let i =1, j =5; j <= 5 ;i++){

    console.log('i', i);
    console.log('j', j*i);
}

let a =1;
for( ; a < 5; a++){

    console.log('a', a);
    
}

let b =1;
for( ; b < 5; ){

    console.log('b', b);
    
}

let sum = 0;
while (true) {

    const val = prompt(' Entre the Sum of Number');

    if(!val) break;

    //sum = ! val ? brak : sum + +val; // break is not allowed in Turnary

     sum+=val;

}

console.log(sum);

