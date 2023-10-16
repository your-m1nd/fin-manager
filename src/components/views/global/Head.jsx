import React from 'react';
import css from '../../../styles/styles.css';

const { HeaderContainer, HeaderCSS } = css;

const buttonCSS = {
    display: 'block',
    padding: '10px 14px 12px',
    borderRadius: '6px',
    backgroundColor: '#B0F347',
    cursor: 'pointer',
    marginLeft: '10px',

}

const Head = (props) => {

    const { action } = props


    return (
        <React.Fragment>
            <HeaderContainer>
                <HeaderCSS.Logo>FINMANAGER</HeaderCSS.Logo>
                <HeaderCSS.MenuContainer>
                    <button onClick={() => action('main')} style={buttonCSS}>Главная</button>
                    <button onClick={() => action('stat')} style={buttonCSS}>Статистика</button>
                    <button style={buttonCSS}>Планирование</button>
                </HeaderCSS.MenuContainer>
            </HeaderContainer>
        </React.Fragment>
    )
}

export default Head;