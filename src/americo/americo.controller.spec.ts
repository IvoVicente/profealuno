import { Test, TestingModule } from '@nestjs/testing';
import { AmericoController } from './americo.controller';
import { AmericoService } from './americo.service';

describe('AmericoController', () => {
  let controller: AmericoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AmericoController],
      providers: [AmericoService],
    }).compile();

    controller = module.get<AmericoController>(AmericoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
