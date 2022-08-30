import axios from "axios"
import Link from "next/link"
export default function Posts(props) {
    return (
        <>
            <div>
                {props.data.map((singlePost) => {
                    return (
                        <div key={singlePost.id}>
                            <Link href={`posts/${singlePost.id}`}>
                                <div>{singlePost.title}</div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export async function getStaticProps() {
    const allPsots = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const allPostsData = await allPsots.data;
    return {
        props: {
            data: allPostsData
        }
    }
}