import React from 'react';
import { render } from '@testing-library/react';
import { SearchComponent } from '@ui/shared';

describe('SearchComponent Testing', () => {
  it('should render the SearchComponent correctly', () => {
    const { getByTestId } = render(
      <SearchComponent
        value="fish"
        testId="search-component"
        onChange={jest.fn}
        onClose={jest.fn}
        onKeyDown={jest.fn}
      />
    );

    expect(getByTestId('search-component')).toBeInTheDocument();
  });
});
