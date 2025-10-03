import {Container ,CategoryButton} from './styles';
import { useState } from 'react';

const categories = [
  "Todos",
  "Música",
  "Jogos",
  "Esportes",
  "Filmes",
  "Notícias",
  "Ao Vivo",
  "Podcasts",
  "Programação",
  "Educação",
  "Animações"
]

interface IProps {
  openMenu: boolean;
}

function Categories({ openMenu }: IProps) {
  // Estado para armazenar qual categoria está selecionada
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <Container openMenu={openMenu}>
      {categories.map((category, index) => (
        <CategoryButton
          key={index}
          selected={selectedCategory === category}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </CategoryButton>
      ))}
    </Container>
  );
}

export default Categories;