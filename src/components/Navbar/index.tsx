import { CogIcon, PlusCircleIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { IContentMenu, IMenu } from '../../interfaces/IMenu';

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
  const [menuOpen, setMenuOpen] = useState<Boolean>(false);

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
              <div key={index}>
                {menu.children && menu.children.length > 0
                  ?
                  <li className='' onClick={() => setMenuOpen(!menuOpen)}>
                    <div className='flex items-center justify-between hover:bg-red-400 cursor-pointer'>
                      <div className='flex items-center gap-2'>
                        {menu.icon}
                        <span>{menu.name}</span>
                      </div>
                      <ChevronRightIcon className={`w-4 ${menuOpen ? "rotate-90" : ""}`} />
                    </div>
                    {menuOpen &&
                      <ul>
                        {menu.children.map((child: IMenu, index) => (
                          <li key={index} className='flex items-center hover:bg-red-600 cursor-pointer pl-9 py-1 mt-2'>
                            <div className='my-1'>
                              <span>{child.name}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    }
                  </li>
                  :
                  <div>
                    <li className='flex justify-between items-center hover:bg-red-400 cursor-pointer'>
                      <div className='flex items-center gap-2'>
                        {menu.icon}
                        <span>{menu.name}</span>
                      </div>
                    </li>
                  </div>
                }
              </div>
            ))}
          </>
        }
      </ul>
    </div>
  );
};
