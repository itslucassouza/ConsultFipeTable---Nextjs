import { useQuery } from "@tanstack/react-query";
import { api } from "../data/api";

const getYear = async (brand: string, model: string) => {
  const response = await api(`/marcas/${brand}/modelos/${model}/anos`);
  return response.json();
};

export const useGetYear = (brand: string, model: string) => {
  const data = useQuery({
    queryKey: ['year', brand, model],
    queryFn: () => getYear(brand, model),
  })

  return data
};