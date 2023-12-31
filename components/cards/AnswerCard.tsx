import { formatNumberWithExtension, getTimestamp } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Metric from "../shared/Metric";
import { SignedIn } from "@clerk/nextjs";
import EditDeleteAction from "../shared/EditDeleteAction";

interface Props {
  _id: string;
  clerkId?: string | null;
  question: {
    _id: string;
    title: string;
  };
  author: {
    _id: string;
    clerkId: string;
    name: string;
    picture: string;
  };
  upvotes: string[];
  createdAt: Date;
}

const AnswerCard = ({
  _id,
  clerkId,
  question,
  author,
  upvotes,
  createdAt,
}: Props) => {
  const showActionButtons = clerkId && clerkId === author.clerkId;
  return (
    <div className="card-wrapper rounded-[10px] px-11 py-9">
      <Link href={`/question/${question._id}/#${_id}`}>
        <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
          <div>
            <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
              {getTimestamp(createdAt)}
            </span>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {question.title}
            </h3>
          </div>
          <SignedIn>
            {showActionButtons && (
              <EditDeleteAction type="Answer" itemId={JSON.stringify(_id)} />
            )}
          </SignedIn>
        </div>
        <div className="flex-between mt-6 w-full flex-wrap gap-3">
          <Metric
            imgUrl={author.picture}
            alt="user"
            value={author.name}
            title={` - Answered  ${getTimestamp(createdAt)}`}
            href={`/profile/${author.clerkId}`}
            textStyle="body-medium text-dark400_light700"
            isAuthor
          />

          <div className="flex-center gap-3">
            <Metric
              imgUrl="/assets/icons/like.svg"
              alt="like icon"
              value={formatNumberWithExtension(upvotes.length)}
              title=" Votes"
              textStyle="small-medium text-dark400_light800"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AnswerCard;
