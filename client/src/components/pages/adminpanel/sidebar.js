import React from 'react'
import { Menu } from 'antd';
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import { BugOutlined, StarFilled, StarTwoTone,PieChartOutlined } from '@ant-design/icons';
const SubMenu = Menu.SubMenu;


class Sider extends React.Component {
  state = {
    theme: 'dark',
    current: '1',
  }

  handleClick = (e) => {
  
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div className="sidebar">
      
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 240 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
             <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
             </Menu.Item>
          <SubMenu key="sub1" title={<span><BugOutlined /><span>sidebar pro</span></span>}>
            <Menu.Item key="0">Option 1 <Link to="/antdmenue"/></Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><StarFilled/><span>Navigtion Two</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span><StarTwoTone/><span>Navigation Three</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><StarTwoTone/><span>Navigation Three</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><StarTwoTone/><span>Navigation Three</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

 export default Sider;