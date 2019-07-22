import Root from './Root';
import FormUseState from './FormUseState';
import FormUseFormik from './FormUseFormik';
import FormUseField from './FormUseField';
import FormValidation from './FormValidation';

export const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/useState',
        exact: true,
        component: FormUseState,
      },
      {
        path: '/useFormik',
        exact: true,
        component: FormUseFormik,
      },
      {
        path: '/useField',
        exact: true,
        component: FormUseField,
      },
      {
        path: '/validation',
        exact: true,
        component: FormValidation,
      }
    ],
  },
];
