type Employee ={
    name: string;
    startDate: Date;
}

interface Manager {
    name: string;
    department: string;
}

type TechLead = Employee & Manager;

const teamLead : TechLead = {
    name: "jueinc",
    department: 'iuchdi',
    startDate: new Date(),
}