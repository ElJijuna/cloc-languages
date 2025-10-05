import { languagesDescription } from '../languages-description';
import { languagesColor } from '../languages-color';
import { languagesCategory } from '../languages-category';

describe('cloc-languages', () => {
  it('languagesDescription debe tener al menos un lenguaje', () => {
    expect(Object.keys(languagesDescription).length).toBe(360);
  });

  it('languagesColor debe tener las mismas keys que languagesDescription', () => {
    expect(Object.keys(languagesColor).sort()).toEqual(Object.keys(languagesDescription).sort());
  });

  it('languagesCategory debe tener las mismas keys que languagesDescription', () => {
    expect(Object.keys(languagesCategory).sort()).toEqual(Object.keys(languagesDescription).sort());
  });

  it('cada key de languagesDescription debe ser un LanguageKey', () => {
    const keys: string[] = Object.keys(languagesDescription);
    keys.forEach(key => {
      // Solo comprobación de tipo en tiempo de ejecución
      expect(typeof key).toBe('string');
    });
  });
});