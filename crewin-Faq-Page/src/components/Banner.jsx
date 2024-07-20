import React from 'react';
import { Button, Card, Typography, Collapse } from 'antd';
import { UserOutlined, FileDoneOutlined, MailOutlined, DollarOutlined, FileTextOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Panel } = Collapse;

// Soruları ve ikonları içeren bir dizi
const questions = [
  {
    question: "Is there a registration or subscription fee?",
    icon: <UserOutlined style={{ fontSize: '18px', color: '#003a8c' }} />,
    answer: "No, there is no registration or subscription fee required for our services. You can use all features without any initial costs."
  },
  {
    question: "Are there any conditions for applying?",
    icon: <UserOutlined style={{ fontSize: '18px', color: '#003a8c' }} />,
    answer: "Yes, there are some conditions that applicants must meet, such as minimum age requirements and valid identification."
  },
  {
    question: "Do I need to spend a packet again for a seafarer I have imaged?",
    icon: <FileDoneOutlined style={{ fontSize: '18px', color: '#003a8c' }} />,
    answer: "No, once you have imaged a seafarer, you do not need to spend additional packets for the same seafarer. The image is valid for all future uses."
  },
  {
    question: "How do companies contact me?",
    icon: <MailOutlined style={{ fontSize: '18px', color: '#003a8c' }} />,
    answer: "Companies can contact you via the contact information you have provided in your profile settings. You will receive notifications via email or through our platform."
  },
  {
    question: "Can I see the reference grades of my instructors?",
    icon: <FileTextOutlined style={{ fontSize: '18px', color: '#003a8c' }} />,
    answer: "Yes, you can view the reference grades of your instructors in your dashboard. This information is available under the 'References' section."
  },
  {
    question: "Is there a charge for detailed filtering?",
    icon: <DollarOutlined style={{ fontSize: '18px', color: '#003a8c' }} />,
    answer: "Detailed filtering options are available at no extra charge. You can use these features to refine your search without any additional costs."
  }
];

const Banner = () => {
  return (
    <Card style={{ padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Title level={2} strong>
            FAQ
          </Title>
          <Text type="secondary" strong>
            Welcome to our FAQ page! Here, you will find answers to the most commonly asked questions about our services, products, and policies. If you need further assistance, please feel free to contact our support team.
          </Text>
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <Button type="primary" size="large" style={{ backgroundColor: '#003a8c', borderColor: '#003a8c' }}>
            Explore More
          </Button>
          <Button size="large">Apply to Postings</Button>
        </div>

        <Collapse>
          {questions.map((item, index) => (
            <Panel 
              key={index}
              header={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {item.icon}
                  <Text style={{ marginLeft: '10px', fontSize: '16px', fontWeight: 500, color: '#000' }}>
                    {item.question}
                  </Text>
                </div>
              }
            >
              <Text style={{ fontSize: '16px', color: '#000' }}>
                {item.answer}
              </Text>
            </Panel>
          ))}
        </Collapse>
      </div>
    </Card>
  );
};

export default Banner;