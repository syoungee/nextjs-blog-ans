import MarkdownViewer from '@/components/MarkdownViewer';
import { getPostData } from '@/service/posts';

type Props = {
  params: {
    slug: string;
  };
};
export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <MarkdownViewer content={post.content} />
    </div>
  );
}
