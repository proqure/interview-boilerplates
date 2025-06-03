import { Controller, NotImplementedException, Post, Body } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { EncodeRequest } from '../models/EncodeRequest';
import { EncodeResponse } from '../models/EncodeResponse';

@Controller()
export class EncodeController {
  constructor(private readonly appService: AppService) {}

  @Post('/encode')
  encode(@Body() encodeReqeust: EncodeRequest): EncodeResponse {
    throw new NotImplementedException
  }
}
