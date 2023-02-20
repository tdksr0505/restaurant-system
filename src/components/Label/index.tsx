import styled from 'styled-components';

interface ITagProps {
  fontColor?: string;
  bgColor?: string;
}
const DEFAULT_BG = '#ab8a46';
const DEFAULT_FONT = '#FFF';

export default styled.div<ITagProps>`
  display: inline-block;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 16px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : DEFAULT_BG)};
  color: ${(props) => (props.fontColor ? props.fontColor : DEFAULT_FONT)};
  & + & {
    margin-left: 10px;
  }
`;