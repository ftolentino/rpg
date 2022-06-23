import Character from '../src/js/Character';

describe('Character', () => { 
  
  test('it should create a character option', () => {
    const character1 = new Character();
    expect(character1).toEqual({});
  });


  test('return character attributes', () => {
    const character1 = new Character('Brick', 9001, 'chartrusse');
    expect(character1.charAttributes()).toEqual(['Brick', 9001, 'chartrusse']);
  });
});

