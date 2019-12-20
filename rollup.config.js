import postcss from 'rollup-plugin-postcss'

const bundleNames = [
    'blocks',
    'reset',
    'util',
];

const configs = bundleNames.map(name => {
    return {
        input: `src/${name}.css`,
        output: {
            file: `dist/${name}.min.css`,
            format: 'es',
        },
        plugins: [
            postcss({
                minimize: true,
                sourceMap: true,
                extract: true,
                modules: false,
            }),
        ],
    }
});

export default configs

