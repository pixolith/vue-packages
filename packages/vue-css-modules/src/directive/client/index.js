const createUniqueClassNames = (element, vnode) => {
    let classes = element.className.split(' ');
    element.className = classes
        .map((cl) =>
            cl in vnode.context.$style ? vnode.context.$style[cl] : cl,
        )
        .join(' ');
};

export default {
    bind(el, binding, vnode) {
        createUniqueClassNames(el, vnode);
    },

    update(el, binding, vnode) {
        createUniqueClassNames(el, vnode);
    },
};
