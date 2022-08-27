const articles = [
  {
    featured_image: "assets/articles/article-1.webp",
    title: "📦 Bundle Node.js into single executable binary",
    description: "Today · 3m read time",
    link: "https://dev.to/midnqp/bundling-nodejs-into-single-executable-binary-l3g",
    categories: "javascript"
  },
  {
    featured_image: "assets/articles/article-3.webp",
    title: "How open source can boost your career as a developer?",
    description: "Today · 6m read time",
    link: "https://eke.hashnode.dev/how-open-source-can-boost-your-career-as-a-developer",
    categories: "productivity"
  },
  {
    featured_image: "assets/articles/article-2.webp",
    title: "Speech Recognition with JavaScript",
    description: "Today · 1m read time",
    link: "https://dev.to/joelbonetr/speech-recognition-with-javascript-59g1",
    categories: "javascript"
  },
  {
    featured_image: "assets/articles/article-4.webp",
    title: "Migrating from Create React App (CRA) to Vite",
    description: "Today - 6m read time",
    link: "https://dev.to/cathalmacdonnacha/migrating-from-create-react-app-cra-to-vite-5416",
    categories: "javascript"
  },
  {
    featured_image: "assets/articles/article-5.webp",
    title: "Introducing Our New K8s Security Single Pane of Glass Dashboard",
    description: "Today - 3m read time",
    link: "https://www.armosec.io/blog/k8s-security-single-pane-of-glass-dashboard/",
    categories: "devops"
  },
  {
    featured_image: "assets/articles/article-6.webp",
    title: "Learn Redux Toolkit - The Recommended Way to Use Redux",
    description: "Today - 1m read time",
    link: "https://www.freecodecamp.org/news/learn-redux-toolkit-the-recommended-way-to-use-redux/",
    categories: "javascript"
  },
  {
    featured_image: "assets/articles/article-7.webp",
    title: "Laravel 9 Eloquent WHERE Like Query Example Tutorial",
    description: "Today · 2m read time",
    link: "https://devdojo.com/techvblogs/laravel-9-eloquent-where-like-query-example-tutorial",
    categories: "php"
  },
  {
    featured_image: "assets/articles/article-8.webp",
    title: "How to Automatically Run Your Laravel PestPHP Tests on Each GitHub Pull Request?",
    description: "Today · 9m read time",
    link: "https://dev.to/bobbyiliev/how-to-automatically-run-your-laravel-pestphp-tests-on-each-github-pull-request-3jch",
    categories: "php"
  },
  {
    featured_image: "assets/articles/article-9.webp",
    title: "Best Planner Apps: Top 5 Tools for Productivity in 2022",
    description: "Today · 8m read time",
    link: "https://dev.to/kristimke/best-planner-apps-top-5-tools-for-productivity-in-2022-2fgb",
    categories: "productivity"
  },
  {
    featured_image: "assets/articles/article-10.webp",
    title: "Kubernetes: Private Docker Registry in 5 Minutes",
    description: "Today · 6m read time",
    link: "https://dev.to/admantium/kubernetes-private-docker-registry-in-5-minutes-5a0f",
    categories: "devops"
  },
  {
    featured_image: "assets/articles/article-11.webp",
    title: "Deploy a React App on AWS Lightsail: Testing, Docker, Docker Compose, Nginx & Github Actions",
    description: "Today · 7m read time",
    link: "https://dev.to/koladev/deploy-a-react-app-on-aws-lightsail-testing-docker-docker-compose-nginx-github-actions-4lb5",
    categories: "devops"
  },
  {
    featured_image: "assets/articles/article-12.webp",
    title: "Laravel 9.24 Released",
    description: "Today · 7m read time",
    link: "https://dev.to/lzogoat87/laravel-924-released-pjb",
    categories: "php"
  },
  
];

function renderArticle (filter) {
  const articleCount = document.querySelector("section.articles .article-count");
  const articleContainer = document.querySelector("section.articles .articles-container");
  
  const articlesDom = articles.filter(article => {
    if (filter === "") return true;

    return (article.categories === filter.replace('#', ''));
  }).map(article => {
    return `
      <article class="flex flex-col">
        <img src="${article.featured_image}" class="featured-image" alt="">
  
        <h2>${article.title}</h2>
        <span class="category">#${article.categories}</span>
        <p>${article.description}</p>
        <a class="button button-primary" href="${article.link}">Baca Selengkapnya <i class="icon-external"></i></a>
      </article>
    `;
  });
  
  articleCount.innerText = `${articlesDom.length} dari ${articles.length} artikel`;
  articleContainer.innerHTML = articlesDom.join('');

  if (filter === "") return;

  document.querySelector('#article').scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const filter = window.location.hash;

  renderArticle(filter);
});