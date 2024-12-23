import style from './conteudo.module.css'

const Conteudo = (props) => {
    const {children} = props;
    return(
        <div className={style.conteudo}>
            {children}
        </div>
    );
};

export { Conteudo };