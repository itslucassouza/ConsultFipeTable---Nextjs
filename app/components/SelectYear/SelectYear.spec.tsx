import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '@/app/store';
import { addModel, addBrand, addYear } from '@/app/store'; 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SelectYear from '.';
import { useGetYear } from '@/app/queries/useGetYear';

jest.mock('@/app/queries/useGetYear', () => ({
  useGetYear: jest.fn(),
}));

const queryClient = new QueryClient();

const renderComponent = () => {
  render(
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
        <SelectYear />
    </Provider>
</QueryClientProvider>
  );
};

it('disables the select when model is not set', () => {
    const mockData = [
      { codigo: '1', nome: 'Ano 1' },
      { codigo: '2', nome: 'Ano 2' },
    ];
    (useGetYear as jest.Mock).mockReturnValueOnce({
      data: mockData,
      isLoading: false,
    });
  
    store.dispatch(addBrand('Brand'));
  
    renderComponent();
  
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveClass('Mui-disabled');
  });

it('renders SelectYear correctly', () => {
  const mockData = [
    { codigo: '1', nome: 'Ano 1' },
    { codigo: '2', nome: 'Ano 2' },
  ];
  (useGetYear as jest.Mock).mockReturnValueOnce({
    data: mockData,
    isLoading: false,
  });

  store.dispatch(addBrand('Brand'));
  store.dispatch(addModel('Model'));

  renderComponent();

  const selectElement = screen.getByRole('combobox');
  expect(selectElement).toBeInTheDocument();
});
