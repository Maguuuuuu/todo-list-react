import style from './Footer.module.css';

const Footer = (props) => {
    const {criador} = props;

    const anoAtual = (new Date()).getFullYear();
    return (
        <footer className={style.Footer}>
            React Básico - {anoAtual} - {criador}
        </footer>
    );
};

export {Footer};