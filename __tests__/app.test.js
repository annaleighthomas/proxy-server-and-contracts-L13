


describe('API Data Munging', () => {

  const expectedMovies = [];
    
  test('GET /api/movies', async () => {
    // act - make the request
    const response = await request.get('/api/cats');

    // was response OK (200)?
    expect(response.status).toBe(200);

    // did it return the data we expected?
    expect(response.body).toEqual(expectedMovies);

  });
});
