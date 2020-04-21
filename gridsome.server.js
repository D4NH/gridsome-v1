module.exports = function (api) {
    api.loadSource(actions => {
        actions.addCollection('BlogPost')
    });
}
