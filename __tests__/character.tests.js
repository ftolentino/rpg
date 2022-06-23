import Character from '../src/Character';

describe('Rpg', () => { 
  
test('it should create a character option', () => {
    let character1 = new Character();
    character1;

    expect(character1).toEqual({});
  });

});

