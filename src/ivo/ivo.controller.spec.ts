import { Test, TestingModule } from '@nestjs/testing';
import { IvoController } from './ivo.controller';
import { IvoService } from './ivo.service';

describe('IvoController', () => {
  let controller: IvoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IvoController],
      providers: [IvoService],
    }).compile();

    controller = module.get<IvoController>(IvoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
