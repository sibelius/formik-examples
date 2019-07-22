import React, { useState } from 'react';
import { TextField as _TextField, Card as _Card, Button } from '@material-ui/core';
import { Flex, Text } from 'rebass';
import styled from 'styled-components';
import { space, width } from 'styled-system';
import { useSnackbar } from 'notistack';
import { useFormik, FormikProvider } from 'formik';

const Card = styled(_Card)`
  padding: 20px;
  padding-right: 50px;
  ${width}
`;

const TextField = styled(_TextField)`
  ${space}
`

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

  const { values, setFieldValue, handleSubmit } = formikbag;

  return (
    <Flex flex={1}>
      <Card width={800}>
        <Text mb={20}>useFormik</Text>
        <FormikProvider value={formikbag}>
          <Flex flexDirection='column'>
            <TextField
              placeholder='email'
              mb={20}
              value={values.email}
              onChange={(e) => setFieldValue('email', e.target.value)}
            />
            <TextField
              type='password'
              placeholder='password'
              mb={20}
              value={values.password}
              onChange={(e) => setFieldValue('password', e.target.value)}
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
