import LocalSearchbar from "@/components/shared/Search/LocalSearchbar";
import { UserFilters } from "@/constants/filters";
import Filter from "@/components/shared/Filter";
import React from "react";
import { getAllUsers } from "@/lib/actions/user.action";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import UserCard from "@/components/cards/UserCard";
import { SearchParamsProps } from "@/Types";

const Page = async ({ searchParams }: SearchParamsProps) => {
  const result = await getAllUsers({
    searchQuery: searchParams.q,
    filter: searchParams.filter,
  });
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">All Users</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/community"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for amazing minds"
          otherClasses="flex-1"
        />
        <Filter
          filter={UserFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>
      <section className="mt-12 flex flex-wrap gap-4">
        {result.users.length > 0 ? (
          result.users.map((user) => <UserCard key={user._id} user={user} />)
        ) : (
          <div className="paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center">
            <p>No users yet</p>
            <Link href="/sign-up">
              <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 primary-gradient mt-10 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <span className="text-lg text-light-900">
                  Join to be the first!
                </span>
              </Button>
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default Page;
