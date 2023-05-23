import styles from '../styles/thirdBlock.module.scss';

const ThirdBlock = () => {
    return (
        <section className={styles['thirdBlock']} id="thirdBlock">
            <div className="container">
                <div className={styles['heroes']}>
                    <div />
                </div>
                <div className={styles['section-text']}>
                    <h3>
                        Какие есть <span>гарантии?</span>
                    </h3>
                    <div className={styles['list']}>
                        <div className={styles['list-element']}>
                            <div>
                                <div className={styles['list-mark']} />
                                <h5>Договор инвестиционного займа</h5>
                            </div>
                            <p>
                                Все обязательства регистрируются на&nbsp;ИП, которое занимается
                                хранением и&nbsp;сбытом товара, никаких юридических лиц посредников
                            </p>
                        </div>
                        <div className={styles['list-element']}>
                            <div>
                                <div className={styles['list-mark']} />
                                <h5>Своевременные выплаты</h5>
                            </div>
                            <p>Платить в&nbsp;срок - это&nbsp;наш принцип</p>
                        </div>
                        <div className={styles['list-element']}>
                            <div>
                                <div className={styles['list-mark']} />
                                <h5>Капитал в&nbsp;товаре</h5>
                            </div>
                            <p>
                                Инвестирование в&nbsp;товарный бизнес безопасно,
                                так&nbsp;как&nbsp;товар всегда можно распродать, получив обратно
                                вложенные денежные средства
                            </p>
                        </div>
                        <div className={styles['list-element']}>
                            <div>
                                <div className={styles['list-mark']} />
                                <h5>Бренд с&nbsp;историей</h5>
                            </div>
                            <p>
                                Уже как 3&nbsp;года мы занимаемся созданием новостного
                                и&nbsp;обучающего контента, у&nbsp;нас есть имя и&nbsp;аудитория,
                                и&nbsp;мы очень дорожим этим 
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles['orange-bg']} />
                <div className={styles['gradient']} />
                <div className={styles['gray-bg']}>
                    <div className={styles['image']} />
                </div>
                <div className={styles['money-presents']} />
                <div className="gradient-bottom" />
            </div>
        </section>
    );
};

export default ThirdBlock;
