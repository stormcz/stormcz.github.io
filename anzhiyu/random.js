var posts=["2024/03/31/使用hexo写blog/","2024/03/31/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };