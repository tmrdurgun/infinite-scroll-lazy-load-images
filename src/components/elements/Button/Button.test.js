import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button } from '../Button';

describe('BUTTON Element tests', function () {

  test('should render Button correctly', async () => {
    const isClicked = () => 'clicked!';

    render(<Button
      label="some text"
      onClick={isClicked}
    />);

    fireEvent.click(screen.getByText('some text'));

    await waitFor(() => screen.getByRole('button'));

    expect(screen.getByRole('button')).toHaveTextContent('some text');
    expect(isClicked() === 'clicked!').toBe(true);
  });
});