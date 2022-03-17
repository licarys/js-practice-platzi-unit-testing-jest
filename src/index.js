const cities = ['Ciudad de Mexico', 'Bogota', 'Lima', 'Buenos Aires', 'Guadalajara'];

const randomString = () => {
  const city = cities[Math.floor(Math.random() * cities.length)];
  return city;
  
}

const reverseString2 = text => {
  return new Promise( (resolve, reject) => {
    if(!text) {
      reject(Error('Error'));
    }
    resolve(text.split('').reverse().join(''));
  });
}


module.exports =  randomString;