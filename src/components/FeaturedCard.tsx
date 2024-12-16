'use client'

import coursesData from '@/data/music_course.json'
import { BackgroundGradient } from './ui/background-gradient';
import Link from 'next/link';
import { ButtonsCard } from "./ui/tailwindcss-buttons";
interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean
}

export default function FeaturedCard() {

    const featuredCourse = coursesData.courses.filter((course:Course) => course.isFeatured)

  return (
    <div className='py-12 bg-gray-900'>
     <div className="flex flex-col gap-2 justify-center items-center mt-5">
     <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
     <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
     </div>

     <div className='my-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
        {featuredCourse.map((course:Course) => (
            <div key={course.id} className='flex justify-center items-center'> 
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
            <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                <h1 className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{course.title}</h1>
                <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{course.description}</p>
            </div>
            <div className='flex justify-center items-center mx-auto my-2'>
            <ButtonsCard>
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <Link className="" href={`/all_courses/${course.slug}`}>
            Explore More
            </Link>
                </button>
            
            </ButtonsCard>
            </div>
        </BackgroundGradient>
         </div>
        ))}
        </div>
        <div className='mt-8 flex justify-center items-center'>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          View All Courses
        </span>
      </button>
        </div>
     </div>
    </div>
  )
}
