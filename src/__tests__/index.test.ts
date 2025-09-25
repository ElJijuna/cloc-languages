import languages from '../index';

describe('cloc-languages', () => {
  it('should have at least one language', () => {
    expect(Object.keys(languages).length).toBeGreaterThan(0);
  });
});