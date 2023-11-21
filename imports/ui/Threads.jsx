import React from "react";
import { useFind, useSubscribe } from "meteor/react-meteor-data";
import { ThreadsCollection } from "../api/threads";

export const Threads = () => {
  const isLoading = useSubscribe("threads");

  const data = useFind(() => ThreadsCollection.find());

  if (isLoading()) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
      { data.map((thread, id) => (
        <div
          key={ thread._id }
          className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
          <div>
            <span
              className="rounded-lg inline-flex p-3 ring-4 ring-white">
              { thread.text }
            </span>
          </div>
        </div>
      )) }
    </div>
  );
};
