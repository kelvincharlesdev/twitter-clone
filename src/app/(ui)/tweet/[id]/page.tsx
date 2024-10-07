import { TweetPost } from "@/components/tweet/tweet-post";
import { TweetItem } from "@/components/tweet/tweet.item";
import { GeneralHeader } from "@/components/ui/general-header";
import { tweetData } from "@/data/tweet";

export default function Page() {
    return (
        <div>
            <GeneralHeader backHref="/">
                <div className="font-bold text-lg ">Voltar</div>
            </GeneralHeader>
            <div className="border-t-2 border-gray-900">
                <TweetItem tweet={tweetData} />

                <div className="border-y-8 border-gray-900">
                    <TweetPost />
                </div>

                <TweetItem tweet={tweetData} hideComments />
                <TweetItem tweet={tweetData} hideComments />
                <TweetItem tweet={tweetData} hideComments />
            </div>
        </div>
    )
}