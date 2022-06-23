import Character from '../src/js/Character';

describe('Character', () => { 
  
  test('it should create a character option', () => {
    const character1 = new Character();
    expect(character1).toEqual({});
  });

  test('testFunction returns hello', () => {
    const character1 = new Character();
    expect(character1.testFunction()).toEqual('hello');
  });


});

