import { TableroModule } from './tablero.module';

describe('TableroModule', () => {
  let tableroModule: TableroModule;

  beforeEach(() => {
    tableroModule = new TableroModule();
  });

  it('should create an instance', () => {
    expect(tableroModule).toBeTruthy();
  });
});
