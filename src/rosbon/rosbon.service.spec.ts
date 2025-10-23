import { Test, TestingModule } from '@nestjs/testing';
import { RosbonService } from './rosbon.service';

describe('RosbonService', () => {
  let service: RosbonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RosbonService],
    }).compile();

    service = module.get<RosbonService>(RosbonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
