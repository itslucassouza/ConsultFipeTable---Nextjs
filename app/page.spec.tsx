import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '@/app/store'; 
import IndexPage from './page';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

describe('IndexPage Component', () => {
  it('renders IndexPage correctly', () => {
    render(
        <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <IndexPage />
      </Provider>
        </QueryClientProvider>
    );

    const titleElement = screen.getByRole('heading', { name: /tabela fipe/i });
    const subtitleElement = screen.getByText('Consulte o valor de um veículo de forma gratuita', { selector: 'h2' });

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });
});
