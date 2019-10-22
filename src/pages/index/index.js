const generateItem = page => `<li><a href="/${page}">${page}</a></li>`;
const generateList = pages => pages.reduce((total, current) => total + generateItem(current), '<ul>') + '</ul>';

export default generateList;