import './App.scss';
import FirstBlock from './components/FirstBlock';
import Header from './components/Header';
import SecondBlock from './components/SecondBlock';
import ThirdBlock from './components/ThirdBlock';
import FourthBlock from './components/FourthBlock.jsx';
import FifthBlock from './components/FifthBlock';
import SixthBlock from './components/SixthBlock';
import SixthBlockMobile from './components/SixthBlock.mobile';
import SeventhBlock from './components/SeventhBlock';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

function App() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const [width, setWidth] = useState(0);

    const [loaded, setLoaded] = useState(false);

    const handleLoaded = () => {
        setLoaded(true);
    };

    useEffect(() => {
        window.addEventListener('load', handleLoaded);
        return () => {
            window.removeEventListener('load', handleLoaded);
        };
    }, []);

    const handleMobileMenu = (val) => {
        setMobileOpen(val);
        document.body.style.overflow = val ? 'hidden' : 'auto';
    };

    useEffect(() => {
        setWidth(window.innerWidth);

        window.onresize = () => {
            setWidth(window.innerWidth);
        };
    }, []);

    useEffect(() => {
        width > 1100 && mobileOpen && handleMobileMenu(false);
    }, [width]);

    return (
        <div className="App">
            <Header mobile={mobileOpen} setOpen={(val) => handleMobileMenu(val)} />
            <FirstBlock width={width} loaded={loaded} />
            <SecondBlock />
            <SeventhBlock />
            <FourthBlock />
            <ThirdBlock />
            {width > 960 ? <SixthBlock /> : <SixthBlockMobile />}
            <FifthBlock />
            <Footer />
        </div>
    );
}

export default App;
