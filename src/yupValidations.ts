import * as yup from 'yup';

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

yup.addMethod(yup.string, 'email', function () {
  return this.test('email', 'Invalid Email', value => emailRegex.test(value));
});
