// test para la solicitud GET a la ruta casino
const request = require('supertest');
const casinoRouter = require('../src/routes/casino.routes');
const app = require('../src/app.ts')

describe('Casino API', () => {

  //------------------test ruta get / -----------------// 
  test('Debería obtener todos los casinos', async () => {
    // Realiza la solicitud GET utilizando Supertest y el enrutador de casino
    const response = await request(casinoRouter()).get('/');

    // Verifica que la respuesta tenga el código de estado correcto
    expect(response.statusCode).toBe(200);

    // Verifica el contenido de la respuesta 
    expect(response.body).toBeDefined();
    expect(Array.isArray(response.body)).toBe(true);
  });

    //------------------test ruta get /:id -----------------// 
  test('Debería obtener un casino por su ID', async () => {
      const casinoId = '1'; 
      const response = await request(app).get(`/casino/${casinoId}`);
      expect(response.status).toBe(200);
  
      expect(response.body).toBeDefined();
      expect(response.body.id).toBe(casinoId);
    });
  
   test('Debería retornar un error si el ID del casino no existe', async () => {
      const casinoId = '999'; // ID del casino inexistente
      const response = await request(app).get(`/casino/${casinoId}`);

      expect(response.status).toBe(404);
  
      // Verifica el contenido de la respuesta (opcional)
      expect(response.body).toBeDefined();
      expect(response.body.error).toBe(`El casino con ID ${casinoId} no existe.`);
    });
  });  


  //----------------test ruta post--------------------//

  test('Debería crear un nuevo casino', async () => {
    const newCasino = {
      name: 'Casino Test',
    };
    // Realiza la solicitud POST utilizando Supertest y la aplicación
    const response = await request(app)
      .post('/casino')
      .send(newCasino)
      .set('Accept', 'application/json');

    // Verifica que la respuesta tenga el código de estado correcto
    expect(response.status).toBe(201);

    // Verifica el contenido de la respuesta 
    expect(response.body).toBeDefined();
    expect(response.body.name).toBe(newCasino.name);

  });


});