import styled from 'styled-components'

export default styled.input`
  padding: 1rem 2rem;
  background-color: #abff4f;
  font-weight: bold;
  border-radius: 4px;
  color: #555;
  border: none;
  font-size: 1.6rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
    transform: translateY(-3px);
  }
`
