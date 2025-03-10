import { InputField } from '@/components/InputFieldsRenderer/InputFieldsRenderer'

export const GOAL_INPUTS: InputField[] = [
  {
    id: 'goal',
    label: 'Goal',
    type: 'text',
  },
  {
    id: 'sub_goal',
    label: 'Sub Goal',
    type: 'text',
  },
  {
    id: 'target_metric',
    label: 'Target Metric',
    type: 'number',
  },
  {
    id: 'current_metric',
    label: 'Current Metric',
    type: 'number',
  },
  {
    id: 'reachability_in_months',
    label: 'Reachability in Months',
    type: 'number',
  },
  {
    id: 'reachability_in_years',
    label: 'Reachability in Years',
    type: 'number',
  },
  {
    id: 'started',
    label: 'Choose the Started Date',
    type: 'date',
  },
  {
    id: 'finished',
    label: 'Choose the Finished Date',
    type: 'date',
  },
  {
    id: 'planned_start',
    label: 'Choose the Planned Start Date',
    type: 'date',
  },
  {
    id: 'planned_finish',
    label: 'Choose the Planned Finish Date',
    type: 'date',
  },
  {
    id: 'comments',
    label: 'Provide comments for goal',
    type: 'text',
  },
  {
    id: 'balance',
    label: 'Balance',
    type: 'number',
  },
  {
    id: 'prefered_value_of_balance',
    label: 'Choose preferred value of Balance',
    type: 'radio',
    options: [
      { id: 'H', label: 'High' },
      { id: 'L', label: 'Low' },
    ],
  },
]
