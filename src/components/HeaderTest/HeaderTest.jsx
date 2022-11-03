import css from './HeaderTest.module.scss';

export default function Headertest() {
    return (
        <header className={css.header}>
            <h1 className={css.headerTitle}>Test</h1>
        </header>
    )
}