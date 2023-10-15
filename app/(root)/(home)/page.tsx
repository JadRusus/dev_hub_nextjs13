import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/Search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "Cascading Deletes in SQLAlchemy?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    auther: {
      _id: "1",
      name: "Jhon Karma",
      picture: "url-to-picture-1",
    },
    upvotes: 65431,
    views: 8976124,
    answers: [],
    createdAt: new Date("2023-10-14T11:30:00.000Z"),
  },
  {
    _id: "2",
    title: "How to map an array?",
    tags: [{ _id: "1", name: "javascript" }],
    auther: {
      _id: "2",
      name: "Mike Jess",
      picture: "url-to-picture-2",
    },
    upvotes: 9163,
    views: 884223,
    answers: [],
    createdAt: new Date("2020-10-05T11:50:00.000Z"),
  },
  {
    _id: "3",
    title: "React Component Lifecycle",
    tags: [
      { _id: "3", name: "react" },
      { _id: "4", name: "javascript" },
    ],
    auther: {
      _id: "3",
      name: "Alice Smith",
      picture: "url-to-picture-3",
    },
    upvotes: 36215,
    views: 1234250,
    answers: [],
    createdAt: new Date("2021-10-10T07:30:00.000Z"),
  },
  {
    _id: "4",
    title: "Database Normalization",
    tags: [
      { _id: "5", name: "database" },
      { _id: "6", name: "sql" },
    ],
    auther: {
      _id: "4",
      name: "Bob Johnson",
      picture: "url-to-picture-4",
    },
    upvotes: 6521,
    views: 1500000,
    answers: [],
    createdAt: new Date("2023-10-07T09:15:00.000Z"),
  },
  {
    _id: "5",
    title: "CSS Flexbox Layout",
    tags: [{ _id: "7", name: "css" }],
    auther: {
      _id: "5",
      name: "Sarah Brown",
      picture: "url-to-picture-5",
    },
    upvotes: 18213,
    views: 15620,
    answers: [],
    createdAt: new Date("2023-03-14T08:20:00.000Z"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions..."
          otherClasses="flex-1"
        />
        <Filter
          filter={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              auther={question.auther}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There is no questions to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from. Get
          involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
