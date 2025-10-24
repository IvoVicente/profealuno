import { Test, TestingModule } from '@nestjs/testing';
import { AmericoService } from './americo.service';

describe('AmericoService', () => {
  let service: AmericoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmericoService],
    }).compile();

    service = module.get<AmericoService>(AmericoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
