import { elements } from "./views/baseView";


import "./css/style.css";
import "./css/vendor/grid.css";
import "./css/vendor/normalize.css";
import "./css/vendor/prism.css";
// import "./css/vendor/ionicons.min.css";

// import Prism from "prismjs";


const state = {};


const loadBlog = () => {

    const title = "Hello World";
    const author = "David Reyes";
    const publishDate = "June 23, 2020";
    console.log("Load Blog");
    // const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco";

    const code = `calculateAge() {
        return this.age - year;
    }`;
    const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');

    const newContent = `${html}`;


    const markup = `
    <h2 class="main-article-title">${title}</h2>
    <p class="main-article-author">By: ${author} - ${publishDate}</p>
    <pre class="class="prism-code language-javascript"">${newContent}</pre>
    `;

    elements.mainArticle.insertAdjacentHTML("afterbegin", markup);
};


loadBlog();