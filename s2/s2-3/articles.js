var articles = [];

module.exports.create = function(req,res) {
    res.json();
}

module.exports.new = (req,res) => {
    res.send("<form action='/articles' method='post'>\
    <input type='text' placeholder='title' name='title'>\
    <input type='text' placeholder='author' name='author'>\
    <textarea placeholder='post' name='body' ></textarea>\
    <button type='submit'>Post!</button>\
</form>");
}