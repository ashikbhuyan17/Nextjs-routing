import { useRouter } from 'next/router';
function PostDetail() {
    const router = useRouter();
    const postId = router.query.postId
    return (
        <>
            <h1>Post page {postId}</h1>
        </>
    )
}

export default PostDetail;
