/* Q> create an array of companies to store -> Bloomberg, Microsoft, Uber, Google, IBM, Netflix
        a. Remove First company from array
        b. Replace Uber with Ola
        c. Add amazon at the end    */

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix" ];
console.log(companies);

companies.splice(0,1); // a
console.log(companies);

companies.splice(1,1,"Ola"); // b
console.log(companies);

companies.splice(companies.length, 0,"Amazon");
console.log(companies);