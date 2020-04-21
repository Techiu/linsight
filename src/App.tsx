import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
library.add(fas)

const App: React.FC = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex="0" onSelect={(index) => { alert(index) }} defaultOpenSubMenus={['2']}>
          <MenuItem>cool link</MenuItem>
          <MenuItem disabled>cool link 2</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown 1</MenuItem>
            <MenuItem disabled>dropdown 2</MenuItem>
          </SubMenu>
          <MenuItem>cool link 3</MenuItem>
        </Menu>
        <Button btnType={'primary'} disabled size={'lg'}>Hello</Button>
        <Button btnType={'link'} disabled href="http://www.bing.com">Bing</Button>
      </header>
    </div>
  );
}

export default App;
