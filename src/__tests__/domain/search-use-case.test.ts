import { SearchUsecase } from '@domain/models/search-use-case';

describe('Search Use Case Test Suite', () => {
  it('should return an array with values when send a valid animal type', async () => {
    const results = await SearchUsecase('bird');

    expect(results.length).toBeTruthy();
  });

  it('should return an array with values when send a name string contain valid ', async () => {
    const term = 'gg';
    const results = await SearchUsecase(term);

    expect(results.length).toBeTruthy();
    results.forEach((animal) => {
      expect(animal.title).toContain(term);
    });
  });

  it('should throws an erro when pass a invalid string or type', async () => {
    const term = 'tomorrowland';

    try {
      await SearchUsecase(term);
    } catch (error) {
      const errorExpected = new Error('Not results found for');
      expect(error).toEqual(errorExpected);
    }
  });
});
