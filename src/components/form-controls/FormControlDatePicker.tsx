import React from "react";

import {
  FormControl,
  FormHelperText,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { Field, FieldProps } from "formik";

type Props = TextFieldProps & {
  name: string;
  label: string;
};

const FormControlDatePicker: React.FC<Props> = ({ name, label }) => (
  <Field name={name}>
    {({ field, form: { errors, touched } }: FieldProps) => {
      const isInvalid = !!errors[field.name] && touched[field.name];
      return (
        <FormControl>
          <TextField
            label={label}
            color="secondary"
            type="date"
            placeholder=""
            {...field}
            error={Boolean(isInvalid)}
          />
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

export default FormControlDatePicker;
