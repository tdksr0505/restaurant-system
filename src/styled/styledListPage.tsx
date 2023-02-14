import styled from 'styled-components';
import Button from '@/components/Button';
import FilterListIcon from '@mui/icons-material/FilterList';

export const PageButtonArea = styled.div`
  margin-bottom: 10px;
  text-align: right;
  ${Button} + ${Button} {
    margin-left: 10px;
  }
`;
export const FilterBox = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  @media screen and (min-width: 992px) {
    z-index: auto;
    display: block;
    position: static;
    flex: 0 0 auto;
    width: 300px;
    height: auto;
  }
`;
export const ListBox = styled.div`
  flex: 1 1 auto;
  @media screen and (min-width: 992px) {
    padding-left: 20px;
  }
`;
export const FilterIcon = styled(FilterListIcon)`
  color: #ffffff;
  font-size: 35px;
`;
export const FilterButton = styled.div`
  position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e4bc46;
  text-align: center;
  padding-top: 8px;
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const RestaurantListPageBox = styled.div`
  display: flex;
`;
