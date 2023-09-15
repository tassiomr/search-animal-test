import { TextRegexTest } from '@domain/validators/regex';

describe('Regex Validator Test Suite', () => {
  it('should NameRegexText return true when contains a string', () => {
    const message = 'This is a message to test';
    const stringContain = 'is ';

    expect(TextRegexTest(stringContain).test(message)).toBeTruthy();
  });
  it('should NameRegexText return false when not contains a string', () => {
    const message = 'This is a message to test';
    const stringContain = 'outdating';

    expect(TextRegexTest(stringContain).test(message)).toBeFalsy();
  });
});
