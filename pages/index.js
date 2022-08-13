import Link from "next/link";
const Home = () => {
    return (
        <div>
            <h1>Next js pre-rendering</h1>
            <Link href='/posts'>
                <a>posts</a>
            </Link>
        </div>
    );
};

export default Home;