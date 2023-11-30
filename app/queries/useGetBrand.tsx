import { useQuery } from "@tanstack/react-query";
import { api } from "../data/api";

const getBrand = async () => {
  const response = await api("/marcas");
  return await response.json();
};

export const useGetBrand = () => {
  const data = useQuery({
    queryKey: ['brand'],
    queryFn: () => getBrand()
  })

  return data
};