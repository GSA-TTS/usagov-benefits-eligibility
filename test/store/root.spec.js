import { state } from '@/store'

describe('root store', () => {
  describe('state', () => {
    it('should have a state', () => {
      const storeState = state();
      expect(storeState).toBeDefined();
    });
  });
});
