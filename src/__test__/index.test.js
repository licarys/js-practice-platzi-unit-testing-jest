const randomString = require('../index');

describe('Probar funcionalidades de randomStrings', ()=> {
  test('probar la funcionalidad ', () => {
    expect(typeof (randomString())).toBe('string');
  });

  test('Comprobar que no exista una ciudad', () => {
    expect(randomString()).not.toMatch(/Cordoba/);
  });
});
