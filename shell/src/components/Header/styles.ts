import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  column-gap: 3rem;
  padding: 3rem 0;
  border-bottom: 1px solid #fff;

  a {
    font-size: 1.8rem;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    transition: color 0.4s ease-out;

    &:hover {
      color: blueviolet;
    }
  }
`
