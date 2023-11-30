export function formatCarValue(valor: string) {
    const valorNumerico = valor?.replace(/[^\d,]/g, '');
  
    const numero = parseFloat(valorNumerico?.replace(',', '.'));
  
    const valorFormatado = numero.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  
    return valorFormatado;
  }