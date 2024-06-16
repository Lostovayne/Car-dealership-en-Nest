import { CarsService } from './cars.service';
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findOne(id);
  }
}
