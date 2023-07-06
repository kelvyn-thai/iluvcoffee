import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateCatDTO } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return `This method will return all cats in database`;
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return `Founded cat! ${name}`;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createCatDto: CreateCatDTO) {
    return `Added cat ${createCatDto.name} to database `;
  }
}
