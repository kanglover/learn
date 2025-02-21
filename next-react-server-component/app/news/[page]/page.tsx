import Stories from 'components/stories';
import fetchData from 'lib/fetch-data';

export const dynamicParams = true;

export async function generateStaticParams() {
  return [{ page: '1' }];
}

export default async function RSCPage({ params }: { params: Promise<{ page: number }>; }) {
  const { page } = await params;
  const storyIds = await fetchData('topstories');
  return <Stories page={page} storyIds={storyIds} />;
}
