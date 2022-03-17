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

const reverseString2 = text => {
  return new Promise( (resolve, reject) => {
    if(!text) {
      reject(Error('Error'));
    }
    resolve(text.split('').reverse().join(''));
  });
}

test('Probar una promesa', () => {
  return reverseString2('Hola')
    .then(text => {
      expect(text).toBe('aloH');
    });
});

test('Probar async/await', async () => {
  const text = await reverseString2('hola');
  expect(text).toBe('aloh');
});

afterEach( ()=> console.log('Antes de cada prueba') );
afterAll( ()=> console.log('Antes de todas las pruebas') );

beforeEach( ()=> console.log('Despues de cada prueba') );
beforeAll( ()=> console.log('Despues de todas las pruebas') );
