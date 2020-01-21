import React from 'react';
import { Field, FieldProps, FieldValidator } from 'formik';
import { FormGroup, Radio } from '@patternfly/react-core';
import { RadioButtonOption } from './interfaces';

interface Props {
  id: string;
  name: string;
  options: RadioButtonOption[];
  label: string;
  helpText?: string;
  isRequired?: boolean;
  validate?: FieldValidator;
}

export const FormikAwarePFRadioButtonGroup: React.FC<Props> = (
  props: Props
) => {
  return (
    <Field name={props.name} validate={props.validate}>
      {(fieldProps: FieldProps<string>) => {
        const onChange = (
          checked: boolean,
          event: React.FormEvent<HTMLInputElement>
        ) => {
          fieldProps.form.setFieldValue(props.name, event.currentTarget.id);
        };

        return (
          <FormGroup
            label={props.label}
            aria-label={props.label}
            fieldId={props.id}
            helperText={props.helpText}
          >
            {props.options.map(option => (
              <Radio
                key={option.id}
                id={option.id}
                name={option.id}
                isChecked={fieldProps.field.value === option.id}
                onChange={onChange}
                onBlur={fieldProps.field.onBlur}
                label={option.label}
                aria-label={option.label}
              />
            ))}
          </FormGroup>
        );
      }}
    </Field>
  );
};
