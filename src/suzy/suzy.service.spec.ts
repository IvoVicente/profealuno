import { Test, TestingModule } from '@nestjs/testing';
import { SuzyService } from './suzy.service';

describe('SuzyService', () => {
  let service: SuzyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuzyService],
    }).compile();

    service = module.get<SuzyService>(SuzyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
