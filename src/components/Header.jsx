import Button from "./Button";
import styles from '../styles/header.module.scss';
import Logo from '../assets/logo.svg';
import LogoBlack from '../assets/logoBlack.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useState, useEffect } from "react";
import Vk from '../assets/vkBlack.svg';
import Tiktok from '../assets/tiktokBlack.svg';
import Youtube from '../assets/youtubeBlack.svg';
import { use100vh } from 'react-div-100vh';


const Header = (props) => {

    const { mobile, setOpen } = props;
    const [fixed, setFixed] = useState(false);

    const changeNavBg = () => {
        window.scrollY >= 1 ? setFixed(true) : setFixed(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
        return () => {
            window.removeEventListener('scroll', changeNavBg);
        }
    }, [])

    return (
        <header className={`${fixed ? styles['fixed-header'] : undefined} ${mobile ? styles['fixed-header-transparent'] : undefined}`}>
            <div className={styles["header-wrapper"]}>
                <div className={styles["common-block"]}>
                    <AnchorLink href="#firstBlock" onClick={() => setOpen(false)}>
                        <img src={Logo} />
                    </AnchorLink>
                    <div className={styles["header-anchors"]}>
                        <AnchorLink href="#secondBlock">
                            Предложение
                        </AnchorLink>
                        <AnchorLink href="#sixthBlock">
                            Путь инвестора
                        </AnchorLink>
                        <AnchorLink offset={220} href="#thirdBlock">
                            Гарантии
                        </AnchorLink>
                        <AnchorLink offset={150} href="#fifthBlock">
                            Калькулятор
                        </AnchorLink>
                    </div>
                </div>
                <AnchorLink offset={150} href="#fifthBlock" className={styles['invest-button']}>
                    <Button type={!fixed && 'transparent'}>
                        <span>
                            Инвестировать
                        </span>
                    </Button>
                </AnchorLink>
                <div 
                    className={`${styles['mobile-menu-button']} ${mobile ? styles["menu-open"] : undefined}`} 
                    onClick={() => setOpen(!mobile)}
                >
                    <div />
                </div>
            </div>
            <div className={`${styles['mobile-menu']} ${mobile ? styles['mobile-menu-open'] : undefined}`} 
                style={{height: use100vh()}}
            >
                <div className={styles["mobile-anchors"]}>
                    <AnchorLink href="#secondBlock" onClick={() => setOpen(!mobile)}>
                        Предложение
                    </AnchorLink>
                    <AnchorLink href="#sixthBlock" onClick={() => setOpen(!mobile)}>
                        Путь инвестора
                    </AnchorLink>
                    <AnchorLink offset={220} href="#thirdBlock" onClick={() => setOpen(!mobile)}>
                        Гарантии
                    </AnchorLink>
                    <AnchorLink offset={150} href="#fifthBlock" onClick={() => setOpen(!mobile)}>
                        Калькулятор
                    </AnchorLink>
                </div>
                <AnchorLink offset={150} href="#fifthBlock" className={styles['invest-button-mobile']}  onClick={() => setOpen(!mobile)}>
                    <Button>
                        <span>
                            Инвестировать
                        </span>
                    </Button>
                </AnchorLink>
                <div className={styles['mobile-links']}>
                    <a href='https://vk.com/champspro_valorant'>
                        <img src={Vk} />
                    </a>
                    <a href='https://www.tiktok.com/@champs_dota2'>
                        <img src={Tiktok} />
                    </a>
                    <a href='https://www.youtube.com/@ChampsDOTA2'>
                        <img src={Youtube} />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;