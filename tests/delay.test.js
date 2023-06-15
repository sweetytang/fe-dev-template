const delay = require('./delay');

describe('test asynchronous', () => {
  test('first way: then', () => {
    delay(1000).then(data => {
      expect(data).toBe('delay finish');
    });
  });

  test('second way: async await', async () => {
    const data = await delay(1000);
    expect(data).toBe('delay finish');
  });

  test('third way: .resolves .rejects', () => {
    expect(delay(1000)).resolves.toBe('delay finish');
  });

  test('second way: callback', (done) => {
    function callback (error, data) {
      if (error) {
        done(error);
        return;
      }

      try {
        expect(data).toBe('delay finish');
        done();
      } catch (error) {
        done(error);
      }
    }

    delay(1000, callback);
  });
});
