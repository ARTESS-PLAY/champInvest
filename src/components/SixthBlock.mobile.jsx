import Step1 from '../assets/step1.png';
import Step2 from '../assets/step2.png';
import Step3 from '../assets/step3.png';
import Step4 from '../assets/step4.png';
import Step5 from '../assets/step5.png';
import styles from '../styles/sixthBlock.module.scss';

const SixthBlockMobile = () => {
    return (
        <section className={styles['sixth-block']} id="sixthBlock">
            <div className="container">
                <h3>
                    Путь инвестора от&nbsp;инвестиции до&nbsp;<span>51.6% годовых</span>
                </h3>
                <p className={styles['pp']}>
                    5 шагов от&nbsp;первой встречи до&nbsp;успешного сотрудничества.
                </p>
                <div className={styles['content-wrapper']}>
                    <div className={styles['slide-block']}>
                        <div className={styles['slide-head']}>
                            <p>Шаг 1</p>
                            <div className={styles['arrow']} />
                        </div>
                        <div className={styles['slide-block-content']}>
                            <img src={Step1} />
                            <div>
                                <h5>Заинтересоваться</h5>
                                <span>
                                    После оставленной заявки, наш менеджер свяжется с&nbsp;вами
                                    в&nbsp;ближайшее время
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles['slide-block']}>
                        <div className={styles['slide-head']}>
                            <p>Шаг 2</p>
                            <div className={styles['arrow']} />
                        </div>
                        <div className={styles['slide-block-content']}>
                            <img src={Step2} />
                            <div>
                                <h5>Познакомиться</h5>
                                <span>
                                    Первый диалог будет на&nbsp;тему о&nbsp;нашем бренде, товарном
                                    ассортименте и&nbsp;ответах на&nbsp;ваши вопросы
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles['slide-block']}>
                        <div className={styles['slide-head']}>
                            <p>Шаг 3</p>
                            <div className={styles['arrow']} />
                        </div>
                        <div className={styles['slide-block-content']}>
                            <img src={Step3} />
                            <div>
                                <h5>Убедиться</h5>
                                <span>
                                    Договор и&nbsp;перевод денежных средств будет нашей отправной
                                    точкой к&nbsp;пассивному доходу
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles['slide-block']}>
                        <div className={styles['slide-head']}>
                            <p>Шаг 4</p>
                            <div className={styles['arrow']} />
                        </div>
                        <div className={styles['slide-block-content']}>
                            <img src={Step4} />
                            <div>
                                <h5>Получить</h5>
                                <span>
                                    Оплата основного долга и&nbsp;процентов производится каждые
                                    7&nbsp;дней в&nbsp;течение всего срока договора.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles['slide-block']}>
                        <div className={styles['slide-head']}>
                            <p>Шаг 5</p>
                            <div className={styles['arrow']} />
                        </div>
                        <div className={styles['slide-block-content']}>
                            <img src={Step5} />
                            <div>
                                <h5>Продолжать</h5>
                                <span>
                                    Мы&nbsp;растем, развиваемся и&nbsp;обеспечиваем стабильность
                                    дохода для инвесторов
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SixthBlockMobile;
