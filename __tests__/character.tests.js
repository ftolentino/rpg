import {Character} from '../src/js/Character';
import {Ranger} from '../src/js/Character';

describe('Character', () => { 
  
  test('it should create a character option', () => {
    const character1 = new Character();
    expect(character1).toEqual({});
  });


  test('return character attributes', () => {
    const character1 = new Character('Brick', 9001, 'chartrusse');
    expect(character1.charAttributes()).toEqual(['Brick', 9001, 'chartrusse']);
  });

  test('it should create a Ranger class instance with name, hp, color, and bowType properties', () => {
    const character2 = new Ranger('Ranger Brick', 3, 'Brown', 'Long Bow');
    expect(character2)
    .toEqual({
        name: "Ranger Brick", 
        hp: 3, color: "Brown", 
        bowType: "Long Bow"
      });
  });
});

// name: 'Ranger Brick';
// hp: 3;
// color: 'Brown';
// bowType: 'Long Bow';