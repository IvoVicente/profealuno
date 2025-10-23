import { Test, TestingModule } from '@nestjs/testing';
import { SuzyController } from './suzy.controller';
import { SuzyService } from './suzy.service';

describe('SuzyController', () => {
  let controller: SuzyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuzyController],
      providers: [SuzyService],
    }).compile();

    controller = module.get<SuzyController>(SuzyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
