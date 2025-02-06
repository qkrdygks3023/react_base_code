type ContainerProps = {
    style: React.CSSProperties
}


export const Container = (props: ContainerProps) => {
    return (
        <div
            style={{ ...props.style, border: '1px solid black', maxWidth: '200px', padding: '10px' }}>Container</div>)
}