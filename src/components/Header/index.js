import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MobileMenu from '../../components/MobileMenu'

import './style.css'

const Header = () => {
    const [scroll, setScroll] = React.useState(0);

    const handleScroll = () => setScroll(document.documentElement.scrollTop);

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const style = scroll > 80 ? { color: "#636363" } : { color: "#636363" };

    return (

        <div className="Header_root">
            <div className="header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9">
                            <div className="header-menu d-lg-block d-none">
                                <ul className="mobail-menu d-flex">
                                    <li><AnchorLink style={style} href='#home'>Home</AnchorLink></li>
                                    <li><AnchorLink style={style} href='#couple'>Couple</AnchorLink></li>
                                    <li><AnchorLink style={style} href='#story'>Story</AnchorLink></li>
                                    <li><AnchorLink style={style} href='#people'>People</AnchorLink></li>
                                    <li><AnchorLink style={style} href='#event'>Events</AnchorLink></li>
                                    <li><AnchorLink style={style} href='#gallery'>Gallery</AnchorLink></li>
                                    <li><AnchorLink style={style} href='#rsvp'>Rsvp</AnchorLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header;
