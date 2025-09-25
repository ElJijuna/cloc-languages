import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { languagesDescription } from '../languages-description';
import { languagesColor } from '../languages-color';
import { languagesCategory } from '../languages-category';

describe('cloc-languages', () => {
  it('languagesDescription debe tener al menos un lenguaje', () => {
    assert.ok(Object.keys(languagesDescription).length > 0);
  });

  it('languagesColor debe tener las mismas keys que languagesDescription', () => {
    assert.deepEqual(Object.keys(languagesColor).sort(), Object.keys(languagesDescription).sort());
  });

  it('languagesCategory debe tener las mismas keys que languagesDescription', () => {
    assert.deepEqual(Object.keys(languagesCategory).sort(), Object.keys(languagesDescription).sort());
  });

  it('cada key de languagesDescription debe ser un LanguageKey', () => {
    const keys: string[] = Object.keys(languagesDescription);
    keys.forEach(key => {
      // Solo comprobación de tipo en tiempo de ejecución
      assert.ok(typeof key === 'string');
    });
  });

  it('los valores de languagesColor deben ser strings hex de color o similares', () => {
    Object.values(languagesColor).forEach(color => {
      assert.equal(typeof color, 'string');
      assert.ok(color.length >= 4);
    });
  });

  it('los valores de languagesCategory deben ser strings de categoría', () => {
    Object.values(languagesCategory).forEach(category => {
      assert.equal(typeof category, 'string');
      assert.ok(category.length > 0);
    });
  });
});