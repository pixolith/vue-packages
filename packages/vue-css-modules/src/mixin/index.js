export default (key = '$cssm') => {
    return {
        methods: {
            [key](className) {
                if (!this.$style) {
                    console.warn(
                        'css modules is not used in this component. Make sure to use <style module></style>',
                    );
                    return className;
                }

                if (!this.$style[className]) {
                    console.warn(
                        `className ${className} is not a css module. Make sure to use <style module></style>`,
                    );
                    return className;
                }

                return this.$style[className];
            },
        },
    };
};
