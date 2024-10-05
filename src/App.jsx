import { Carrosel } from './components/Carrosel';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import './global.css';

export function App() {

  return (
    <div>
      <Logo/>
      <Menu/>
      <Carrosel/>
    </div>
  )
}
