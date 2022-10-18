import { CogIcon, PlusCircleIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { IContentMenu, IMenu } from '../../interfaces/IMenu';
import { SubNav } from '../SubNav';

const items = [
  {
    name: "Menu1",
    icon: <CogIcon className='w-6' />,
    path: "/menu",
    children: [
      {
        name: "menudropdown1",
        icon: <PlusCircleIcon className='w-6' />,
        path: "/menu"
      },
      {
        name: "menudropdown1",
        icon: <PlusCircleIcon className='w-6' />,
        path: "/menu"
      },
      {
        name: "menudropdown3",
        icon: <PlusCircleIcon className='w-6' />,
        path: "/menu"
      }
    ]
  },
  {
    name: "Menu2",
    icon: <CogIcon className='w-6' />,
    path: "/menu",
    children: []
  },
  {
    name: "Menu3",
    icon: <CogIcon className='w-6' />,
    path: "/menu",
    children: [
      {
        name: "menudropdown1",
        icon: <PlusCircleIcon className='w-6' />,
        path: "/menu"
      },
      {
        name: "menudropdown1",
        icon: <PlusCircleIcon className='w-6' />,
        path: "/menu"
      },
      {
        name: "menudropdown3",
        icon: <PlusCircleIcon className='w-6' />,
        path: "/menu"
      }
    ]
  },
  {
    name: "Menu4",
    icon: <CogIcon className='w-6' />,
    path: "/menu",
    children: []
  }
]

export const Navbar = () => {

  const [contentMenu, setContentMenu] = useState<IContentMenu[] | null>([]);

  useEffect(() => {
    getContentMenu();
  }, []);

  const getContentMenu = () => {
    setContentMenu(items);
  };

  return (
    <div className="">
      <ul className='flex flex-col gap-4'>
        {contentMenu && contentMenu.length > 0 &&
          <>
            {contentMenu.map((menu: IContentMenu, index) => (
              <SubNav props={menu} />
            ))}
          </>
        }
      </ul>
    </div>
  );
};
