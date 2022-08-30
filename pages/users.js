import axios from "axios";
import User from "../components/user";
export default function Users(props) {
    return (
        <>
            <div>users List</div>
            {props.data.map((u) => {
                return (
                    <User key={u.id} user={u} ></User>
                );
            })}
        </>
    );
}

export async function getStaticProps() {
    const userData = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );
    const data = userData.data;
    console.log(data);
    return {
        props: {
            data,
        },
    };
}
