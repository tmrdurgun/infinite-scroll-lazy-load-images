import { render, fireEvent, waitFor, screen, within, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from './';

describe('Home page tests', function () {

  test('Displays loading message', async () => {

    render(<Home />);

    expect(screen.getByText(/No Images To Display/i)).toBeInTheDocument();
  });


  test('Displays image list', async () => {

    render(<Home />);

    await waitFor(() => screen.getByTestId('gallery__list'));

    expect(screen.getByTestId('gallery__list')).toBeInTheDocument();
  });

  test('Displays correct number of images for first page', async () => {

    render(<Home />);

    const list = await waitFor(() => screen.getByTestId('gallery__list'));

    const { getAllByRole } = within(list);

    const items = getAllByRole('listitem');

    expect(items.length).toBe(10);

  });

  test('Displays correct number of images after scrolling', async () => {
    act(async () => {
      render(<Home />);

      const list = await waitFor(() => screen.getByTestId('gallery__list'), { timeout: 2000 });

      expect(await screen.getByTestId('gallery__list')).toBeInTheDocument();

      window.addEventListener('scroll', () => { console.log('window scrolled!'); });

      fireEvent.scroll(window, { target: { scrollY: document.body.scrollHeight } });

      await new Promise((r) => setTimeout(r, 3000));

      const { getAllByRole } = within(list);

      const items = getAllByRole('listitem');

      expect(items.length).toBe(20);
    });
  });
});