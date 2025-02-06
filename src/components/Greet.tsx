type GreetProps = {
    name: string
    count?: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            {
                props.isLoggedIn ?
                    <h1>hello {props.name} a.k.a {props.count}</h1>
                    :
                    <h1>hello guest</h1>

            }


        </div>
    )
}