import styled from 'styled-components'

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px;
  width: 18%;
  height: 150vh;
  background-color: ${props => (props.toggle ? '#181818' : '#ffffff')};
`
export const UlContaner = styled.ul`
  list-style-type: none;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  color: '#94a3b8';
  :hover {
    color: red;
    background-color: ${props => (props.toggle ? '#94a3b8' : ' #e2e8f0')};
  }
`

export const ItemPara = styled.p`
  color: #475569;
  font-family: roboto;
  font-size: 20px;
  font-weight: 500;
  margin-left: 10px;
`
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const ContactPara = styled.p`
  color: #909090;
  font-size: 23px;
  font-family: Roboto;
  font-weight: 500;
`
export const SocialLogos = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
`