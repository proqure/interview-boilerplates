import { Test, TestingModule } from '@nestjs/testing';
import { EncodeController } from './encode.controller';
import { AppService } from '../services/app.service';
import { NotImplementedException } from '@nestjs/common';

describe('EncodeController', () => {
  let encodeController: EncodeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EncodeController],
      providers: [AppService],
    }).compile();

    encodeController = app.get<EncodeController>(EncodeController);
  });

  describe('encode', () => {
    it('should encode url"', () => {
      throw new NotImplementedException();
    });
  });
});
