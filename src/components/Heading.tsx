type HeadingProps = {
    children: string
}


export const Heading = (headitem: HeadingProps) => {
    return <h2>{headitem.children}</h2>
}