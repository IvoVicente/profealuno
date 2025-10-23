import { Test, TestingModule } from '@nestjs/testing';
import { RosbonController } from './rosbon.controller';
import { RosbonService } from './rosbon.service';

describe('RosbonController', () => {
  let controller: RosbonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RosbonController],
      providers: [RosbonService],
    }).compile();

    controller = module.get<RosbonController>(RosbonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
