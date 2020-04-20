import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

const App: React.FC = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex="0" onSelect={(index) => { alert(index) }} mode="vertical" defaultOpenSubMenus={['2']}>
          <MenuItem>cool link</MenuItem>
          <MenuItem disabled>cool link 2</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown 1</MenuItem>
            <MenuItem disabled>dropdown 2</MenuItem>
          </SubMenu>
          <MenuItem>cool link 3</MenuItem>
        </Menu>
        <Button btnType={ButtonType.Primary} disabled size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Link} disabled href="http://www.bing.com">Bing</Button>
      </header>
    </div>
  );
}

export default App;
