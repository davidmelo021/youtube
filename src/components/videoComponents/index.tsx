import {ChannelImage, Container, ImageBanner, TextContainer, Title, TitleContainer,TextCard} from './styles'

function VideoComponent() { 

  return( 
  <Container> 
    <ImageBanner src="https://i.ytimg.com/vi/DS1djiXXyU4/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAUJuOZ5OQkYmM0cfSr81D3CE1WRA"/>
    <TitleContainer>
      <ChannelImage>
        D
      </ChannelImage>
      <TextContainer>
        <Title>Nilo-Moçambique</Title>
        <TextCard>Nilo</TextCard>
        <TextCard>22mil de visualização-há 1 mês</TextCard>
      </TextContainer>
    </TitleContainer>
  </Container> 
  ) 
} 
      
export default VideoComponent;
