import s from './banner.css';
export function banner() {
    return(
        <section className={s.banner}>
            <div className="container">
                <a href="#" className={s.about}>О компании <span>АвтоТорг</span></a>
            </div>
        </section>
    )
}