import Vue from 'vue';

const instance = new Vue();

const propagateScopeServer = (rawHTML, vueAttrs) => {
    let regex = new RegExp(/<\w+ /g),
        res = rawHTML.match(regex);

    res.forEach((match) => {
        // pass all parent data attributes to the children
        rawHTML = rawHTML
            .split(match)
            .join(`${match}${Object.keys(vueAttrs).join(' ')} `);
    });

    return rawHTML.trim();
};

export default (el, directive) => {
    if (!el || !el.data) {
        return;
    }

    let vueAttrs =
        el.data.attrs &&
        Object.keys(el.data.attrs)
            .filter((attr) => attr.includes('data-v-'))
            .reduce((obj, key) => {
                obj[key] = el.data.attrs[key];
                return obj;
            }, {});

    if (vueAttrs) {
        let rawHTML = directive.value.default
            ? directive.value.default
            : directive.value;

        rawHTML = propagateScopeServer(rawHTML, vueAttrs);
    }

    const node = instance._v(rawHTML);

    el.children = [node];
    el.children[0].raw = true;
};
