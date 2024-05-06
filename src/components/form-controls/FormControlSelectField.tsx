import React from "react";

import {
  FormControl,
  FormHelperText,
  MenuItem,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { Field, FieldProps } from "formik";

type Props = TextFieldProps & {
  name: string;
  label: string;
  options: {key:string, value:string}[];
};

const FormControlSelectField: React.FC<Props> = ({ name, label, options }) => (
  <Field name={name}>
    {({ field, form: { errors, touched } }: FieldProps) => {
      const isInvalid = !!errors[field.name] && touched[field.name];
      return (
        <FormControl>
          <TextField label={label} select color="secondary" {...field} error={Boolean(isInvalid)} >
            {options.map((option) => (
                  <MenuItem key={option.key} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
          </TextField>  
          {!!errors[field.name] && touched[field.name] && (
            <FormHelperText id={`${name}-error`} style={{ color: "red" }}>
              {String(errors[field.name])}
            </FormHelperText>
          )}
        </FormControl>
      );
    }}
  </Field>
);

export default FormControlSelectField;
