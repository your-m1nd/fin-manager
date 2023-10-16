import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Foot from '../views/global/Foot';
import InputComponent from '../comps/Input';
import css from '../../styles/form.css';

const { FormContainer, Button } = css;

const Main = (props) => {

    const { action } = props;

    const [ value, setValue ] = useState('');
    const [ type, setType ] = useState('доход');
    const [ comment, setComment ] = useState('');


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
            
            action(
                prev =>  [ ...prev, dataLine]
                )

            setValue('')
            setType('доход')
            setComment('')

        } else console.log('Ошибка валидации')
    }

    const handleChange = (event) => {
        setType(event.target.value);
      };

    const handleChangeComment = (event) => {
        setComment(event.target.value);
      };

    return (
        <React.Fragment>
            <FormContainer>
                <InputComponent inputValue={value} action={setValue} placeholder={'Введите сумму транзакции'}/>
            <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Выберите тип транзакции</FormLabel>    
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={type}
                onChange={handleChange}
            >
                <FormControlLabel value="расход" control={<Radio />} label="Расход" />
                <FormControlLabel value="доход" control={<Radio />} label="Доход" />
            </RadioGroup>
            </FormControl>
            { type === 'доход' && <InputComponent inputValue={comment} action={setComment} placeholder={'Введите комментарий'}/>}
            { type === 'расход' && <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Выберите тип расходов</FormLabel>    
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={comment}
                onChange={handleChangeComment}
            >
                <FormControlLabel value="покупка продуктов" control={<Radio />} label="Покупка продуктов" />
                <FormControlLabel value="оплата счетов" control={<Radio />} label="Оплата счетов" />
                <FormControlLabel value="покупка одежды" control={<Radio />} label="Покупка одежды" />
                <FormControlLabel value="расходы на транспорт" control={<Radio />} label="Расходы на транспорт" />
                <FormControlLabel value="развлечения" control={<Radio />} label="Развлечения" />
                <FormControlLabel value="путешествия" control={<Radio />} label="Путешествия" />
            </RadioGroup>
            </FormControl>}
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
            <Foot></Foot>
        </React.Fragment>
    )
}

export default Main;