import React, { useState } from 'react';
import { TextField as _TextField, Card as _Card, Button } from '@material-ui/core';
import { Flex, Text } from 'rebass';
import styled from 'styled-components';
import { space, width } from 'styled-system';
import { useSnackbar } from 'notistack';

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
const FormUseState = () => {
  const mapPropsToValues = () => {
    return {
      email: '',
      password: '',
    };
  };

  const [formState, setFormState] = useState<Values>(mapPropsToValues());

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = () => {
    enqueueSnackbar(`submit:  ${JSON.stringify(formState)}`, {
      preventDuplicate: true,
      persist: false,
    });
  };

  const setFieldValue = (fieldName: string, value) => {
    setFormState({
      ...formState,
      [fieldName]: value,
    });
  };

  return (
    <Flex flex={1}>
      <Card width={800}>
        <Text mb={20}>useState</Text>
        <Flex flexDirection='column'>
          <TextField
            placeholder='email'
            mb={20}
            value={formState.email}
            onChange={(e) => setFieldValue('email', e.target.value)}
          />
          <TextField
            type='password'
            placeholder='password'
            mb={20}
            value={formState.password}
            onChange={(e) => setFieldValue('password', e.target.value)}
          />
        </Flex>
        <Button
          type='submit'
          onClick={handleSubmit}
          >
          Submit
        </Button>
      </Card>
    </Flex>
  )
};

export default FormUseState;
