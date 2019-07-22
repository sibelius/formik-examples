import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { Flex, Text } from 'rebass';
import { space } from 'styled-system';
import styled from 'styled-components';

import { Link as _Link } from 'react-router-dom';

const Link = styled(_Link)`
  ${space}
`;

type Props = RouteConfigComponentProps;
const Root = ({ route }: Props) => {
  return (
    <>
      <Text mb={20}>Taming Forms \o/</Text>
      <Flex>
        <Link to='/useState' mr={20}>useState</Link>
        <Link to='/useFormik' mr={20}>useFormik</Link>
        <Link to='/useField' mr={20}>useField</Link>
        <Link to='/validation' mr={20}>Validation</Link>
      </Flex>
      <Text mb={20}>----</Text>
      {renderRoutes(route.routes)}
    </>
  )
};

export default Root;
