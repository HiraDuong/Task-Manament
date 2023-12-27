import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
export const SideBarData = [
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiFillHome style={{ color: '#000000' }} />,
      cName: 'nav-text'
    },
    {
      title: 'Search',
      path: '/search',
      icon: <FaIcons.FaInfoCircle style={{ color: '#000000' }}/>,
      cName: 'nav-text'
    },
    {
      title: 'Prority',
      path: '/prority',
      icon: <AiIcons.AiFillContacts style={{ color: '#000000' }}/>,
      cName: 'nav-text'
    },
    {
        title: 'Today',
        path: '/today',
        icon: <AiIcons.AiFillContacts style={{ color: '#000000' }} />,
        cName: 'nav-text'
      },
      {
        title: 'Upcoming',
        path: '/upcoming',
        icon: <AiIcons.AiFillContacts style={{ color: '#000000' }} />,
        cName: 'nav-text'
      },
    // Thêm các mục khác tại đây
  ];
  