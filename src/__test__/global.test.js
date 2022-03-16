const text = 'Hola Mundo';
const fruits = ['manzana', 'banano', 'melon'];

test('Debe contener un texto', () => {
  expect(text).toMatch(/Mundo/);
});

test('Tenemos banana?', () => {
  expect(fruits).toContain('banano');
});

test('Mayor que', () => {
  expect(10).toBeGreaterThan(9);
});


test('Verdadero', ()=> {
  expect(true).toBeTruthy();
})

const reverseString = (text, callback) => {
  callback(text.split('').reverse().join(''));
}

test('Probar un callback', () => {
  reverseString('Hola', (text)=>{
    expect(text).toBe('aloH');
  })
});
