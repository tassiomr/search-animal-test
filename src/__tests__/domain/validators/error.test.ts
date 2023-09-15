import { constants } from '@app/configs';
import { NotFoundError } from '@domain/validators/error';

describe('Testing Error Validator', () => {
  it('should return the correct error handler when thrown', () => {
    const cause = 'bird';
    const error = new NotFoundError(constants.errors.noResultFor, cause);

    expect(error.message).toBe(constants.errors.noResultFor);
    expect(error.span).toBe(cause);
  });
});
