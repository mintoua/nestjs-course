import { Test, TestingModule } from '@nestjs/testing';
import { PatientService } from './patient.service';


describe('PatientService', () => {
  let service: PatientService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientService],
    }).compile();
    service = module.get<PatientService>(PatientService);
  });

  // This test was automatically generated with the `nest g service` command.
  it('should be defined', () => {
    expect(service).toBeDefined();
  });



  describe('register', () => {
    it('should return a new patient with given name', async () => {
      const newPatient = await service.register({ name: 'John Doe' });
      expect(newPatient).toEqual({
        id: expect.any(Number),
        name: 'John Doe',
      });
    });
  });

  describe('does patient exist ', ()=>{
    
    it('should return true when patient was registered', async()=>{
        const { id: patientId } = await service.register({ name: 'John Doe' });
        const exist =  await service.doesPatientExist(patientId);

        expect(exist).toBe(true);
    });

    it('should return false when no patient was registered', async () => {
        const patientId = 1;
        const exists = await service.doesPatientExist(patientId);
        expect(exists).toBe(false);
      });


    it('should return different ids when called twice with the same name', async () => {
        const firstPatient = await service.register({ name: 'John Doe' });
        const secondPatient = await service.register({ name: 'John Doe' });
        expect(firstPatient).not.toEqual(secondPatient);
    });

  });

});