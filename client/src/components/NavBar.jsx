import React from 'react'
import { Input, Space, Layout, Menu} from 'antd'
import '../styles/Nav.css'
import { Link } from 'react-router-dom'

const { Header } = Layout;
const { Search } = Input;
const onSearch = (value) => console.log(value);

function NavBar() {
    return (
        <div>
            <div style={{ position: 'fixed', width: '100%', zIndex: '10' }}>
                <div className='top-header'>
                    <div>
                        <span>Hi!</span>
                        <span><Link to="/sellerlogin">Login</Link></span>
                        <span>Or</span>
                        <span><Link to="sellersignup">Register</Link></span>
                    </div>
                    <div>
                        <Space direction='vertical'>
                            <Search placeholder="input search text" onSearch={onSearch} enterButton />
                        </Space>
                    </div>
                </div>
                <Header style={{ backgroundColor: '#ECC13B', display: 'flex', justifyContent: 'space-between', marginLeft: '-12px', marginRight: '-8px' }}>
                {/* <div className="logo" /> */}
                <Link to="/">
                    <div className='logo' style={{ color: '#251E8C', padding: '0px' }}>
                        <span>Bidding</span>
                        <span className='for-container'>
                            <small className='for'>FOR</small>
                        </span>
                        <span>Stuffs</span>
                    </div>
                </Link>
                {/* <Menu className='menu-fonts'
                    theme="dark"
                    mode="horizontal"
                    items = {
                        [
                            { label: 'About', key: 'about' },
                        { label: 'Contact Us', key: 'contact' },
                        ]
                    }
                /> */}
                <Menu className='menu-fonts' style={{ display: 'flex', alignItems: 'center', backgroundColor: '#ECC13B' }}>
                    <div className='hover-links' style={{ marginRight: '40px'}}>
                        <Link to="/" style={{ color: '#251E8C' }}>Home</Link>
                    </div>
                    <div className='hover-links' style={{ marginRight: '40px'}}>
                        <Link to='#about' style={{ color: '#251E8C' }}>About</Link>
                    </div>
                    <div className='hover-links' style={{ marginRight: '4px'}}>
                        <Link to='#contact' style={{ color: '#251E8C' }}>Contact</Link>
                    </div>
                </Menu>
                </Header>
            </div>
            <div style={{ height: '100%', marginTop: '102px' }}>
                <div className='hero-img'>
                </div>
            </div>
        </div>
    )
}

export default NavBar;

