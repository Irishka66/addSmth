import { AddingModule } from './adding.module';

describe('AddingModule', () => {
  let addingModule: AddingModule;

  beforeEach(() => {
    addingModule = new AddingModule();
  });

  it('should create an instance', () => {
    expect(addingModule).toBeTruthy();
  });
});
