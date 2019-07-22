import React from 'react';
import { TextField as _TextField, Card as _Card, Button } from '@material-ui/core';
import { Flex, Text } from 'rebass';
import styled from 'styled-components';
import { space, width } from 'styled-system';
import { useSnackbar } from 'notistack';
import { useFormik, FormikProvider, useField } from 'formik';

const Card = styled(_Card)`
  padding: 20px;
  padding-right: 50px;
  ${width}
`;

const TextField = styled(_TextField)`
  ${space}
`

const TextFieldFormik = (props) => {
  const [field, meta] = useField(props.name);

  console.log('meta: ', meta);

  return (
    <TextField
      {...props}
      {...field}
    />
  );
};

type Values = {

};

type Props = {
};
const FormUseFormik = (props: Props) => {
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = (values) => {
    enqueueSnackbar(`submit:  ${JSON.stringify(values)}`, {
      preventDuplicate: true,
      persist: false,
    });
  };

  const formikbag = useFormik<Values>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit,
  });

  const { handleSubmit } = formikbag;

  return (
    <Flex flex={1}>
      <Card width={800}>
        <Text mb={20}>useField</Text>
        <FormikProvider value={formikbag}>
          <Flex flexDirection='column'>
            <TextFieldFormik
              name='email'
              placeholder='email'
              mb={20}
            />
            <TextFieldFormik
              name='password'
              type='password'
              placeholder='password'
              mb={20}
            />
          </Flex>
          <Button
            type='submit'
            onClick={handleSubmit}
            >
            Submit
          </Button>
        </FormikProvider>
      </Card>
    </Flex>
  )
};

export default FormUseFormik;
