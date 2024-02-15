const model = require("../model/BookModel");

const BookController = {

    //get books details
    getAllBooks: async function (req, res, next) {
        try {
            const allBooks = await model.find();
            console.log(allBooks);
            res.status(200).json(allBooks);

        } catch (e) {
            res.status(500).json({
                error: "Books cant load " + e
            });
        }
    },

    //save book
    saveBook: async function (req, res, next) {
        try {
            let body = req.body;
            console.log(body);
            let promise = await model.create(body);
            res.status(200).json(promise);

        } catch (err) {
            res.status(500).json({
                error: "Book is not saved " + err
            });
        }
    },

    //delete book
    deleteBook: async function (req, res, next) {
        try {
            const id = req.params.id;
            const book = await model.deleteOne({id: id});

            if (book.deletedCount === 0) {
                return res.status(404).json({
                    error: "Book not found !"
                });
            }
            res.status(200).json(book);

        } catch (error) {
            res.status(500).json({
                error: "Something went wrong ! " + error
            });
        }
    },

    //update book
    updateBook: async function (req, res, next) {
        try {
            const id = req.params.id;
            const body = req.body;
            const updatedBook = await model.findOneAndUpdate({
                    id: id,
                }, body,
                {new: true}
            );

            if (!updatedBook) {
                return res.status(404).json({
                    error: "Book not found !"
                });
            }
            res.status(200).json(updatedBook);

        } catch (error) {
            res.status(500).json({
                error: "Something went wrong ! " + error
            });
        }
    }

}

module.exports = BookController;