import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import useWindowDimensions from '../hooks/useWindowDimensions';
import styles from '../styles/fourthBlock.module.scss';
import { Pagination } from 'swiper';

const FourthBlock = () => {
    const { width } = useWindowDimensions();

    const renderSlideHeader = () => {
        return (
            <div className={styles['slide-header']}>
                <span>- Your choice -</span>
                <span>Champs</span>
                <span>- Your choice -</span>
                <span>Champs</span>
                <span>- Your choice -</span>
                <span>Champs</span>
                <span>- Your choice -</span>
                <span>Champs</span>
                <span>- Your choice -</span>
                <span>Champs</span>
                <span>- Your choice -</span>
                <span>Champs</span>
            </div>
        );
    };

    return (
        <section className={styles['fourthBlock']}>
            <div className="container">
                <h3>
                    Почему <span>Champs?</span>
                </h3>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    modules={[Pagination]}
                    pagination={{
                        clickable: false,
                        enabled: true,
                        bulletClass: 'swiper-bullet-class',
                        bulletActiveClass: 'swiper-bullet-active-class',
                        el: '.swiper-pagination',
                    }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                    allowSlideNext={true}
                    allowSlidePrev={true}
                    breakpoints={{
                        1470: {
                            slidesPerView: 4,
                            loop: false,
                            autoplay: false,
                            allowSlideNext: false,
                            allowSlidePrev: false,
                            pagination: {
                                enabled: false,
                            },
                        },
                        1100: {
                            slidesPerView: 3,
                            loop: false,
                            autoplay: false,
                            allowSlideNext: true,
                            allowSlidePrev: true,
                            pagination: {
                                enabled: false,
                            },
                        },
                        750: {
                            slidesPerView: 2,
                            loop: true,
                            autoplay: {
                                delay: 3000,
                                disableOnInteraction: false,
                            },
                            allowSlideNext: true,
                            allowSlidePrev: true,
                            pagination: {
                                enabled: false,
                            },
                        },
                    }}>
                    <SwiperSlide>
                        <div className={styles['slideBlock']}>
                            {renderSlideHeader()}
                            <div className={styles['slide-text']}>
                                <div className={`${styles['bg-image']} ${styles['money']}`} />
                                <h5>Опыт в&nbsp;индустрии</h5>
                                <span>
                                    Наша команда – это люди, которые уделяли компьютерным играм
                                    огромное количество часов, как&nbsp;in-game,
                                    так&nbsp;и&nbsp;out-game. Игровой опыт вкупе со&nbsp;знаниями
                                    маркетинга помогает нам создавать качественные изделия, которыми
                                    мы пользуемся сами
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles['slideBlock']}>
                            {renderSlideHeader()}
                            <div className={styles['slide-text']}>
                                <div className={`${styles['bg-image']} ${styles['aboba']}`} />
                                <h5>Поддержка от PRO</h5>
                                <span>
                                    Нашими девайсами пользуются свыше трехсот профессиональных
                                    игроков из&nbsp;разных киберспортивных дисциплин, мы благодарны
                                    им, и&nbsp;делаем все возможное для&nbsp;роста в&nbsp;этом
                                    направлении
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles['slideBlock']}>
                            {renderSlideHeader()}
                            <div className={styles['slide-text']}>
                                <div className={`${styles['bg-image']} ${styles['joystick']}`} />
                                <h5>Высокая маржа</h5>
                                <span>
                                    Напрямую работаем с&nbsp;фабриками Китая и&nbsp;России,
                                    что&nbsp;позволяет нам продавать товары с&nbsp;высокой
                                    маржинальностью до 70%
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles['slideBlock']}>
                            {renderSlideHeader()}
                            <div className={styles['slide-text']}>
                                <div className={`${styles['bg-image']} ${styles['headphones']}`} />
                                <h5>Экосистемный подход</h5>
                                <span>
                                    Мы не только создаем игровую периферию, а&nbsp;еще и&nbsp;учим
                                    людей играть в&nbsp;игры. Наша команда тренеров выступает
                                    в&nbsp;качестве наставников, предоставляя индивидуальные
                                    и&nbsp;групповые тренировки, а&nbsp;также&nbsp;помогают
                                    создавать контент: статьи, посты, фото и&nbsp; видеоматериалы
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination" slot="pagination" />
            </div>
        </section>
    );
};

export default FourthBlock;
