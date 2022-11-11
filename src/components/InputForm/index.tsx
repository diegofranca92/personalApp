import {FormControl, Input} from 'native-base';
import React from 'react';

interface inputProps {
  label?: string;
  helptext?: string;
  value?: string | undefined;
  placeholder?: string | undefined;
  onChangeText: ((text: string) => void) | undefined;
}

export function InputForm({
  label,
  helptext,
  onChangeText,
  value,
  placeholder,
}: inputProps) {
  return (
    <FormControl mb="5">
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
      <FormControl.HelperText>{helptext}</FormControl.HelperText>
    </FormControl>
  );
}
