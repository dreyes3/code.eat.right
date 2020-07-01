import { elements } from "./views/baseView";
import "./css/style.css";
import "./css/vendor/grid.css";
import "./css/vendor/normalize.css";
import "./css/vendor/prism.css";

import Quill from "quill";


var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'align': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'font': [] }],
    // [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    // [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    // [{ 'direction': 'rtl' }],                         // text direction

    // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    // [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme



    // ['clean']                                         // remove formatting button
];


var Delta = Quill.import('delta');
var editor = new Quill('#editor-container', {
    modules: {
        toolbar: toolbarOptions
    },
    placeholder: 'Compose an epic...',
    theme: 'snow'
});

// // // Store accumulated changes
// // var change = new Delta();
// quill.on('text-change', function (delta) {
//     const delta = editor.getContents();
//     const text = editor.getText();
//     const justHtml = editor.root.innerHTML;
//     // preciousContent.innerHTML = JSON.stringify(delta);
//     // justTextContent.innerHTML = text;
//     // justHtmlContent.innerHTML = justHtml;
// });

// // Save periodically
// setInterval(function () {
//     if (change.length() > 0) {
//         console.log('Saving changes', change);
//         /* 
//         Send partial changes
//         $.post('/your-endpoint', { 
//           partial: JSON.stringify(change) 
//         });

//         Send entire document
//         $.post('/your-endpoint', { 
//           doc: JSON.stringify(quill.getContents())
//         });
//         */
//         change = new Delta();
//     }
// }, 5 * 1000);

// Check for unsaved data
window.onbeforeunload = function () {
    if (change.length() > 0) {
        return 'There are unsaved changes. Are you sure you want to leave?';
    }
}



elements.saveButton.addEventListener("click", function () {
    const content = JSON.stringify(editor.getContents());

    console.log(editor.root.innerHTML);
    elements.previewContainer.innerHTML = editor.root.innerHTML;

});

const state = {};

const loadBlog = () => {

    const title = "Create blog";
    const author = "David Reyes";
    const publishDate = "June 23, 2020";

    const markup = `
    <h2 class="main-article-title">${title}</h2>
    <p class="main-article-author">By: ${author} - ${publishDate}</p>
    `;
    elements.mainArticle.insertAdjacentHTML("afterbegin", markup);
};


loadBlog();
