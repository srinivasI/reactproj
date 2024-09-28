import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
    useParams } from 'react-router-dom';
  
  const BlogPosts = {
    'first-blog-post': {
      title: 'Angular Blog Post',
      description: 'Angular Training example content.'
    },
    'second-blog-post': {
      title: 'React Blog Post',
      description: 'React Training content'
    },
    'third-blog-post': {
      title: 'Java Blog Post',
      description: 'Java Training content'
    }
  };
  
  function Home() {
    return (
      <div style={{ padding: 20 }}>
        <h2>Home View</h2>
        <p>Home Component content</p>
      </div>
    );
  }
  
  function About() {
    return (
      <div style={{ padding: 20 }}>
        <h2>About View</h2>
        <p>About Component Content.</p>
      </div>
    );
  }
  
  function Posts() {
    return (
      <div style={{ padding: 20 }}>
        <h2>Post Blog Content</h2>
        <Outlet />
      </div>
    );
  }
  
  function PostLists() {
    return (
      <ul>
        {Object.entries(BlogPosts).map(([slug, { title }]) => (
          <li key={slug}>
            <Link to={`/posts/${slug}`}>
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
  
  function Post() {
    const { slug } = useParams();
    const post = BlogPosts[slug];
    if(!post) {
      return <span>The blog post you've requested doesn't exist.</span>;
    }
    const { title, description } = post;
    return (
      <div style={{ padding: 20 }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
  
  function NoMatch() {
    return (
      <div style={{ padding: 20 }}>
        <h2>404: Page Not Found</h2>
        <p>Please contact Admin.</p>
      </div>
    );
  }
  
  function Routeex2() {
    return (
      <Router>
        <nav style={{ margin: 10 }}>
            <Link to="/" style={{ padding: 5 }}>
            Home
            </Link>
            <Link to="/posts" style={{ padding: 5 }}>
            Posts
            </Link>
            <Link to="/about" style={{ padding: 5 }}>
            About
            </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />}>
            <Route index element={<PostLists />} />
            <Route path=":slug" element={<Post />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    );
  }
  
  export default Routeex2;