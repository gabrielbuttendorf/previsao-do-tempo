import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
`;

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 8px;
  padding: 2rem; //mudar depois
  width: 90%; //mudar depois
  max-width: 400px; //mudar depois
`;