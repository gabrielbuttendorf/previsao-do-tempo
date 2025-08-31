import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
`;

export const Content = styled(Dialog.Content)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  width: 100%;
  max-width: 380px;

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    height: 40px;
    text-indent: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }

  button[type="submit"] {
    padding: 0.5rem 0;
    border-radius: 8px;
    border: none;
    background: #b1b1b1ff;
    cursor: pointer;

    &:hover {
      background: #a8a8a8ff;
      transition: background 0.1s;
    }
  }
`;

export const Close = styled(Dialog.Close)`
  background: transparent;
  border: 0;
  line-height: 0;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;