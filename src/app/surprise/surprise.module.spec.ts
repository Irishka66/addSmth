import { SurpriseModule } from './surprise.module';

describe('SurpriseModule', () => {
  let surpriseModule: SurpriseModule;

  beforeEach(() => {
    surpriseModule = new SurpriseModule();
  });

  it('should create an instance', () => {
    expect(surpriseModule).toBeTruthy();
  });
});
