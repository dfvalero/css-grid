import './index.scss';

const pages = ['1-one', '2-two', '3-three', '4-four', '5-five', '6-six'];

const routes = {
    '/': () => import('./pages/index').then(module => module.default(pages))
};

pages.forEach(page => {
    routes[`/${page}`] = () => import(`./pages/${page}`).then(module => module.default)
});

const render = async (rootNode) => {
    if (!routes[window.location.pathname]) {
        rootNode.innerHTML = `<div>Not Found</div>`;
        return;
    }

    try {
        rootNode.innerHTML = await routes[window.location.pathname]();
    } catch (e) {
        rootNode.innerHTML = `<div>Not Found</div>`;
    }
};

render(document.getElementById('root'));