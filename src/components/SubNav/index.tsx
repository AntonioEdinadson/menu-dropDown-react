import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { IContentMenu, IMenu } from "../../interfaces/IMenu";

interface ISubNavComponent {
    props: IContentMenu;
}

export const SubNav = ({ props }: ISubNavComponent) => {

    const [menuOpen, setMenuOpen] = useState<Boolean>(false);

    return (
        <>
            {props.children && props.children.length > 0
                ?
                <li className='' onClick={() => setMenuOpen(!menuOpen)}>
                    <div className='flex items-center justify-between hover:bg-red-400 cursor-pointer'>
                        <div className='flex items-center gap-2'>
                            {props.icon}
                            <span>{props.name}</span>
                        </div>
                        <ChevronRightIcon className={`w-4 ${menuOpen ? "rotate-90" : ""}`} />
                    </div>
                    {menuOpen &&
                        <ul>
                            {props.children.map((child: IMenu, index) => (
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
                            {props.icon}
                            <span>{props.name}</span>
                        </div>
                    </li>
                </div>
            }
        </>
    );
}