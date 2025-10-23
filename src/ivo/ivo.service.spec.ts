import { Test, TestingModule } from '@nestjs/testing';
import { IvoService } from './ivo.service';

describe('IvoService', () => {
  let service: IvoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IvoService],
    }).compile();

    service = module.get<IvoService>(IvoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
