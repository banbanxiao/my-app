"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import Link from "next/link";

export function LayoutGrids() {
  const cards = [
    {
      id: 1,
      content: (
        <div>
          <p className="font-bold md:text-4xl text-xl text-white">バイク</p>
          <p className="font-normal text-base text-white"></p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            ツーリングのブログ
          </p>
          <Link href="/bike" className="px-4 py-2 mt-4 inline-block bg-blue-500 text-white rounded-md">
            詳細へ
          </Link>
        </div>
      ),
      className: "md:col-span-2",
      thumbnail: "/bike.png",
    },
    {
      id: 2,
      content: (
        <div>
          <p className="font-bold md:text-4xl text-xl text-white">キャンプ</p>
          <p className="font-normal text-base text-white"></p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            キャンプブログ
          </p>
          <Link href="/camp-details" className="px-4 py-2 mt-4 inline-block bg-blue-500 text-white rounded-md">
            詳細へ
          </Link>
        </div>
      ),
      className: "col-span-1",
      thumbnail: "/camp.png",
    },
    {
      id: 3,
      content: (
        <div>
          <p className="font-bold md:text-4xl text-xl text-white">IT関連</p>
          <p className="font-normal text-base text-white"></p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            開発したものについて
          </p>
          <Link href="/it-details" className="px-4 py-2 mt-4 inline-block bg-blue-500 text-white rounded-md">
            詳細へ
          </Link>
        </div>
      ),
      className: "col-span-1",
      thumbnail: "/it.png",
    },
    {
      id: 4,
      content: (
        <div>
          <p className="font-bold md:text-4xl text-xl text-white">生活関連</p>
          <p className="font-normal text-base text-white"></p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            生活について
          </p>
          <Link href="/life-details" className="px-4 py-2 mt-4 inline-block bg-blue-500 text-white rounded-md">
            詳細へ
          </Link>
        </div>
      ),
      className: "md:col-span-2",
      thumbnail: "/idea.png",
    },
  ];

  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}