import { useRouter } from 'next/router';

export default function BlogPage() {
	const router = useRouter();
	return <>the year of this blog is {router.query.year}</>;
}
