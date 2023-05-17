import Button from './Button';
import styles from '../styles/firstBlock.module.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { use100vh } from 'react-div-100vh';

const FirstBlock = (props) => {
    const renderRunText = (length = 10) => {
        return [...Array(length)].map((item, index) => (
            <span key={index}>
                <span>- Your choice -</span>
                <span>Champs</span>
            </span>
        ));
    };

    return (
        <>
            <section
                className={styles['first-block']}
                id="firstBlock"
                style={{ height: props.width <= 960 ? use100vh() : 'auto' }}>
                <div className="container">
                    <div className={styles['inner-content']}>
                        <h1>Champs</h1>
                        <h2>
                            Инвестиционная возможность
                            <br />
                            прикоснуться к&nbsp;миру гейминга
                        </h2>
                        <h2 className={styles['mobile-view']}>
                            Игровая периферия <br /> от геймеров для геймеров
                        </h2>
                        <p className={styles['mobile-text']}>
                            Увеличим ваши инвестиции на&nbsp;51,6% годовых за&nbsp;12 месяцев,
                            потому что мы создаем именно то, что&nbsp;покупают!
                        </p>
                        <div className={styles['list']}>
                            <div className={styles['listElement']}>
                                <div className={styles['listMark-circle']} />
                                <span>Заключим договор займа до&nbsp;51,6% годовых</span>
                            </div>
                            <div className={styles['listElement']}>
                                <div className={styles['listMark-circle']} />
                                <span>Произведем качественные и&nbsp;востребованные товары</span>
                            </div>
                            <div className={styles['listElement']}>
                                <div className={styles['listMark-circle']} />
                                <span>Выполним обязательства в&nbsp;установленные сроки</span>
                            </div>
                            <div className={styles['listElement']}>
                                <div className={styles['listMark-circle']} />
                                <span>Продолжим наше взаимовыгодное сотрудничество</span>
                            </div>
                        </div>
                        <p className={styles['mobile-view']}>
                            Увеличим ваши инвестиции на&nbsp;51,6% годовых за&nbsp;12 месяцев,
                            потому что&nbsp;мы создаем именно то, что&nbsp;покупают!
                        </p>
                        <AnchorLink offset={150} href="#fifthBlock">
                            <Button>
                                <span>узнать о&nbsp;нас подробнее</span>
                            </Button>
                        </AnchorLink>
                    </div>
                </div>
                <div className={styles['section-bg']}>
                    <div className={styles['bg-rectangle-orange']} />
                    <div className={styles['bg-rectangle-transparent-1']} />
                    <div className={styles['bg-rectangle-transparent-2']} />
                    <div className={styles['bg-rectangle-white-1']} />
                    <div className={styles['bg-rectangle-white-2']} />
                    <div className={styles['bg-rectangle-text']} />
                    <div className={styles['bg-text-stripe']}>
                        <div className={styles['text-stripe']}>{renderRunText(20)}</div>
                    </div>
                </div>
                <div className={styles['bg-jinx']} />
                <div className={'gradient-side'} />
                <div className={'gradient-bottom'} />
            </section>
            <div className={styles['section-run-wrapper']}>
                <div className={styles['section-run-text']}>{renderRunText(20)}</div>
            </div>
        </>
    );
};

export default FirstBlock;
