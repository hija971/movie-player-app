import BaseServices from "./baseService.js";

class PostService extends BaseServices {
    getVideos = (data) => {
        return this.http.get("posts/");
    };
};

export default PostService;