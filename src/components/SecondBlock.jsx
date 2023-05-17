import Button from './Button';
// import AnimatedNumber from "animated-number-react";
import React from 'react';
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import styles from '../styles/secondBlock.module.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const SecondBlock = () => {
    const [ref, { entry }] = useIntersectionObserver();
    const isVisible = entry && entry.isIntersecting;

    const formatValue = (value) => {
        let val = Number(value).toFixed(0);
        if (value > 999) {
            return val.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        }
        return val;
    };

    return (
        <section className={styles['second-block']} id="secondBlock">
            <div className="container">
                <div className={styles['section-wrapper']}>
                    <div className={styles['section-text']}>
                        <h3>
                            Мы создаем игровую периферию -<br />
                            это всегда <span>актуально</span>
                        </h3>
                        <p>
                            Периферия для геймера, как ракетка для теннисиста - без нее не поиграешь
                        </p>
                        <div className={styles['checkList']}>
                            <div className={styles['checkList-item']}>
                                <div className={styles['checkList-mark']} />
                                <span>Оборот товаров свыше 3 млн. рублей за 6 месяцев </span>
                            </div>
                            <div className={styles['checkList-item']}>
                                <div className={styles['checkList-mark']} />
                                <span>Пониженная конкуренция из-за ухода западных брендов</span>
                            </div>
                            <div className={styles['checkList-item']}>
                                <div className={styles['checkList-mark']} />
                                <span>Нашими девайсами пользуются про-игроки</span>
                            </div>
                            <div className={styles['checkList-item']}>
                                <div className={styles['checkList-mark']} />
                                <span>Более 500 положительных отзывов в сети</span>
                            </div>
                        </div>
                        <AnchorLink offset={150} href="#fifthBlock">
                            <Button>Стань партнером champs</Button>
                        </AnchorLink>
                    </div>
                    <div className={styles['image-wrapper']}>
                        <div className={styles['wb-report-text']}>
                            <h4>Показатели WB</h4>
                            <p>За 6 месяцев</p>
                        </div>
                        <div className={styles['wb-report']} />
                        <div className={styles['post']} />
                        <div className={styles['post-text']}>
                            <h4>Топ 1 мира</h4>
                            <p>По рейтингу в Valorant</p>
                        </div>
                    </div>
                </div>
                <div className={styles['stats-wrapper']} ref={ref}>
                    <div className={styles['stat-column']}>
                        <p>
                            {/* <AnimatedNumber
                            value={isVisible ? 14 : 0}
                            formatValue={formatValue}
                            duration={500}
                        /> */}
                            14 млн.
                            {/* <span>
                            млн.
                        </span> */}
                        </p>
                        <span>суммарный охват/мес в TikTok</span>
                    </div>
                    <div className={styles['stat-column']}>
                        <p>
                            {/* <AnimatedNumber
                            value={isVisible ? 40000 : 0}
                            formatValue={formatValue}
                            duration={500}
                            delay={400}
                        /> */}
                            40000
                        </p>
                        <span>подписчиков в VK</span>
                    </div>
                    <div className={styles['stat-column']}>
                        <p>
                            {/* <AnimatedNumber
                            value={isVisible ? 12000 : 0}
                            formatValue={formatValue}
                            duration={500}
                            delay={1000}
                        /> */}
                            12000 +
                            {/* <span>
                            +
                        </span> */}
                        </p>
                        <span>уникальных посетителей/мес</span>
                    </div>
                    <div className={styles['stat-column']}>
                        <p>
                            {/* <AnimatedNumber
                            value={isVisible ? 220000 : 0}
                            formatValue={formatValue}
                            duration={500}
                            delay={1500}
                        /> */}
                            220000
                        </p>
                        <span>подписчиков на YouTube</span>
                    </div>
                    <div className={styles['stat-column']}>
                        <p>
                            {/* <AnimatedNumber
                            value={isVisible ? 43000 : 0}
                            formatValue={formatValue}
                            duration={500}
                            delay={2000}
                        /> */}
                            43000 +
                            {/* <span>
                            +
                        </span> */}
                        </p>
                        <span>просмотров YouTube/мес</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondBlock;
