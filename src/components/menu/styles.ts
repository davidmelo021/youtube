import styled from "styled-components";

export const Container = styled.div<{openMenu:boolean}>`
  width: ${( {openMenu}) => openMenu ? '250px' : '100px' };
  height: calc (100vh - 55px);
  box-sizing: border-box;
  padding: 10px 10px 10px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  position: sticky;
  top: 55px;
`;

export const MenuItem = styled.div<{openMenu:boolean}>`
  width: 98%;
  min-height:  ${( {openMenu}) => openMenu ? '45px' : '70px' };
  border-radius: 10px;
  cursor: pointer;
  padding: 2px 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${( {openMenu}) => openMenu ? 'row' : 'column' };
  align-items: center;
  justify-content: ${( {openMenu}) => openMenu ? 'none' : 'center' };
  
  itemlabel{
  font-weight:${( {openMenu}) => openMenu ? '600' : '400' } ;
  margin-left: ${( {openMenu}) => openMenu ? '20px' : 'none' } ;
  font-size: ${( {openMenu}) => openMenu ? '16px' : '12px' } ;
  }
  
  :hover{
    background-color: #F2F2F2;
  }
`;

export const ButtonIcon = styled.img`
  width: 25px;
`;