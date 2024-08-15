export const ColorfulMessage = ({ color, children }) => {
  console.log('--ColorfulMessage--');
  // const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: '1.2rem',
  };

  return <p style={contentStyle}>{children}</p>;
};
