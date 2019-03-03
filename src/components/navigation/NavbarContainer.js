import styled from 'styled-components'

export default styled.nav`
  background-image: linear-gradient(
    to right,
    rgba(131, 56, 236, 0.95) 20%,
    rgba(255, 0, 110, 0.95)
  );
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem 1.5rem;
  width: 100%;
  z-index: 9999;
  border-bottom: 2px solid #abff4f;

  @media only screen and (min-width: 48em) {
    padding: 1.5rem 4rem 1.5rem 1.5rem;
  }
`
