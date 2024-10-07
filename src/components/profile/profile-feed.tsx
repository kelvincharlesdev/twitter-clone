import { tweetData } from "@/data/tweet"
import { TweetItem } from "../tweet/tweet.item"

export const ProfileFeed = () => {
    return (
        <div>
            <TweetItem tweet={tweetData} />
            <TweetItem tweet={tweetData} />
            <TweetItem tweet={tweetData} />
            <TweetItem tweet={tweetData} />
        </div>
    )
}