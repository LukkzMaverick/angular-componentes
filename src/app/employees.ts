interface Employee{
    name: string;
    salary: number;
    bonus: number;
}

const employees: Employee[] = []

function getSalaryClass(salary){
    return salary <= 20000 ? 'lowSalary' : 'highSalary'
}

export {getSalaryClass}

export default employees