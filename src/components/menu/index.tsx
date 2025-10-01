import {Container, MenuItem,ButtonIcon} from './styles';
import InicioIcon from '../../assets/botao-de-inicio.png';
import ShortsIcon from '../../assets/youtube.png';
 
const items = [
  { label: "Início", icon: InicioIcon },
  { label: "Shorts",icon: ShortsIcon}
] 

interface IProps {
  openMenu: boolean; 
}
 
function Menu({openMenu}:IProps) { 
  return( 
  <Container openMenu={openMenu}> 
    {items.map ((item,index)=>( 
      <MenuItem key={index}>
       <ButtonIcon alt={item.label} src={item.icon}/> 
       {item.label}
      </MenuItem> 

    ))} 

  </Container> 
  ) 
} 
      
export default Menu;
