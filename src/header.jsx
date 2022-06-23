import { BookmarkAltIcon, SearchIcon } from '@heroicons/react/outline'
export default function Header() {

  return (
    <header className="items-center px-4 py-1 sticky top-0 bg-gray-500 bg-opacity-20 h-14 w-full z-10 grid grid-cols-3 shadow-md">
      <div>
        <a href="/" className="flex space-x-1 cursor-pointer items-center">
          <BookmarkAltIcon className="w-10 align-middle" />
          <span className="font-bold text-xl inline-block align-middle">Gợi ý sách</span>
        </a>
      </div>
      <div className='h-10 flex items-center justify-between border border-black px-1 rounded-md'>
        <input type='text' placeholder='nhập tên sách cần tìm' className='pl-1 bg-transparent outline-none placeholder-slate-600' />
        <SearchIcon className='p-1 border-green-300 h-8 w-8 bg-blue-300 rounded-full' />
      </div>
      <div className='inline-flex justify-end items-center h-10'>
        <button class="relative inline-flex items-center justify-center overflow-hidden text-sm font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span class="relative transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 py-2 px-4 inline-block items-center">
            Xem gợi ý
          </span>
        </button>
      </div>
    </header>
  )
}
