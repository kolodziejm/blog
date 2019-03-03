import styled from 'styled-components'

export default styled.input`
  display: block;
  background-color: #fff;
  border: 1px solid #3a86ff;
  border-radius: 4px;
  outline: none;
  color: #000;
  width: 100%;
  margin: ${props => props.margin};
  padding: 1rem 2rem;
  font-size: 1.6rem;
  transition: all 0.4s;

  &:focus {
    background-color: #ff006e;
    color: #fff;

    &::placeholder {
      color: #fff;
    }
  }
`
