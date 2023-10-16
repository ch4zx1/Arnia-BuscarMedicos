import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  flex-direction: row;

  input {
    border-radius: 16px;
    border: 1.5px solid var(--cinza-300, #e0e0e0);
    background: var(--branco, #fff);
    width: 400px;
    height: 56px;
    flex-shrink: 0;

    color: var(--cinza-600, #757575);
    /* 16px Regular */
	font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    outline: none;
    letter-spacing: 0.2px;
    padding: 16px 50px 16px 16px;
  }

  button {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    margin-left: -40px;
    margin-top: 16px;
    background-color: transparent;
    border-style: none;
  }
`
