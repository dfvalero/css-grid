import './index.scss';

const pages = [
    '1-one',
    '2-two',
    '3-three',
    '4-four',
    '5-five',
    '6-six',
    '7-seven',
    '8-eight',
    '9-nine',
    '10-ten',
    '11-eleven',
    '12-twelve',
    '13-thirteen',
    '14-fourteen',
    '15-fifteen'
];

const executorHelper = ({executor}) => executor ? executor : () => {};
const routes = {
    '/': () => import('./pages/index').then(module => module.default(pages))
};
const executors = {
    '/': () => import(`./pages/index`).then(executorHelper)
};

pages.forEach(page => {
    routes[`/${page}`] = () => import(`./pages/${page}`).then(module => module.default);
    executors[`/${page}`] = () => import(`./pages/${page}`).then(executorHelper);
});

const render = async (rootNode) => {
    if (!routes[window.location.pathname]) {
        rootNode.innerHTML = `<div>Not Found</div>`;
        return;
    }

    try {
        const exec = await executors[window.location.pathname]();
        rootNode.innerHTML = await routes[window.location.pathname]();
        exec();
    } catch (e) {
        rootNode.innerHTML = `<div>Not Found</div>`;
    }
};

render(document.getElementById('root'));