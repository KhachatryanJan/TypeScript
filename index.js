"use strict";
class Patient {
    constructor(diseaseName, treatments, patientName, age, tratmentPrice) {
        this.diseaseName = diseaseName;
        this.treatments = treatments;
        this.patientName = patientName;
        this.age = age;
        this.tratmentPrice = tratmentPrice;
    }
}
class PatientOne extends Patient {
    constructor(diseaseName, age, patientName, treatments, treatmentPrice) {
        super(diseaseName, treatments, patientName, age, treatmentPrice);
    }
}
class PatientTow extends Patient {
    constructor(diseaseName, age, patientName, treatments, treatmentPrice) {
        super(diseaseName, treatments, patientName, age, treatmentPrice);
    }
}
class PatientThree extends Patient {
    constructor(diseaseName, age, patientName, treatments, treatmentPrice) {
        super(diseaseName, treatments, patientName, age, treatmentPrice);
    }
}
const patient1 = new Patient(["Flu", "Cold"], ["Rest", "Medications"], "John Doe", 30);
const patient2 = new Patient(["Fatigue", "Headache"], ["Exercise", "Medication"], "Harutyun Balabyan", 40);
const patient3 = new Patient(["Fever", "Nausea"], ["Rest", "Antibiotics"], "Stepan Hovhannisyan", 35);
console.log(patient1, patient2, patient3);
