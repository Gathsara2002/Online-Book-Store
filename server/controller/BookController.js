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
            if (!body.bookId) {
                const {newId} = await this.generateNewBookId();
                body.bookId = newId;
            }
            console.log(body);
            let promise = await model.create(body);
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
            const book = await model.deleteOne({bookId: id});

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
                    bookId: id,
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
    },

    //generate new book id
    generateNewBookId: async function (req, res, next) {
        try {
            // Fetch all existing book IDs
            const books = await BookModel.find({}, {bookId: 1});
            const existingIds = books.map(book => book.bookId);

            // Extract numeric parts and find the maximum
            const numericParts = existingIds.map(id => parseInt(id.replace('B', '')));
            let maxNumericPart = Math.max(...numericParts);

            // Check if maxNumericPart is -Infinity (i.e., no existing IDs found)
            if (maxNumericPart === -Infinity) {
                maxNumericPart = 0; // Start with 0 if no existing IDs
            }

            // Generate new ID
            const newNumericPart = (maxNumericPart + 1).toString().padStart(3, '0');
            const newId = `B${newNumericPart}`;

            res.status(200).json({newId: newId});
        } catch (error) {
            res.status(500).json({
                error: "Could not generate new book ID! " + error
            });
        }
    }
}

module.exports = BookController;