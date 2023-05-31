// Naive iterative solution to calculate pow(x, n)
function power( x, n)
{
    // Initialize result to 1
    let pow = 1;
 
    // Multiply x for n times
    for (let i = 0; i < n; i++) {
        pow = pow * x;
    }
 
    return pow;
}
 
// Driver code
 
    let x = 2;
    let n = 3;
 
    // Function call
    let result = power(x, n);
    console.log( result );
 