import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '@/app/store';
import { useGetResult } from '../queries/useGetResult';
import Result from './page';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

jest.mock('@/app/queries/useGetResult', () => ({
    useGetResult: jest.fn(),
}));

const queryClient = new QueryClient();

describe('Result Page', () => {
    it('renders Result correctly with data', () => {
        const mockData = {
            Modelo: 'Modelo Teste',
            Valor: 'R$ 50.000,00',
        };
        (useGetResult as jest.Mock).mockReturnValueOnce({
            data: mockData,
            isLoading: false,
        });

        render(
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <Result />
                </Provider>
            </QueryClientProvider>
        );

        const modelName = screen.getByText('Tabela Fipe: Preço Modelo Teste');
        const chip = screen.getByText('R$: R$ 50.000,00');
        const description = screen.getByText('este é o preço de compra do veículo');

        expect(modelName).toBeInTheDocument();
        expect(chip).toBeInTheDocument();
        expect(description).toBeInTheDocument();
    });

    it('renders loading skeleton when data is loading', () => {
        (useGetResult as jest.Mock).mockReturnValueOnce({
            data: null,
            isLoading: true,
        });

        render(
            <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <Result />
            </Provider>
        </QueryClientProvider>
        );

        const skeleton = screen.getByTestId('skeleton-result');
        expect(skeleton).toBeInTheDocument();
    });
});
