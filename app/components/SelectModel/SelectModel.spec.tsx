import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from '@/app/store';
import { useGetModel } from '@/app/queries/useGetModel';
import SelectModel from '.';

jest.mock('@/app/queries/useGetModel', () => ({
    useGetModel: jest.fn(),
}));

const queryClient = new QueryClient();

const renderComponent = () => {
    return render(
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <SelectModel />
            </Provider>
        </QueryClientProvider>
    );
};

describe('SelectModel Component', () => {
    it('renders SelectModel correctly', async () => {
        const mockData = [
            { codigo: '1', nome: 'Modelo 1' },
            { codigo: '2', nome: 'Modelo 2' },
        ];
        (useGetModel as jest.Mock).mockReturnValueOnce({
            data: mockData,
            isLoading: false,
        });

        store.getState().brand = '1';

        renderComponent()

        await screen.findByText('Modelo');

        const selectModelLabel = screen.getByText('Modelo');
        const selectElement = screen.getByRole('combobox');
        const optionElement = screen.getByText('Modelo');

        expect(selectModelLabel).toBeInTheDocument();
        expect(selectElement).toBeInTheDocument();
        expect(optionElement).toBeInTheDocument();
    });


    it('disables the select when brand is not set', () => {
        const mockData = [
            { codigo: '1', nome: 'Modelo 1' },
            { codigo: '2', nome: 'Modelo 2' },
        ];
        (useGetModel as jest.Mock).mockReturnValueOnce({
            data: mockData,
            isLoading: false,
        });

        store.getState().brand = '';

        renderComponent();

        const selectElement = screen.getByRole('combobox');
        expect(selectElement).toHaveClass('Mui-disabled');
    });
});
