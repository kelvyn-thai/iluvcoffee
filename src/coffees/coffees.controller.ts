import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { CreateCoffeeDTO } from './dto/create-coffee.dto';
import { UpdateCoffeeDTO } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return `This action return all coffees!`;
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return `This action returns coffee have id = ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() createCoffeeDTO: CreateCoffeeDTO) {
    console.log('createCoffeeDTO', createCoffeeDTO);
    return `This action adds new coffee`;
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateCoffeeDTO: UpdateCoffeeDTO) {
    console.log('updateCoffeeDTO', updateCoffeeDTO);
    return `This action update a coffee has id = ${id}, data = ${JSON.stringify(
      updateCoffeeDTO,
    )}`;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id: string) {
    return `This action delete coffee has id = ${id}`;
  }
}
