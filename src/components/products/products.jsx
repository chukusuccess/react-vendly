import { Card, Col, Row } from "antd";

const { Meta } = Card;

export const ProductPage = () => {
  return (
    <div>
      <Card
        title="Products"
        bordered={false}
        style={{
          width: "83vw",
          margin: "5px",
          height: "88vh",
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        <div>
          <Row
            justify="space-evenly"
            gutter={50}
            style={{ marginBottom: "20px" }}
          >
            <Col span={4}>
              <Card
                size="small"
                hoverable
                style={{
                  width: 200,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta title="HP pavilion" description="HP Laptop" />
              </Card>
            </Col>
            <Col span={4}>
              <Card
                size="small"
                hoverable
                style={{
                  width: 200,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta title="HP pavilion" description="HP Laptop" />
              </Card>
            </Col>
            <Col span={4}>
              <Card
                size="small"
                hoverable
                style={{
                  width: 200,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta title="HP pavilion" description="HP Laptop" />
              </Card>
            </Col>
            <Col span={4}>
              <Card
                size="small"
                hoverable
                style={{
                  width: 200,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta title="HP pavilion" description="HP Laptop" />
              </Card>
            </Col>
          </Row>
          <Row justify="space-evenly" gutter={50}>
            <Col span={4}>
              <Card
                size="small"
                hoverable
                style={{
                  width: 200,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta title="HP pavilion" description="HP Laptop" />
              </Card>
            </Col>
            <Col span={4}>
              <Card
                size="small"
                hoverable
                style={{
                  width: 200,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta title="HP pavilion" description="HP Laptop" />
              </Card>
            </Col>
            <Col span={4}>
              <Card
                size="small"
                hoverable
                style={{
                  width: 200,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta title="HP pavilion" description="HP Laptop" />
              </Card>
            </Col>
            <Col span={4}>
              <Card
                size="small"
                hoverable
                style={{
                  width: 200,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta title="HP pavilion" description="HP Laptop" />
              </Card>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
};
