import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from '@/app/store';
import ConsultButton from '.';

jest.mock('next/router', () => ({
    useRouter: jest.fn(() => ({
      push: jest.fn(),
    })),
  }));

const queryClient = new QueryClient();

describe('ConsultButton Component', () => {
  it('renders ConsultButton correctly', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ConsultButton />
        </Provider>
      </QueryClientProvider>
    );

    const consultButton = screen.getByRole('button', { name: /consultar preço/i });
    expect(consultButton).toBeInTheDocument();
  });


  it('disables button when year is not set', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ConsultButton />
        </Provider>
      </QueryClientProvider>
    );

    const consultButton = screen.getByRole('button', { name: /consultar preço/i });
    expect(consultButton).toBeDisabled();
  });
});
