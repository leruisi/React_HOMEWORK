import React from "react";
import Posts from "./componets/Post/Posts";
import Cars from "./componets/Cars/Cars";
import Comment from "./componets/Comment/Comment";


class App extends React.Component {
    render() {
        return (
            <div>
                <Posts />
                <Comment />
                <Cars />
            </div>
        );
    }
}

export {App};