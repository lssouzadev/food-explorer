import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 130px;
  height: 32px;

  background-color: ${({ isNew }) =>
    isNew ? 'transparent' : 'rgba(255, 255, 255, 0.1)'};

  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.GRAY_700};
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`
