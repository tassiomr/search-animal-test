import App from '@app/app';
import { render } from '@testing-library/react';

describe('App Test Suite', () => {
  it('should render correct app', () => {
    const screen = render(<App />);

    expect(screen).toMatchSnapshot();
  });
});
