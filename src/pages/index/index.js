const content = pages => pages.reduce((total, page) => total + `<li><a href="/${page}">${page}</a></li>`, '<ul>') + '</ul>';

export default content;