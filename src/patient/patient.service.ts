import { Injectable } from '@nestjs/common';
import { Patient } from './patient.model';

export interface PatientInput {
  name: string;
}

@Injectable()
export class PatientService {
  private readonly patients: Patient[] = [];
  // added a private counter
  private nextId = 1;
  public async register(patientInput: PatientInput): Promise<Patient> {
    const newPatient = {
      // now we use this new counter and increase it in every call
      id: this.nextId++,
      name: patientInput.name,
    };
    this.patients.push(newPatient);
    return newPatient;
  }
  public async doesPatientExist(patientId: number): Promise<boolean> {
    /*  
    // Option 1: Using for...of loop for readability (if iteration order is not important)
    for (const patient of this.patients) {
        if (patient.id === patientId) {
            return true;
            }
         }
         return false;

    // Option 2: Using find for potential performance optimization (if order doesn't matter)
        const matchingPatient = this.patients.find(patient => patient.id === patientId);
        return matchingPatient !== undefined;*/ 
    return this.patients.some(patient => patient.id === patientId);
}
}