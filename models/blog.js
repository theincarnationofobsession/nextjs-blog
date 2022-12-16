import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    default: "This entry has no content",
  },
});

const Blog = mongoose.model("blogs", blogSchema);
export default Blog;
