import { Controller, Get, Post, Body, UseGuards, Param, Put, ParseIntPipe, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { plainToClass } from 'class-transformer';
import { SettingsService } from './settings.service';
import { Setting } from './../interfaces';
import { KeyValueDto, CreateSettingReq, EditSettingReq, SettingsGroup, SettingRes } from './../dto';
import { Tags } from 'nest-swagger';
import { ResultList, NullableParseIntPipe } from './../../common';

@Tags('core')
@Controller('settings')
@UseGuards(AuthGuard('jwt'))
export class SettingsController {
  constructor(private readonly settingService: SettingsService) { }

  @Post()
  async create(@Body() entry: CreateSettingReq) {
    return this.settingService.create(plainToClass(CreateSettingReq, entry));
  }

  @Put()
  async update(@Body() entry: EditSettingReq): Promise<Setting> {
    return this.settingService.update(plainToClass(EditSettingReq, entry));
  }

  @Put('name/:name')
  async updateSettingsByName(
    @Query('name') name: string,
    @Body() entry: SettingsGroup): Promise<SettingsGroup> {
    return this.settingService.updateSettingsByName(name, entry);
  }

  @Get('search')
  async search(
    @Query('keyword') keyword?: string,
    @Query('value') value?: string,
  ): Promise<KeyValueDto[]> {
    return this.settingService.search(keyword, value);
  }

  @Get('query')
  async query(
    @Query('keyword') keyword?: string,
    @Query('index', new NullableParseIntPipe()) index: number = 1,
    @Query('size', new NullableParseIntPipe()) size: number = 10,
  ): Promise<ResultList<Setting>> {
    return this.settingService.query(index, size, { keyword });
  }

  @Get('name/:name')
  async getSettingsByName(@Query('name') name?: string): Promise<SettingsGroup> {
    return this.settingService.getSettingsByName(name);
  }

  @Get('key/:key')
  async getSettingsByKey(@Query('key') key: string): Promise<SettingRes> {
    return this.settingService.getSettingsByKey(key);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Setting> {
    return this.settingService.findById(id);
  }

}
