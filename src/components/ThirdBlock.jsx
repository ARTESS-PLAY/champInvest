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
                            <p>
                                Платить в&nbsp;срок&nbsp;&mdash; это наш принцип. Оплата основного
                                долга и&nbsp;процентов производится каждые 7&nbsp;дней
                                в&nbsp;течение всего срока договора.
                            </p>
                        </div>
                        <div className={styles['list-element']}>
                            <div>
                                <div className={styles['list-mark']} />
                                <h5>Капитал в&nbsp;товаре</h5>
                            </div>
                            <p>
                                Инвестирование в&nbsp;товарный бизнес безопасно. Согласно договору
                                инвестиционного займа, товар находится в&nbsp;залоге у&nbsp;вас
                                и&nbsp;может быть реализован вами под нашим аккаунтом
                                на&nbsp;маркетплейсе, что гарантирует вам возврат денежных средств
                                при любом варианте.
                            </p>
                        </div>
                        <div className={styles['list-element']}>
                            <div>
                                <div className={styles['list-mark']} />
                                <h5>Бренд с&nbsp;историей</h5>
                            </div>
                            <p>
                                Уже как 3&nbsp;года мы&nbsp;занимаемся созданием новостного
                                и&nbsp;обучающего контента, у&nbsp;нас есть имя и&nbsp;аудитория,
                                что дает нам преимущество перед другими брендами, такие как:
                                повышение узнаваемости, лояльность и&nbsp;доверие, привлечение новой
                                аудитории в&nbsp;нашу эко систему и&nbsp;как следствие, увеличение
                                продаж нашей продукции.
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
