import React from 'react';
import Head from '../views/global/Head';
import Foot from '../views/global/Foot';
import InputComponent from '../comps/Input';
import css from '../../styles/form.css';

const { FormContainer, Button } = css;

const Main = () => {
    return (
        <React.Fragment>
            <Head></Head>
            <FormContainer>
                <InputComponent placeholder={'Введите сумму транзакции'}/>
                <InputComponent placeholder={'Введите тип транзакции'}/>
                <InputComponent placeholder={'Введите комментарий'}/>
                <Button backgroundColor={'rgb(229, 229, 229)'}>Сохранить транзакцию</Button>
            </FormContainer>
            <Foot></Foot>
        </React.Fragment>
    )
}

export default Main;