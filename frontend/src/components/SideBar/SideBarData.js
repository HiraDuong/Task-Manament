import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IoToday, IoFlagSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";

export const SideBarData = [
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiFillHome style={{ color: '#fff' }} size={30} />,
      cName: 'nav-text'
    },
    {
      title: 'Search',
      path: '/search',
      icon: <FaIcons.FaSearch style={{ color: '#fff' }} size={30}/>,
      cName: 'nav-text'
    },
    {
      title: 'Prority',
      path: '/prority',
      icon: <IoFlagSharp style={{ color: '#fff' }} size={30}/>,
      cName: 'nav-text'
    },

      {
        title: 'Upcoming',
        path: '/upcoming',
        icon: <FaCalendarAlt style={{ color: '#fff' }} size={30} />,
        cName: 'nav-text'
      },
    // Thêm các mục khác tại đây
  ];
  