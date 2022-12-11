import fs from 'fs';
import RSS from 'rss';

export default async function generateRssFeed() {
 const site_url = 'https://haiconmeo.info';
 let client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID, // 👈🏼  Create your .env.local file. Contentful SpaceID
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACESS_TOKEN,// 👈🏼  Create your .env.local file. Contenful AccessToken
  });
  let allPosts = await client.getEntries({
    content_type: 'blogPost',
    limit:5  // 👈🏼 IMPORTANT. Based on blog. This id is base on the same way I set up my contentful content model
})
 const feedOptions = {
  title: 'Blog posts | RSS Feed',
  description: 'Welcome to this blog posts!',
  site_url: site_url,
  feed_url: `${site_url}/rss.xml`,
  image_url: `${site_url}/logo.png`,
  pubDate: new Date(),
  copyright: `All rights reserved ${new Date().getFullYear()}, Ibas`,
 };

 const feed = new RSS(feedOptions);
 allPosts.items.map((post) => {
    feed.item({
     title: post.fields.blogTitle,
     description: post.fields.blogExcerpt,
     url: `${site_url}/blog/${post.fields.slug}`,
     date: post.date,
    });
   });
   fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}