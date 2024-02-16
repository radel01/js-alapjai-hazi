export function összegzes(szam){
    let index = 0;
    let ossz = 0;
    while (index <= szam) {
        ossz += index;
        index++;
    }
    return ossz;
}
