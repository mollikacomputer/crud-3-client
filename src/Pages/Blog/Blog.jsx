import { useLoaderData } from "react-router-dom";

const Blog = () => {
    const totalCount = useLoaderData();
    console.log(totalCount);
    return (
        <div>
            <h2 className="text-3xl"> Blog page</h2>
        </div>
    );
};

export default Blog;