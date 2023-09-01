export abstract class VAL {
  static ENTER = (val :any) => {
    return {
      key: 'ENTER',
      lbl: val,
      message: 'Please enter ' + val
    };
  };
  static SELECT = (val : any) => {
    return {
      key: 'SELECT',
      lbl: val,
      message: 'Please select ' + val
    };
  };
  static WHITE_SPACE = {
    key: 'WHIE_SPACE',
    message: 'White space not allowed'
  };
  static MAX_CHAR = (val : any) => {
    return {
      key: 'MAX_CHAR',
      message: 'Maximum ' + val + ' characters allowed'
    };
  };
  static MIN_CHAR = (val : any) => {
    return {
      key: 'MIN_CHAR',
      message: 'Minimum ' + val + ' characters allowed'
    };
  };
  static NUM = {
    key: 'NUM',
    message: 'Only numbers allowed'
  };
  static DECIMAL = {
    key: 'DECIMAL',
    message: 'Only whole numbers allowed'
  };
  static MIN = (val : any) => {
    return {
      key: 'MIN',
      message: 'Minimum digits ' + val + ' allowed'
    };
  };
  static MAX = (val : any) => {
    return {
      key: 'MAX',
      message: 'Maximum digits ' + val + ' allowed'
    };
  };
  static NUM_POS = {
    key: 'NUM_POS',
    message: 'Only positive numbers allowed'
  };
  static ALPHA = {
    key: 'ALPHA',
    message: 'Only alphabets allowed'
  };
  static ALPHANUM = {
    key: 'ALPHANUM',
    message: 'Only alphabets and numbers allowed'
  };
  static HYPHEN = {
    key: 'HYPHEN',
    message: 'Hyphen not allowed at start and end'
  };
  static PATTERN = {
    key: 'PATTERN',
    message: 'Special characters not allowed'
  };
  static EMAIL = {
    key: 'EMAIL',
    message: 'Invalid email containing "@, .com"'
  };
  static PASSWORD = {
    key: 'PASSWORD',
    message: 'Invalid password must contains Upper Case, Lower Case, Number and Special Character.'
  };
  static DATE_EQUAL = {
    key: 'DATE_EQUAL',
    message: 'Date must be equal current date'
  };
  static MIN_DATE = {
    key: 'MIN_DATE',
    message: 'Date must be <= current date'
  };
  static MAX_DATE = {
    key: 'MAX_DATE',
    message: 'Date must be >= current date'
  };
  static CONFIRM = {
    key: 'CONFIRM',
    message: 'Please enter Confirm Password'
  };
  static MATCH = {
    key: 'MATCH',
    message: 'Your passwords are not match'
  };
  static DUPLICATE = {
    key: 'DUPLICATE',
    message: 'Duplicate Selection Not Allowed'
  };
}
