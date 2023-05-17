import Button from './Button';
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/fifthBlock.module.scss';
import { validate } from 'react-email-validator';
import PI from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ru from 'react-phone-input-2/lang/ru.json';

const ReactPhoneInput = PI.default ? PI.default : PI;

const FifthBlock = () => {
    const form = useRef(null);
    const submitButton = useRef(null);

    const [phone, setPhone] = useState('');
    const [total, setTotal] = useState(0);
    const [checkBox, setCheckBox] = useState(true);
    const [investTimeButtonText, setInvestTimeButtonText] = useState('Срок инвестирования');
    const [investAmountButtonText, setInvestAmountButtonText] = useState('Сумма инвестиций');

    const [validName, setValidName] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
    const [validPhone, setValidPhone] = useState(false);

    const [validPhoneText, setValidPhoneText] = useState('');

    const [emailText, setEmailText] = useState('');
    const [emailTextVisible, setEmailTextVisible] = useState(false);
    const [successMail, setSuccessMail] = useState(false);

    const handleInvestTotal = () => {
        const investTime = form.current.investTime.value;
        const investAmount = form.current.investAmount.value;

        if (investTime != 0 && investAmount != 0) {
            if (investAmount >= 100000 && investAmount < 500000) {
                setTotal(((1 + investTime * 0.023) * investAmount).toFixed(0));
            }

            if (investAmount >= 500000 && investAmount < 1000000) {
                setTotal(((1 + investTime * 0.033) * investAmount).toFixed(0));
            }

            if (investAmount >= 1000000) {
                setTotal(((1 + investTime * 0.043) * investAmount).toFixed(0));
            }
        }
    };

    const handlePhoneChange = (e) => {
        if (e.length < 11) {
            setValidPhone(false);
        } else {
            setValidPhone(true);
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        setValidName(true);
        setValidEmail(true);
        setValidEmail(validate(form.current.email.value));

        let _validName = true;
        let _validPhone = true;
        let _validEmail = validate(form.current.email.value);

        if (form.current.name.value.length === 0) {
            setValidName(false);
            _validName = false;
        }

        if (!_validName || !_validPhone || !_validEmail || !checkBox) {
            setValidName(false);
            setValidEmail(false);
            setValidPhoneText('Пожалуйста, введите номер телефона');
            return;
        }

        setEmailText('');

        emailjs
            .sendForm('service_3ar0niq', 'template_mvnuy2d', form.current, 'KEnODjQP4A_FihwyJ')
            .then((res) => {
                setEmailText('Спасибо, ваша заявка принята. Скоро мы свяжемся с вами!');
                setSuccessMail(true);
            })
            .catch((err) => {
                setEmailText('Ошибка при отправке письма. Попробуйте позже');
                setSuccessMail(false);
            });
    };

    useEffect(() => {
        if (emailText !== '') {
            setEmailTextVisible(true);

            const timer = setTimeout(() => {
                setEmailTextVisible(false);
            }, 15000);

            return () => clearTimeout(timer);
        }
    }, [emailText]);

    return (
        <section className={styles['fifth-block']} id="fifthBlock">
            <div className="container">
                <div className={styles['inner-content']}>
                    <h3>
                        Рассчитать мою доходность
                        <br /> и <span>оставить заявку</span>
                    </h3>
                    <p className={styles['sub-head']}>
                        Оставьте заявку и мы свяжемся с Вами в ближайшее время!
                    </p>
                    <form ref={form} onSubmit={sendEmail} className={styles['form-wrapper']}>
                        <div className={!validName ? styles['invalid-field'] : undefined}>
                            <input type="text" name="name" placeholder="Ваше имя" />
                            {!validName && (
                                <span className={styles['error-span']}>
                                    Пожалуйста, укажите имя
                                </span>
                            )}
                        </div>
                        <div className={!validEmail ? styles['invalid-field'] : undefined}>
                            <input type="text" name="email" placeholder="E-mail" />
                            {!validEmail && (
                                <span className={styles['error-span']}>
                                    Пожалуйста, укажите email
                                </span>
                            )}
                        </div>
                        <div className={!validPhone ? styles['invalid-field'] : undefined}>
                            <ReactPhoneInput
                                country={'ru'}
                                onlyCountries={['ru', 'by', 'kz']}
                                enableAreaCodes={false}
                                localization={ru}
                                value={''}
                                containerClass={styles['phone-input-wrapper']}
                                inputClass={`${styles['phone-input-container']} ${
                                    validPhone ? styles['ok-phone'] : undefined
                                }`}
                                buttonClass={styles['phone-button-container']}
                                dropdownClass={styles['phone-dropdown-container']}
                                searchClass={styles['phone-search-container']}
                                placeholder="+7 (999) 999-99-99"
                                onChange={(e) => handlePhoneChange(e)}
                            />
                            {!validPhone && (
                                <span className={styles['error-span']}>{validPhoneText}</span>
                            )}
                        </div>
                        <select name="investTime" defaultValue={0} onChange={handleInvestTotal}>
                            <option value={0} hidden />
                            <option value={6}>от 6 месяцев</option>
                            <option value={12}>от 12 месяцев</option>
                        </select>
                        <button
                            className={styles['select-button']}
                            onClick={(e) => e.preventDefault()}>
                            <span
                                className={`${styles['select-button-head']} ${
                                    investTimeButtonText !== 'Срок инвестирования'
                                        ? styles['select-button-head-selected']
                                        : undefined
                                }`}>
                                {investTimeButtonText}
                            </span>
                            <div className={styles['select-button-options']}>
                                <div
                                    className={styles['select-button-option']}
                                    onClick={() => {
                                        setInvestTimeButtonText('от 6 месяцев');
                                        form.current.investTime.value = 6;
                                        handleInvestTotal();
                                    }}>
                                    <div
                                        className={`${styles['select-button-option-radio']} ${
                                            form.current?.investTime?.value == 6
                                                ? styles['radio-active']
                                                : undefined
                                        }`}
                                    />
                                    <span>от 6 месяцев</span>
                                </div>
                                <div
                                    className={styles['select-button-option']}
                                    onClick={() => {
                                        setInvestTimeButtonText('от 12 месяцев');
                                        form.current.investTime.value = 12;
                                        handleInvestTotal();
                                    }}>
                                    <div
                                        className={`${styles['select-button-option-radio']} ${
                                            form.current?.investTime?.value == 12
                                                ? styles['radio-active']
                                                : undefined
                                        }`}
                                    />
                                    <span>от 12 месяцев</span>
                                </div>
                            </div>
                        </button>
                        <input
                            type={'number'}
                            placeholder="Сумма инвестиций (от 100 тыс.)"
                            name="investAmount"
                            onChange={handleInvestTotal}
                        />
                        <input
                            style={{ display: 'none' }}
                            type={'submit'}
                            value=""
                            ref={submitButton}
                        />
                    </form>
                    <div
                        className={`${styles['total-invest']} ${
                            total > 0 ? styles['total-visible'] : undefined
                        }`}>
                        {total > 0 ? (
                            <p>
                                Примерный итог инвестирования:{' '}
                                <span>{total.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} руб.</span>
                            </p>
                        ) : (
                            <span>Примерный итог инвестирования</span>
                        )}
                    </div>
                    <div className={styles['personal-data-agreement']}>
                        <div
                            className={`${styles['checkbox']} ${
                                checkBox ? styles['checkbox-active'] : undefined
                            }`}
                            onClick={() => setCheckBox(!checkBox)}
                        />
                        <span>Я согласен с условиями обработки персональных данных</span>
                    </div>
                    <Button onClick={() => submitButton.current.click()}>
                        <span>Отправить запрос</span>
                    </Button>
                    <span
                        className={`${styles['request-response']} ${
                            !successMail ? styles['resError'] : undefined
                        }`}>
                        {emailTextVisible ? emailText : undefined}
                    </span>
                </div>
                <div className={`gradient-side ${styles['gradient-side']}`} />
                <div className={'gradient-bottom'} />
                <div className={styles['heroes']} />
                <div className={styles['gray-bg']}>
                    <div />
                </div>
                <div className={styles['orange-bg']} />
            </div>
        </section>
    );
};

export default FifthBlock;
