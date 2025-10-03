import styled from "styled-components";

// Container principal da barra de categorias
export const Container = styled.div<{ openMenu: boolean }>`
  display: flex;
  overflow-x: auto;  /* permite scroll horizontal se precisar */
  padding: 10px 20px;
  gap: 10px;
  background-color: #fff;

  /* Esconde scrollbar no Chrome */
  &::-webkit-scrollbar {
    display: none;
  }
`;

// Botão de cada categoria
export const CategoryButton = styled.button<{ selected: boolean }>`
  padding: 6px 14px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap; /* impede quebra de linha */
  transition: 0.2s ease-in-out;

  /* Estilo dinâmico: muda cor se estiver selecionado */
  background-color: ${({ selected }) => (selected ? "#000" : "#f1f1f1")};
  color: ${({ selected }) => (selected ? "#fff" : "#000")};

  &:hover {
    background-color: ${({ selected }) => (selected ? "#333" : "#e5e5e5")};
  }
`;