import React from 'react';
import { Row, Col, Typography, Space } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <Row gutter={16}>
        <Col span={24} style={styles.textContainer}>
          <Title level={4} style={styles.title}>MARITIME WORKFORCE PLATFORM</Title>
          <Text style={styles.subText}>
            THAT MEETS SEAFARERS & SHIPPING COMPANIES
          </Text>
        </Col>
        <Col span={24}>
          <Text style={styles.text}>
            Copyright 2024 by CreWin. All Rights Reserved.
          </Text>
        </Col>
        <Col span={24}>
          <Space>
            <FacebookOutlined style={styles.icon} />
            <TwitterOutlined style={styles.icon} />
            <InstagramOutlined style={styles.icon} />
            <LinkedinOutlined style={styles.icon} />
          </Space>
        </Col>
      </Row>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f0f2f5',
    padding: '20px',
    textAlign: 'center',
    borderTop: '1px solid #d9d9d9',
  },
  textContainer: {
    textAlign: 'right', 
    paddingRight: '20px', 
  },
  title: {
    fontWeight: 600,
    color: '#000', 
    marginBottom: '0', 
  },
  subText: {
    display: 'block',
    color: '#4f6f52', 
  },
  text: {
    display: 'block',
    marginBottom: '10px',
    color: '#4f6f52', 
  },
  icon: {
    fontSize: '24px',
    color: '#4f6f52', 
  },
};

export default Footer;