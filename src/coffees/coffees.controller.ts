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
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `This action return all coffees! ${JSON.stringify(paginationQuery)}`;
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return `This action returns coffee have id = ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createCoffeeDTO: CreateCoffeeDTO) {
    return `This action adds new coffee ${createCoffeeDTO.name}`;
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(@Body() updateCoffeeDTO: UpdateCoffeeDTO) {
    return `This action update a coffee  ${JSON.stringify(updateCoffeeDTO)}`;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id: string) {
    return `This method will delete coffee has id = ${id}`;
  }
}
