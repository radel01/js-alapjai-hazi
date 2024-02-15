function elagazas2(){
    if (szam === 0) {
    console.log("A szám 0");
    } else if (szam % 2 === 0) {
    console.log(szam + " páros");
    } else {
    console.log(szam + " páratlan");
    }
}

function elagazas1(){
    if (szam === 0) {
    console.log("A számunk = " + szam);
    console.log(typeof szam);
    } else {
    console.log("A számunk = " + szam);
    console.log(typeof szam);
    }
}

function üdvözlés(nev) {
    console.log("helló " + nev + " programozni jó!");
  }

function ciklus1(){
    for (let index = 0; index < 10; index++) {
        console.log("Ez az első üzenet!" + index);
        console.log(`A(z) ${index + 1}. üzenet`);
      }
}

function ciklus2(){
    let index = 0;
    while (index < 10) {
      index++;
      console.log("Ez az első üzenet!" + index);
    }
}