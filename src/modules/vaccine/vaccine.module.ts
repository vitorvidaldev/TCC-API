import { Module } from "@nestjs/common";
import { VaccinesController } from "./vaccine.controller";
import { VaccineService } from "./vaccine.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Vaccine } from "./vaccine.entity";
import { PetModule } from "../pet/pet.module";
import { UsersModule } from "../user/user.module";

@Module({
  imports: [TypeOrmModule.forFeature([Vaccine]), PetModule, UsersModule],
  controllers: [VaccinesController],
  providers: [VaccineService],
  exports: [VaccineService]
})
export class VaccinesModule {}