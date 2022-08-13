import { useRouter } from 'next/router';
function ReviewDetail() {
    const router = useRouter();
    const { reviewId, postId } = router.query
    return (
        <>
            <h1>reviewId page: {reviewId} post id :{postId}</h1>
        </>
    )
}

export default ReviewDetail;
