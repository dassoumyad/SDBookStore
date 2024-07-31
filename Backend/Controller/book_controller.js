import Book from "../modal/Book_,Modal.js";
export const  getBook=async(req,res)=>{
    try {
        const book=await Book.find()
        res.status(200).json(book)
    } catch (error) {
        console.error("error",error)
        res.status(500).json(error)
    }
}
// const book = await Book.find();: This line uses the Book model to query the MongoDB database and retrieve all documents in the books collection. The await keyword is used to wait for the asynchronous operation to complete before proceeding.