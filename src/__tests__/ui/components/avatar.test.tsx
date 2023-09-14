import { render } from '@testing-library/react';
import { Avatar } from '@ui/components';

describe('Avatar Component Rendering', () => {
  it('should render with the correct parameters', () => {
    const imageUrl = 'https://google.com/';
    const { getByTestId } = render(<Avatar url={imageUrl} />);

    const avatar = getByTestId('avatar') as HTMLImageElement;

    expect(avatar.src).toBe(imageUrl);
  });
});
