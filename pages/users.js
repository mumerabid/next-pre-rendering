import axios from "axios";
export default function Users(props) {
    console.log(props.data)
    return (
        <>
            <div>users List</div>
            {props.data.map(u => {
                return (
                    <div key={u.id}> {u.name}</div>
                )
            })}
        </>
    )
}

export async function getStaticProps() {
    const userData = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = userData.data;
    console.log(data);
    return {
        props: {
            data
        }
    }
}
