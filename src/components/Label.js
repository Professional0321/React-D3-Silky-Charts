import styled from 'styled-components';

const Label = styled.text.attrs(({ axis, margin, width, height }) => ({
  className: `${axis}-axis-label`,
  x: axis === 'x' ? width / 2 : 0 - height / 2,
  y: axis === 'x' ? height + margin.bottom : 0 - margin.left / 1.5,
}))`
  text-anchor: middle;
  transform: ${({ axis }) => axis === 'y' && 'rotate(-90deg)'};
`;

export default Label;
