function calculateIntrest(principal, rate, time) {
    let intrest = principal * rate * time;
    return intrest;
}
let totalIntrest = calculateIntrest(1000, 0.05, 3);
console.log("Total intrest earned:", totalIntrest);