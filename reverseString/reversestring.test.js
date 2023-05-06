const reverseString = require('./reverseString')

describe('reverseString', () => {
  test('reverses string', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });

  test('reverses multiple', () => {
    expect(reverseString('ben premek maria chadi')).toEqual('idahc airam kemerp neb')
  })

});
