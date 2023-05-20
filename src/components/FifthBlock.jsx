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

    const [total, setTotal] = useState(0);
    const [investTimeButtonText, setInvestTimeButtonText] = useState('Срок инвестирования');

    //имя
    const [validName, setValidName] = useState(true);
    const [inputName, setInputName] = useState('');

    //телефон
    const [validPhone, setValidPhone] = useState(true);
    const [validPhoneText, setValidPhoneText] = useState('');
    const [inputPhone, setInputPhone] = useState('');

    //почта
    const [validEmail, setValidEmail] = useState(true);
    const [inputEmail, setInputEmail] = useState('');

    //сумма
    const [validSum, setValidSum] = useState(true);
    const [inputSum, setInputSum] = useState(-1);
    const [sumErrorText, setSumErrorText] = useState('');

    //период
    const [validTime, setValidTime] = useState(true);

    const [emailText, setEmailText] = useState('');
    const [emailTextVisible, setEmailTextVisible] = useState(false);
    const [successMail, setSuccessMail] = useState(false);

    //согласие
    const [checkBox, setCheckBox] = useState(true);
    const [validCheck, setValidCheck] = useState(true);

    const handleInvestTotal = (sum) => {
        const investTime = form.current.investTime.value;
        const investAmount = sum;

        if (investTime != 0) {
            setValidTime(true);
        }
        if (investAmount < 100000) {
            setTotal(0);
        }
        if (investTime != 0 && investAmount != 0) {
            if (investTime == 6) {
                if (investAmount >= 100000 && investAmount < 200000) {
                    setTotal((investAmount * (1 + 0.01 * 6)).toFixed(0));
                } else if (investAmount >= 200000 && investAmount < 500000) {
                    setTotal((investAmount * (1 + 0.013 * 6)).toFixed(0));
                } else if (investAmount >= 500000 && investAmount < 1000000) {
                    setTotal((investAmount * (1 + 0.02 * 6)).toFixed(0));
                } else if (investAmount >= 1000000 && investAmount < 1500000) {
                    setTotal((investAmount * (1 + 0.024 * 6)).toFixed(0));
                } else if (investAmount >= 1500000 && investAmount < 2000000) {
                    setTotal((investAmount * (1 + 0.027 * 6)).toFixed(0));
                } else if (investAmount >= 2000000) {
                    setTotal((investAmount * (1 + 0.03 * 6)).toFixed(0));
                }
            } else if (investTime == 12) {
                if (investAmount >= 100000 && investAmount < 200000) {
                    setTotal((investAmount * (1 + 0.015 * 12)).toFixed(0));
                } else if (investAmount >= 200000 && investAmount < 500000) {
                    setTotal((investAmount * (1 + 0.018 * 12)).toFixed(0));
                } else if (investAmount >= 500000 && investAmount < 1000000) {
                    setTotal((investAmount * (1 + 0.025 * 12)).toFixed(0));
                } else if (investAmount >= 1000000 && investAmount < 1500000) {
                    setTotal((investAmount * (1 + 0.033 * 12)).toFixed(0));
                } else if (investAmount >= 1500000 && investAmount < 2000000) {
                    setTotal((investAmount * (1 + 0.036 * 12)).toFixed(0));
                } else if (investAmount >= 2000000) {
                    setTotal((investAmount * (1 + 0.04 * 12)).toFixed(0));
                }
            }
        }
    };

    const handleSumChange = (e) => {
        setInputSum(e.target.value);
        setSumErrorText('');
        setValidSum(true);
        handleInvestTotal(e.target.value);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        //ВАЛИДАЦИЯ

        //сумма
        let _validSum = true;

        if (inputSum == -1) {
            setSumErrorText('Пожалуйста, введите сумму');
            _validSum = false;
            setValidSum(_validSum);
        } else if (inputSum < 100000) {
            setSumErrorText('Сумма не может быть менее 100.000');
            _validSum = false;
            setValidSum(_validSum);
        }

        //телефон
        let _validPhone = true;

        if (inputPhone.length < 11) {
            _validPhone = false;
            setValidPhone(_validPhone);
            setValidPhoneText('Пожалуйста, введите номер телефона');
        }

        //имя
        let _validName = true;

        if (inputName.length < 2) {
            _validName = false;
            setValidName(_validName);
        }

        //почта

        let _validEmail = true;

        if (!validate(form.current.email.value)) {
            _validEmail = false;
            setValidEmail(_validEmail);
        }

        //период

        let __validTime = true;
        const investTime = form.current.investTime.value;
        if (investTime == 0) {
            __validTime = false;
            setValidTime(__validTime);
        }

        //согласие

        let __validCheckbox = true;

        if (!checkBox) {
            __validCheckbox = false;
            setValidCheck(__validCheckbox);
        }

        if (
            !_validName ||
            !_validPhone ||
            !_validEmail ||
            !__validCheckbox ||
            !_validSum ||
            !__validTime
        ) {
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
        form.current.investTime.value = 0;
        setInputSum(-1);
        setInputEmail('');
        setInputName('');
        setInputPhone('');
        setInvestTimeButtonText('Срок инвестирования');
        setTotal(0);
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

    //вспомогалка
    const helpInputHandle = (e, func, valid) => {
        func(e.target.value);
        valid(true);
    };

    return (
        <section className={styles['fifth-block']} id="fifthBlock">
            <div className="container">
                <div className={styles['inner-content']}>
                    <h3>
                        Рассчитать мою доходность
                        <br /> и&nbsp;<span>оставить заявку</span>
                    </h3>
                    <p className={styles['sub-head']}>
                        Оставьте заявку и&nbsp;мы свяжемся с&nbsp;Вами в&nbsp;ближайшее время!
                    </p>
                    <form ref={form} onSubmit={sendEmail} className={styles['form-wrapper']}>
                        <div className={!validName ? styles['invalid-field'] : undefined}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Имя"
                                value={inputName}
                                onChange={(e) => helpInputHandle(e, setInputName, setValidName)}
                            />
                            {!validName && (
                                <span className={styles['error-span']}>
                                    Пожалуйста, укажите имя
                                </span>
                            )}
                        </div>
                        <div className={!validEmail ? styles['invalid-field'] : undefined}>
                            <input
                                type="text"
                                name="email"
                                placeholder={validEmail ? 'E-mail' : 'example@mail.com'}
                                value={inputEmail}
                                onChange={(e) => helpInputHandle(e, setInputEmail, setValidEmail)}
                            />
                            {!validEmail && (
                                <span className={styles['error-span']}>
                                    Пожалуйста, укажите email
                                </span>
                            )}
                        </div>
                        <div className={!validPhone ? styles['invalid-field'] : ''}>
                            <ReactPhoneInput
                                country={'ru'}
                                onlyCountries={['ru', 'by', 'kz']}
                                enableAreaCodes={false}
                                localization={ru}
                                value={inputPhone}
                                containerClass={styles['phone-input-wrapper']}
                                inputClass={`${styles['phone-input-container']} ${
                                    !validPhone ? styles['ok-phone'] : ''
                                } ${inputPhone.length > 3 ? styles['phone-normal'] : ''}`}
                                buttonClass={styles['phone-button-container']}
                                dropdownClass={styles['phone-dropdown-container']}
                                searchClass={styles['phone-search-container']}
                                placeholder="+7 (999) 999-99-99"
                                onChange={(e) => {
                                    setInputPhone(e);
                                    setValidPhone(true);
                                }}
                            />
                            {!validPhone && (
                                <span className={styles['error-span']}>{validPhoneText}</span>
                            )}
                        </div>
                        <div className={!validTime ? styles['invalid-field'] : ''}>
                            <select
                                name="investTime"
                                defaultValue={0}
                                onChange={() => handleInvestTotal(inputSum)}>
                                <option value={0} hidden />
                                <option value={6}>от 6 месяцев</option>
                                <option value={12}>от 12 месяцев</option>
                            </select>
                            <button
                                className={styles['select-button']}
                                onClick={(e) => e.preventDefault()}>
                                <span
                                    className={`${styles['select-button-head']} ${
                                        form.current?.investTime?.value != 0
                                            ? styles['select-button-head-selected']
                                            : ''
                                    }`}>
                                    {investTimeButtonText}
                                </span>
                                <div className={styles['select-button-options']}>
                                    <div
                                        className={styles['select-button-option']}
                                        onClick={() => {
                                            setInvestTimeButtonText('от 6 месяцев');
                                            form.current.investTime.value = 6;
                                            handleInvestTotal(inputSum);
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
                                            handleInvestTotal(inputSum);
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

                            {!validTime && (
                                <span className={styles['error-span']}>
                                    Пожалуйста, выберете период
                                </span>
                            )}
                        </div>
                        <div className={!validSum ? styles['invalid-field'] : ''}>
                            <input
                                type={'number'}
                                placeholder="Сумма инвестиций (от 100 тыс.)"
                                name="investAmount"
                                onChange={(e) => handleSumChange(e)}
                                value={inputSum > -1 ? inputSum : ''}
                            />
                            {!validSum && (
                                <span className={styles['error-span']}>{sumErrorText}</span>
                            )}
                        </div>
                        <input
                            style={{ display: 'none' }}
                            type={'submit'}
                            value=""
                            ref={submitButton}
                        />
                    </form>
                    <div
                        className={`${styles['total-invest']} ${
                            total > 0 ? styles['total-visible'] : ''
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
                    <div
                        className={
                            styles['check-field'] + ` ${!validCheck ? styles['invalid-field'] : ''}`
                        }>
                        <div className={styles['personal-data-agreement']}>
                            <div
                                className={`${styles['checkbox']} ${
                                    checkBox ? styles['checkbox-active'] : ''
                                }`}
                                onClick={() => {
                                    setCheckBox((prev) => !prev);
                                    setValidCheck(true);
                                }}
                            />
                            <span>Я согласен с&nbsp;условиями обработки персональных данных</span>
                        </div>
                        {!validCheck && (
                            <p>
                                <span className={styles['error-span']}>Нужно согласиться</span>
                            </p>
                        )}
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
