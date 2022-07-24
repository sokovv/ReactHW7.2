import Video from "./Video";
import Article from "./Article";

import WithDisplay from "./WithDisplay";

const WithArticle = WithDisplay(Article)
const WithVideo = WithDisplay(Video)

export default function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <WithVideo {...item} />
                );

            case 'article':
                return (
                    <WithArticle {...item} />
                );
        }
    });
};