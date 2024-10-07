import { TweetItem } from "@/components/tweet/tweet.item"
import { GeneralHeader } from "@/components/ui/general-header"
import { SearchInput } from "@/components/ui/search-input"
import { tweetData } from "@/data/tweet"
import { redirect } from "next/navigation"

interface SearchProps {
    searchParams: {
        q: string | undefined
    }
}

export default function Page({ searchParams }: SearchProps) {

    if (!searchParams.q) redirect('/')


    return (
        <div>
            <GeneralHeader backHref="'/">
                <SearchInput defaultValue={searchParams.q} />
            </GeneralHeader>

            <div className="border-t-2 border-gray-900">
                <TweetItem tweet={tweetData} />
                <TweetItem tweet={tweetData} />
                <TweetItem tweet={tweetData} />
                <TweetItem tweet={tweetData} />
            </div>
        </div>
    )
}