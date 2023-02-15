import styled from 'styled-components';
import StarIcon from '@mui/icons-material/Star';

export const Title = styled.div`
  font-size: 20px;
  color: #464646;
  margin-bottom: 6px;
`;

export const SimpleAddress = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #306dad;
  margin-bottom: 8px;
`;

export const VisitMark = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  border: 2px solid #ff0000;
  padding: 2px;
  color: #ff0000;
  font-weight: bold;
  font-size: 18px;
  transform: rotate(35deg);
`;

export const ListItemBox = styled.div`
  padding: 15px;
`;
export const ListItem = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  /* box-shadow: 0px 5px 9px -3px rgba(110, 106, 106, 0.75); */
  cursor: pointer;
  &:focus-visible,
  &:focus,
  &:active {
    outline: 0;
  }
  & + & {
    margin-top: 20px;
  }
  @media (hover: hover) {
    &:hover {
      background-color: #d2e6fc;
    }
  }
`;

export const Star = styled(StarIcon)`
  color: #f0d90f;
`;
export const Rate = styled.div`
  color: #747456;
  font-size: 16px;
  margin-left: 4px;
`;
export const RateBox = styled.div`
  display: flex;
  align-items: center;
`;
export const List = styled.div`
  width: 100%;
  flex: 1 1 auto;
  @media screen and (min-width: 992px) {
    padding-left: 20px;
  }
`;
