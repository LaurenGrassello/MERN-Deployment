const { Author } = require('./../models/author.model')


module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.status(400).json(err))
}

module.exports.findAllAuthors = (req, res) => {
    Author.find().sort({ name: 1 })
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.status(400).json(err));
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.status(400).json(err))
}

module.exports.updateOneAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body,
        { new: true, runValidators: true })
        .then(updateAuthor => res.json(updateAuthor))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(deleteOneAuthor => res.json(deleteOneAuthor))
        .catch(err => res.status(400).json(err))
}
