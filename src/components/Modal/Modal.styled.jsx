import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const ModalDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 400px;
  padding: 15px;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  flex-direction: column;
  background-color: white;

  @media (min-width: 768px) {
    width: 400px;
    height: 500px;
    padding: 25px;
  }
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
