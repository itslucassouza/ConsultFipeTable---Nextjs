import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '@/app/store';
import SelectBrand from '.';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

jest.mock('@/app/data/api', () => ({
  __esModule: true,
  api: jest.fn(() => ({
    json: jest.fn(() => Promise.resolve([
      { codigo: '1', nome: 'Marca1' },
      { codigo: '2', nome: 'Marca2' },
    ])),
  })),
}));

const queryClient = new QueryClient();

describe('SelectBrand Component', () => {
  it('renders SelectBrand correctly', async () => {
    render(
      <QueryClientProvider client={queryClient}>

        <Provider store={store}>
          <SelectBrand />
        </Provider>
      </QueryClientProvider>
    );

    await screen.findByText('Marca');

    const selectBrandLabel = screen.getByText('Marca');
    const selectElement = screen.getByRole('combobox');
    const optionElement = screen.getByText('Marca');

    expect(selectBrandLabel).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
    expect(optionElement).toBeInTheDocument();
  });
});
