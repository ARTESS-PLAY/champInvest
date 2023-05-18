import styles from '../styles/seventhBlock.module.scss';

const SeventhBlock = () => {
    return (
        <section className={styles['seventh-block']}>
            <div className="container">
                <div className={styles['text-block']}>
                    <h3>
                        Гейминг - это <span>не&nbsp;просто игры</span>
                    </h3>
                    <div className={styles['list']}>
                        <div className={styles['list-element']}>
                            <div className={styles['list-mark']} />
                            <p>
                                В компьютерные игры в&nbsp;России играет более 65 млн человек,
                                а&nbsp;объем рынка видеоигр в&nbsp;нашей стране уже достиг отметки
                                $2,3 млрд.
                            </p>
                        </div>
                        <div className={styles['list-element']}>
                            <div className={styles['list-mark']} />
                            <p>
                                Вопреки устоявшимся стереотипам о&nbsp;юном возрасте геймеров,
                                средний возраст российского игрока — 36&nbsp;лет; 25%&nbsp;игроков
                                составляют офисные работники, каждый десятый — менеджер
                                или&nbsp;руководитель.
                            </p>
                        </div>
                        <div className={styles['list-element']}>
                            <div className={styles['list-mark']} />
                            <p>
                                Благодаря новым технологиям, таким как виртуальная
                                и&nbsp;дополненная реальность, игровая индустрия в&nbsp;России
                                продолжает динамично развиваться, а&nbsp;эксперты прогнозируют
                                дальнейший рост рынка.
                            </p>
                        </div>
                    </div>
                    <span className={styles['text-note']}>
                        *исследование компании HP Global&nbsp;Gaming Survey
                    </span>
                </div>
                <div className={styles['heroes']} />
                <div className={'gradient-side'} />
                <div className={'gradient-bottom'} />
                <div className={styles['gray-bg']}>
                    <div />
                </div>
                <div className={styles['orange-bg']} />
            </div>
        </section>
    );
};

export default SeventhBlock;
