import { useQuery } from "@tanstack/react-query";
import { api } from "../data/api";

const getResult = async (brand: string, model: string, year: string) => {
    const response = await api(`/marcas/${brand}/modelos/${model}/anos/${year}`);
    return response.json();
};

export const useGetResult = (brand: string, model: string, year: string) => {
  const data = useQuery({
    queryKey: ['result', brand, model, year],
    queryFn: () => getResult(brand, model, year),
  })

  return data
};