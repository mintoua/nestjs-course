import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentService } from './appointment/appointment.service';
import { PatientModule } from './patient/patient.module';
import { AppointmentModule } from './appointment/appointment.module';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { TypeormModule } from './infrastructure/config/typeorm/typeorm.module';
import { LoggerModule } from './infrastructure/logger/logger.module';

@Module({
  imports: [PatientModule, AppointmentModule, EnvironmentConfigModule, TypeormModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService, AppointmentService],
})
export class AppModule {}
