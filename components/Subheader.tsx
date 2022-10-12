import Link from 'next/link'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Subheader = () => {
  return (
    <div className="flex place-content-center items-center text-gray-900 bg-gray-100 shadow">
      <div className="flex text-xl">
        <Link href="/listings" passHref>
          <button className="mx-10 font-light transition ease-in-out duration-400 delay-100 hover:-translate-y-1 hover:scale-110  hover:text-blue-600 hover:border-b-2 hover:border-blue-500 focus:border-blue-500 focus:text-blue-600 focus:border-b-2 pb-2 border-b-2 border-gray-100">
            Listings
          </button>
        </Link>
        <Link href="/investors" passHref>
          <button className="mx-10 font-light transition ease-in-out duration-400 delay-100 hover:-translate-y-1 hover:scale-110  hover:text-blue-600 hover:border-b-2 hover:border-blue-500 focus:border-blue-500 focus:text-blue-600 focus:border-b-2 pb-2 border-b-2 border-gray-100">
            Investors
          </button>
        </Link>
        <Link href="/jobs" passHref>
          <button className="mx-10 font-light transition ease-in-out duration-400 delay-100 hover:-translate-y-1 hover:scale-110  hover:text-blue-600 hover:border-b-2 hover:border-blue-500 focus:border-blue-500 focus:text-blue-600 focus:border-b-2 pb-2 border-b-2 border-gray-100">
            Jobs
          </button>
        </Link>

        <Menu as="div" className="relative inline-block px-2 text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center px-4 py-1text-gray-700 shadow-sm hover:bg-gray-50">
              Account
              <ChevronDownIcon className="-mr-1 ml-2 h-8 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/profile">
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Profile
                      </a>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/company">
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Company
                      </a>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/transfers">
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        History
                      </a>
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

      </div>
    </div>
  )
}

export default Subheader
