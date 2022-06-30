function Title(props) {
    return (
        <h1 className={props.titleclass}>{props.children}</h1>
    )
}

export default Title