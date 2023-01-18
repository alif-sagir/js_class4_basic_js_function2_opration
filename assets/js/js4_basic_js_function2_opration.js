console.log();
console.log();
console.log();
console.log("js4_basic_js_function2_opration");
console.log();
console.log();
console.log();

// -----------4nd solve (Uses the short function and using objects)-----------

let employee_information = {

    first_name: "Rashed",
    last_name: "Mia",
    old: 65,
    salary: 15000
}

const retired_employee_details = (name, retired_tk) => name + " " + retired_tk;

let result = retired_employee_details("Name : " + employee_information.first_name + " " + employee_information.last_name+"\n",
    ("Retired tk Pabay : " + (employee_information.old * .3) * employee_information.salary));
console.log(result);









// -----------3nd solve (Uses the big function and using objects)-----------
/*
let office_cliend = {
    old: 60,
    salary: 20000
}

function old_salary_collect(cliend_information={}) {
    return cliend_information;
}
let old_information = old_salary_collect(office_cliend.old)

let salary_information = old_salary_collect(office_cliend.salary)

function retired_tk(old=0, salary=0) {
    return calculate = ((old * .3) * salary)
}
let total_salary = retired_tk(old_information = 65, salary_information = 25000);
console.log(total_salary);

total_salary = retired_tk(old_information = 60, salary_information = 20000);
console.log(total_salary);

total_salary = retired_tk(old_information = 60, salary_information = 20000);
console.log(total_salary);

total_salary = retired_tk(old_information = 0, salary_information = 25000);
console.log(total_salary);
*/










// -----------2nd solve (Uses the short function and without using objects)-----------
/*
const retired_tk = (old=0,salary=0) => ((old*.3)*salary);

let calculation = retired_tk(60,20000);
console.log(calculation);

calculation = retired_tk(65,15000);
console.log(calculation);

calculation = retired_tk(61,20000);
console.log(calculation);

calculation = retired_tk(63,25000);
console.log(calculation);
*/








// ---------------1st solve (Uses the big function and without using objects)-------------
/*
function retired_tk(old=0,salary=0) {
    let caculation = ((old*.3)*salary);
    return caculation;
}

let retired_total_tk = retired_tk(60,20000);
console.log("Name : Rashed Mia \nold : 60 \nSalary = 20000 tk ");
console.log("Retired Amount = " + retired_total_tk);

retired_total_tk = retired_tk(65,25000);
console.log("Name : Arif Mia \nold : 65 \nSalary = 25000 tk ");
console.log("Retired Amount = " + retired_total_tk);

retired_total_tk = retired_tk(62,18000);
console.log("Name : Kashem \nold : 62 \nSalary = 18000 tk ");
console.log("Retired Amount = " + retired_total_tk);

retired_total_tk = retired_tk(61,15000);
console.log("Name : Sharif \nold : 61 \nSalary = 15000 tk ");
console.log("Retired Amount = " + retired_total_tk);
*/