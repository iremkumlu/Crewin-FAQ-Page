import React from 'react'
import { Flex } from 'antd';
import Banner from './Banner';

const MainContent = () => {
  return (
    <div style={{ flex: 1}}>
      <Flex vertical gap=".3rem">
        <Banner/>
      </Flex>
    </div>
  )
};

export default MainContent;
