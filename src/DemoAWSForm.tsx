import React from 'react';
import { FieldValidator, Formik, FormikHelpers, FormikProps } from 'formik';
import {
  ActionGroup,
  Button,
  Form,
  Grid,
  GridItem,
  Text,
  TextVariants
} from '@patternfly/react-core';
import { DemoFormValues, ExperienceLevels } from './interfaces';
import { FormikAwarePFTextInput } from './FormikAwarePFTextInput';
import './DemoAWSForm.css';
import { FormikAwarePFRadioButtonGroup } from './FormikAwarePFRadioButtonGroup';
import { Spinner } from '@patternfly/react-core/dist/js/experimental';

const initialValues: DemoFormValues = {
  name: '',
  age: '',
  awsExperience: ExperienceLevels.NONE
};

const onSubmit = (
  values: DemoFormValues,
  formikHelpers: FormikHelpers<DemoFormValues>
) => {
  setTimeout(() => {
    console.log('Submitted the following form values:', values);
    formikHelpers.setSubmitting(false);
  }, 1500);
};

const validateName: FieldValidator = (value: string) => {
  if (value.length === 0) return 'Name is required!';
};

export const DemoAWSForm: React.FC = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formikProps: FormikProps<DemoFormValues>) => (
        <>
          <Grid>
            <GridItem span={12}>
              <div id="form-container" className="section-container">
                <Text component={TextVariants.h1}>Demo AWS Form</Text>
                <Form
                  id="demo-aws-form"
                  onSubmit={formikProps.handleSubmit}
                  onBlur={formikProps.handleBlur}
                >
                  <FormikAwarePFTextInput
                    id="name"
                    name="name"
                    type="text"
                    label="Name"
                    helpText="Please enter your name"
                    isRequired={true}
                    validate={validateName}
                    isValid={
                      !(formikProps.errors.name && formikProps.touched.name)
                    }
                  />
                  <FormikAwarePFTextInput
                    id="age"
                    name="age"
                    type="number"
                    label="Age"
                    helpText="Optionally, please provide your age"
                  />
                  <FormikAwarePFRadioButtonGroup
                    id="awsExperience"
                    name="awsExperience"
                    label="AWS Experience"
                    helpText="Provide your level of experience with AWS"
                    options={[
                      {
                        id: ExperienceLevels.NONE,
                        value: ExperienceLevels.NONE,
                        label: 'None'
                      },
                      {
                        id: ExperienceLevels.BEGINNER,
                        value: ExperienceLevels.BEGINNER,
                        label: 'Beginner'
                      },
                      {
                        id: ExperienceLevels.INTERMEDIATE,
                        value: ExperienceLevels.INTERMEDIATE,
                        label: 'Intermediate'
                      },
                      {
                        id: ExperienceLevels.ADVANCED,
                        value: ExperienceLevels.ADVANCED,
                        label: 'Advanced'
                      }
                    ]}
                  />
                  <ActionGroup>
                    <Button
                      id="submit-form"
                      variant="primary"
                      type="submit"
                      isDisabled={
                        Object.values(formikProps.errors).length > 0 ||
                        formikProps.isSubmitting
                      }
                    >
                      Submit
                    </Button>
                    {formikProps.isSubmitting && (
                      <pre id="loading-spinner">
                        <Spinner className="loading-spinner" size="md" />
                      </pre>
                    )}
                  </ActionGroup>
                  <Text className="submit-info" component={TextVariants.small}>
                    Submitted form values are logged to the developer console.
                  </Text>
                </Form>
              </div>
            </GridItem>
          </Grid>
        </>
      )}
    </Formik>
  );
};
