export const getGlobalData = () => {
    const name = process.env.BLOG_NAME ?
        decodeURI(process.env.BLOG_NAME) :
        'Documentación';
    const blogTitle = process.env.BLOG_TITLE ?
        decodeURI(process.env.BLOG_TITLE) :
        'API Simafi Municipalidades';
    const footerText = process.env.BLOG_FOOTER_TEXT ?
        decodeURI(process.env.BLOG_FOOTER_TEXT) :
        'Creado por Edwin Ilovares';

    return {
        name,
        blogTitle,
        footerText,
    };
};