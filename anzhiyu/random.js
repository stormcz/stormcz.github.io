var posts=["2024/04/04/learnJava/","2024/04/15/hello-world/","2024/04/03/template/","2024/03/31/使用hexo写blogmarkdown简易教学/","2024/07/08/论文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };