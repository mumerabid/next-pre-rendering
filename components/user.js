export default function User(props) {
    console.log(props);
    return (
        <div>{props.user.name}</div>
    )
}
