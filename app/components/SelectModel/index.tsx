import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { api } from '@/app/data/api';
import {  addModel, useAppSelector } from '@/app/store';
import { OutlinedInput, Skeleton } from '@mui/material';
import { ModelType } from '@/app/data/types/ModelType';
import { MenuProps } from '@/app/utils/MenuProps';
import { useGetModel } from '@/app/queries/useGetModel';

const SelectModel = () => {
  const dispatch = useDispatch();
  const {brand, model} = useAppSelector((state) => state);
  const {data: modelData, isLoading} = useGetModel(brand)
  
  if(isLoading) {
    return <Skeleton variant="rectangular"  height={60} />
  }

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedModel = event.target.value;
    dispatch(addModel(selectedModel));
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="simple-select-label">Modelo</InputLabel>
        <Select
        disabled={!brand}
          value={model || ''}
          MenuProps={MenuProps}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
        >
          {modelData?.length >= 0 && modelData?.map((item: ModelType) => (
            <MenuItem key={item.codigo} value={item.codigo}>
              {item.nome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectModel;
