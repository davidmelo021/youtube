import {Container, MenuItem,ButtonIcon} from './styles';
import InicioIcon from '../../assets/botao-de-inicio.png';
import ShortsIcon from '../../assets/youtube.png';
import InscriptionIcon from '../../assets/inscricao.png';
import { useNavigate } from 'react-router-dom';

 
const items = [
  { label: "Início", icon: InicioIcon ,link:'/' },
  { label: "Shorts",icon: ShortsIcon,link:'/shorts'},
  { label: "Inscrição",icon: InscriptionIcon,link:'/iscricao'}
] 

interface IProps {
  openMenu: boolean; 
}
 
function Menu({openMenu}:IProps) { 

  const navigate = useNavigate();

  return( 
  <Container openMenu={openMenu}> 
    {items.map ((item,index)=>( 
      <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)} >
       <ButtonIcon alt={item.label} src={item.icon}/> 
       {item.label}
      </MenuItem> 

    ))} 

  </Container> 
  ) 
} 
      
export default Menu;
