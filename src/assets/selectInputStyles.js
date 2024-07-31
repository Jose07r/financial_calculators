const selectStyles = {
  container: (baseStyles, state) => ({
    padding: 0,
  }),
  placeholder: (baseStyles, state) => ({
    ...baseStyles,
    color: '#4C707C',
  }),
  control: (baseStyles, state) => ({
    display: 'flex',
    cursor: 'pointer',
    fontSize: '1rem',
    borderRadius: 4,
    boxShadow: 'inset 0 0 2px 1px rgba(17, 138, 178, 0.35)',
    padding: '2px 4px',
    backgroundColor: '#FAFAFA',
    opacity: '0.75',
    transition: 'opacity .3s ease',
  }),
  dropdownIndicator: (baseStyles, state) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    color: '#4C707C',
  }),
  indicatorSeparator: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: 'rgba(17, 138, 178, 0.35)',
    margin: 'auto',
    height: '60%',
  }),
  menu: (baseStyles, state) => ({
    ...baseStyles,
    fontSize: '1rem',
    maxWidth: '100px',
    boxShadow: '0 0 4px 2px rgba(76, 112, 124, .25)',
    borderRadius: 4,
  }),
  menuList: (baseStyles, state) => ({
    ...baseStyles,
    padding: 0,
    backgroundColor: '#FAFAFA',
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isFocused ? 'rgba(97, 234, 255, 0.1)' : '#FAFAFA',
    color: state.isFocused ? '#118AB2' : '#74A5B5',
  }),
};

export default selectStyles;
