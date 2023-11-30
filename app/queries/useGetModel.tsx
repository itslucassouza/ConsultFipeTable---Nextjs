import { useQuery } from "@tanstack/react-query";
import { api } from "../data/api";

const getModel = async (brand: string) => {
        const response = await api(`/marcas/${brand}/modelos`);
        return response.json();
  };

export const useGetModel = (brand: string) => {
  const data = useQuery({
    queryKey: ['model', brand],
    queryFn: () => getModel(brand),
  })

 return data
};