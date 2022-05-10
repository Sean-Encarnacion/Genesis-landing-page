import styled from'styled-components'

export const OuterContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #00000080;
  z-index: 100;
`

export const CloseBtn = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #222;
  margin-top: -3.5rem;
  margin-left: 20rem; 
  transition: transform 0.3s ease-in-out;
  text-align: center;
  font-size: 1.3rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    transform: rotate(180deg);
  }

`