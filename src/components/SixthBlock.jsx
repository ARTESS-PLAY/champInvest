import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';
import Step1 from '../assets/step1.png';
import Step2 from '../assets/step2.png';
import Step3 from '../assets/step3.png';
import Step4 from '../assets/step4.png';
import Step5 from '../assets/step5.png';
import styles from '../styles/sixthBlock.module.scss';
import { useRef } from 'react';

const SixthBlock = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    SwiperCore.use([Autoplay]);

    return (
        <section className={styles['sixth-block']} id="sixthBlock">
            <div className="container">
                <h3>
                    Путь инвестора от инвестиции до <span>51.6% годовых</span>
                </h3>
                <p>
                    Более 5000 геймеров уже играет на нашей периферии, давайте увеличим это число
                    вместе!
                    <br />5 шагов от первой встречи до успешного сотрудничества.
                </p>
                <div>
                    <div ref={prevRef} className={`${styles['arrow']} ${styles['arrow-prev']}`} />
                    <div ref={nextRef} className={styles['arrow']} />
                    <Swiper
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true,
                        }}
                        loop={true}
                        modules={[Navigation]}
                        breakpoints={{
                            1300: {
                                slidesPerView: 3,
                            },
                            960: {
                                slidesPerView: 2,
                            },
                        }}>
                        <SwiperSlide>
                            <div className={styles['slide-block']}>
                                <p>Шаг 1</p>
                                <div className={styles['slide-block-content']}>
                                    <img src={Step1} />
                                    <div>
                                        <h5>Заинтересоваться</h5>
                                        <span>
                                            После оставленной заявки, наш менеджер свяжется с вами в
                                            ближайшее время
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles['slide-block']}>
                                <p>Шаг 2</p>
                                <div className={styles['slide-block-content']}>
                                    <img src={Step2} />
                                    <div>
                                        <h5>Познакомиться</h5>
                                        <span>
                                            Первый диалог будет на тему о нашем бренде, товарном
                                            ассортименте и ответах на ваши вопросы
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles['slide-block']}>
                                <p>Шаг 3</p>
                                <div className={styles['slide-block-content']}>
                                    <img src={Step3} />
                                    <div>
                                        <h5>Убедиться</h5>
                                        <span>
                                            Договор и перевод денежных средств будет нашей отправной
                                            точкой к пассивному доходу
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles['slide-block']}>
                                <p>Шаг 4</p>
                                <div className={styles['slide-block-content']}>
                                    <img src={Step4} />
                                    <div>
                                        <h5>Получить</h5>
                                        <span>
                                            Мы платим каждый месяц в течение всего срока договора, а
                                            в конце возвращаем тело долга
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles['slide-block']}>
                                <p>Шаг 5</p>
                                <div className={styles['slide-block-content']}>
                                    <img src={Step5} />
                                    <div>
                                        <h5>Продолжать</h5>
                                        <span>
                                            Продолжительное взаимовыгодное сотрудничество является
                                            нашей целью
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles['slide-block']}>
                                <p>Шаг 1</p>
                                <div className={styles['slide-block-content']}>
                                    <img src={Step1} />
                                    <div>
                                        <h5>Заинтересоваться</h5>
                                        <span>
                                            После оставленной заявки, наш менеджер свяжется с вами в
                                            ближайшее время
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles['slide-block']}>
                                <p>Шаг 2</p>
                                <div className={styles['slide-block-content']}>
                                    <img src={Step2} />
                                    <div>
                                        <h5>Познакомиться</h5>
                                        <span>
                                            Первый диалог будет на тему о нашем бренде, товарном
                                            ассортименте и ответах на ваши вопросы
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles['slide-block']}>
                                <p>Шаг 3</p>
                                <div className={styles['slide-block-content']}>
                                    <img src={Step3} />
                                    <div>
                                        <h5>Убедиться</h5>
                                        <span>
                                            Договор и перевод денежных средств будет нашей отправной
                                            точкой к пассивному доходу
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles['slide-block']}>
                                <p>Шаг 4</p>
                                <div className={styles['slide-block-content']}>
                                    <img src={Step4} />
                                    <div>
                                        <h5>Получить</h5>
                                        <span>
                                            Мы платим каждый месяц в течение всего срока договора, а
                                            в конце возвращаем тело долга
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles['slide-block']}>
                                <p>Шаг 5</p>
                                <div className={styles['slide-block-content']}>
                                    <img src={Step5} />
                                    <div>
                                        <h5>Продолжать</h5>
                                        <span>
                                            Продолжительное взаимовыгодное сотрудничество является
                                            нашей целью
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default SixthBlock;
