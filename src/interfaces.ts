export interface DemoFormValues {
  name: string;
  age: number | '';
  awsExperience: ExperienceLevels;
}

export enum ExperienceLevels {
  NONE = 'none',
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced'
}

export interface RadioButtonOption {
  id: string;
  value: string;
  label: string;
}
