import React, { useState } from 'react';
import Head from '../views/global/Head';
import Foot from '../views/global/Foot';
import InputComponent from '../comps/Input';
import DataList from '../views/local/DataList';
import css from '../../styles/form.css';

const { FormContainer, Button } = css;

const Main = () => {

    const [ value, setValue ] = useState('');
    const [ type, setType ] = useState('');
    const [ comment, setComment ] = useState('');

    const [ data, setData ] = useState([]);

    const validation = () => {
        if (value.length > 2 && type ) {
            console.log('Валидация прошла успешно')

            const dataLine = `${value}::${type}::${comment}`;
            
    //      setData(
    //        prev => {
     //          let newData = prev
      //         newData.push(dataLine)
      //         return newData
       //         }
        //        )
            
            setData(
                prev =>  [ ...prev, dataLine]
                )

            setValue('')
            setType('')
            setComment('')

        } else console.log('Ошибка валидации')
    }

    return (
        <React.Fragment>
            <Head></Head>
            <FormContainer>
                <InputComponent inputValue={value} action={setValue} placeholder={'Введите сумму транзакции'}/>
                <InputComponent inputValue={type} action={setType} placeholder={'Введите тип транзакции'}/>
                <InputComponent inputValue={comment} action={setComment} placeholder={'Введите комментарий'}/>
                <Button 
                backgroundColor={
                    value.length < 3     ?
                    "rgb(229, 229, 229)" :
                    type.length < 3      ?
                    "rgb(229, 229, 229)" :
                    "rgb(176, 243, 71)"
                }
                onClick={validation}
                >Сохранить транзакцию</Button>
            </FormContainer>
            <DataList data={data}/>
            <Foot></Foot>
        </React.Fragment>
    )
}

export default Main;