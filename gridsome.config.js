module.exports = {
    siteName: 'Danh Nguyen',
    siteDescription:
        'Welkom op mijn portfolio! Je vindt hier mijn uitgevoerde projecten, informatie over mijzelf en mijn hobbies waaronder reizen.',
    siteUrl: 'https://d4nh.github.io',
    plugins: [
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'blog/**/*.md',
                typeName: 'BlogPost',
                resolveAbsolutePaths: true,
                remark: {
                    externalLinksTarget: '_blank',
                    externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
                },
                refs: {
                    category: {
                        typeName: 'Category',
                        create: true,
                    },
                },
            },
        },
        {
            use: '@gridsome/plugin-google-analytics',
            options: {
                id: 'UA-50175354-1',
            },
        },
        {
            use: '@gridsome/plugin-sitemap',
            options: {
                cacheTime: 600000,
            },
        },
        { use: 'gridsome-plugin-keep-processed-images' },
    ],
    templates: {
        Category: [
            {
                path: '/blog/:title',
                component: '/templates/Category.vue',
            },
        ],
    },
    css: {
        loaderOptions: {
            scss: {},
        },
    },
    devServer: {
        host: '0.0.0.0',
        port: 8080,
    },
};
