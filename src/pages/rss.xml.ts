import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../site';
export async function GET(context: { site: URL }) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return rss({
    title: SITE.name,
    description: SITE.tagline,
    site: context.site,
    items: posts.map((p) => ({ title: p.data.title, pubDate: p.data.date, description: p.data.description, link: `/posts/${p.id}/` })),
  });
}
