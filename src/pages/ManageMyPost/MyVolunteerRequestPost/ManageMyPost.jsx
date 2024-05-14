import { Helmet } from "react-helmet";
import MyNeedVolunteerPost from "../MyNeedVolunteerPost";
import MyVolunteerRequestPosts from "./MyVolunteerRequestPosts";


const ManageMyPost = () => {
    return (
        <div>
            <Helmet>
        <title>Manage My Posts || Impact Volens</title>
      </Helmet>
            <MyNeedVolunteerPost />
            <MyVolunteerRequestPosts />
        </div>
    );
};

export default ManageMyPost;