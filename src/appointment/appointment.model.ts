export interface Appointment{
    patientId: number;
    startTime:  Date;
    endTime: Date;
    confirmed: boolean;
}
export interface AppointmentInput{
    patientId: number;
    startTime:  Date;
    endTime: Date;
}