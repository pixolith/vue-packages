const renderRaw = (element, binding, vnode) => {
    if (!element) {
        return '';
    }

    if (!binding.value) {
        return;
    }

    let rawHTML = binding.value;
    rawHTML = rawHTML.default ? rawHTML.default : rawHTML;

    rawHTML = propagateScope(rawHTML, element);

    element.innerHTML = rawHTML;
};

const propagateScope = (rawHTML, element) => {
    let regex = new RegExp(/<\w+ /g),
        res = rawHTML.match(regex);

    res.forEach((match) => {
        // pass all parent data attributes to the children
        rawHTML = rawHTML.split(match).join(
            `${match}${Object.keys(element.dataset)
                // see https://developer.mozilla.org/de/docs/Web/API/HTMLElement/dataset Name conversion..
                .map((dataset) => 'data-' + dataset.replace(/([A-Z])/g, '-$1'))
                .filter(dataset => dataset.includes('data-v-'))
                .join(' ')} `,
        );
    });

    return rawHTML.trim();
};

export default {
    bind(el, binding, vnode) {
        renderRaw(el, binding, vnode);
    },

    update(el, binding, vnode) {
        renderRaw(el, binding, vnode);
    },
};
