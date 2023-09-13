import styled from 'styled-components';

export const Container = styled.button`
  background-color: #f8f9fa; /* Cor de fundo do Google */
  color: #3c4003; /* Cor do texto */
  border: none; /* Sem borda */
  border-radius: 4px; /* Borda arredondada */
  padding: 10px 20px; /* Preenchimento interno */
  font-size: 16px; /* Tamanho da fonte */
  cursor: pointer; /* Ícone de cursor de mão */
  outline: none; /* Remover contorno ao focar */
  transition: background-color 0.2s; /* Efeito de transição suave */

  /* Efeito de sombra quando hover */
  /* Estilos quando o botão é pressionado (cor mais escura) */
  &:active {
    background-color: #f8f9fa;
  }

  /* Estilos quando o botão é hover (cor mais clara) */
  &:hover {
    background-color: rgba(97, 98, 98, 0.1);
  }
`;
