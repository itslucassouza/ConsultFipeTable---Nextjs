import React from 'react';
import { useDispatch } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { addYear, useAppSelector } from '@/app/store';
import { OutlinedInput, Skeleton } from '@mui/material';
import { ModelType } from '@/app/data/types/ModelType';
import { MenuProps } from '@/app/utils/MenuProps';
import { useGetYear } from '@/app/queries/useGetYear';

const SelectYear = () => {
  const dispatch = useDispatch();
  const { brand, model, year } = useAppSelector((state) => state);
  const { data: yearData, isLoading } = useGetYear(brand, model)

  if (isLoading) {
    return <Skeleton variant="rectangular" height={60} />
  }

  const handleChange = (event: SelectChangeEvent<string>) => {
    const yearSelected = event.target.value;
    dispatch(addYear(yearSelected));
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="simple-select-label">Ano</InputLabel>
        <Select
          disabled={!model}
          value={year || ''}
          MenuProps={MenuProps}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
        >
          {yearData?.map((item: ModelType) => (
            <MenuItem key={item.codigo} value={item.codigo}>
              {item.nome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectYear;
