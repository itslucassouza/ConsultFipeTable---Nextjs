import React, {  } from 'react';
import { useDispatch } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { OutlinedInput, Skeleton } from '@mui/material';
import { ModelType } from '@/app/data/types/ModelType';
import { addBrand, resetModel, resetYear, useAppSelector } from '@/app/store';
import { MenuProps } from '@/app/utils/MenuProps';
import { useGetBrand } from '@/app/queries/useGetBrand';

const SelectBrand = () => {
  const dispatch = useDispatch();
  const brand = useAppSelector((state) => state.brand);

  const {data: brands, isLoading} = useGetBrand()

  if(isLoading) {
    return <Skeleton variant="rectangular"  height={60} />
  }

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedBrand = event.target.value;
    dispatch(addBrand(selectedBrand));
    dispatch(resetModel());
    dispatch(resetYear())
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="simple-select-label">Marca</InputLabel>
        <Select
          value={brand || ''}
          MenuProps={MenuProps}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
        >
          {brands?.map((item: ModelType) => (
            <MenuItem key={item.codigo} value={item.codigo}>
              {item.nome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectBrand;
