export default (el) => {
    let classes = el.data.staticClass.split(' ');
    el.data.staticClass = '';
    classes
        .map((cl) => (cl in el.context.$style ? el.context.$style[cl] : cl))
        .join(' ');
};
