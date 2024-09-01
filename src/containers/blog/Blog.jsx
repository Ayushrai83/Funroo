import React from 'react';
import Article from '../../component/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="August 26, 2024" text="Funngro application is on Play Store. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="August 26, 2024" text="Unleashing Freelancing Success with Funngro: Essential Qualities and Powerful Tools" />
        <Article imgUrl={blog03} date="August 26, 2024" text="The Importance of Early Work Experience for Teens" />
        <Article imgUrl={blog04} date="August 26, 2024" text="Why Teen should watch Shark Tank India?" />
        <Article imgUrl={blog05} date="August 26, 2024" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog;