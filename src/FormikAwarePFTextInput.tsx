import React from 'react';
import { Field, FieldProps, FieldValidator } from 'formik';
import { FormGroup, TextInput } from '@patternfly/react-core';

interface Props {
  id: string;
  name: string;
  type: 'text' | 'number';
  label: string;
  helpText?: string;
  isRequired?: boolean;
  validate?: FieldValidator;
  isValid?: boolean;
  errorText?: string;
}

export const FormikAwarePFTextInput: React.FC<Props> = (props: Props) => {
  return (
    <Field name={props.name} validate={props.validate}>
      {(fieldProps: FieldProps<string | number>) => {
        // Map the PF4 change handler to the Formik change handler.
        const onChange = (
          value: string | number,
          event: React.FormEvent<HTMLInputElement>
        ) => fieldProps.field.onChange(event);

        return (
          <FormGroup
            label={props.label}
            aria-label={props.label}
            isRequired={props.isRequired}
            fieldId={props.id}
            helperText={props.helpText}
            isValid={props.isValid}
            helperTextInvalid={props.errorText}
          >
            <TextInput
              value={fieldProps.field.value}
              onChange={onChange}
              onBlur={fieldProps.field.onBlur}
              isRequired={props.isRequired}
              type={props.type}
              id={props.id}
              name={props.name}
              aria-label={props.label}
              validated={props.isValid === false ? 'error' : 'default'}
            />
          </FormGroup>
        );
      }}
    </Field>
  );
};
