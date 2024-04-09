var posts=["2024/03/31/hello-world/","2024/04/03/template/","2024/04/04/learnJava/","2024/03/31/使用hexo写blog/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };