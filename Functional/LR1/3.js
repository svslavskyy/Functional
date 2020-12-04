const multiplicity = (a, b) =>{
    if(b>0)
        return a + multiplicity(a, b - 1);
    else if(b<0)
        return  -a + multiplicity(a, b + 1);
    return 0;
};

function main() {
    console.log(`multiplicity: ${multiplicity(2, -2)}`);
    console.log(`multiplicity: ${multiplicity(4, 5)}`);
    console.log(`multiplicity: ${multiplicity(-8, 8)}`);
}

main();
