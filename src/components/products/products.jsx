import { Card } from "antd";
import Product from "../productPage/product";

const { Meta } = Card;

export const ProductPage = () => {
  return (
    <div>
      <Card
        extra={
          <h1
            style={{
              fontSize: "20px",
              marginRight: "24px",
            }}
          >
            <b>Products</b>
          </h1>
        }
        bordered={false}
        style={{
          minWidth: "100%",
          margin: "0",
          minHeight: "100%",
          overflow: "hidden",
          overflowY: "scroll",
          // textAlign: "right",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
            }}
            className="grid sm:gap-y-4 sm:gap-x-1 gap-y-2 gap-x-2"
            key={i}
          >
            <Product />
          </div>
        ))}
      </Card>
    </div>
  );
};

// <div>
//   <Row
//     justify="space-evenly"
//     // gutter={50}
//     style={{ marginBottom: "20px" }}
//   >
//     <Col
//       // span={4}
//       xs={10}
//       sm={8}
//       md={6}
//       lg={4}
//       xl={2}
//       justify="space-evenly"
//     >
//       <Card
//         size="small"
//         hoverable
//         style={{
//           minWidth: 200,
//           height: "auto",
//         }}
//         cover={
//           <img
//             alt="product"
//             src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//           />
//         }
//       >
//         <Meta title="HP pavilion" description="HP Laptop" />
//       </Card>
//     </Col>
//     <Col span={4} xs={10} sm={8} md={6} lg={4} xl={2}>
//       <Card
//         size="small"
//         hoverable
//         style={{
//           minWidth: 100,
//           height: "auto",
//         }}
//         cover={
//           <img
//             alt="example"
//             src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//           />
//         }
//       >
//         <Meta title="HP pavilion" description="HP Laptop" />
//       </Card>
//     </Col>
//     <Col span={4} xs={10} sm={8} md={6} lg={4} xl={2}>
//       <Card
//         size="small"
//         hoverable
//         style={{
//           minWidth: 100,
//           height: "auto",
//         }}
//         cover={
//           <img
//             alt="example"
//             src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//           />
//         }
//       >
//         <Meta title="HP pavilion" description="HP Laptop" />
//       </Card>
//     </Col>
//     <Col span={4} xs={10} sm={8} md={6} lg={4} xl={2}>
//       <Card
//         size="small"
//         hoverable
//         style={{
//           minWidth: 100,
//           height: "auto",
//         }}
//         cover={
//           <img
//             alt="example"
//             src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//           />
//         }
//       >
//         <Meta title="HP pavilion" description="HP Laptop" />
//       </Card>
//     </Col>
//   </Row>
//   <Row justify="space-evenly">
//     <Col
//       span={4}
//       xs={10}
//       sm={8}
//       md={6}
//       lg={4}
//       xl={2}
//       justify="space-evenly"
//     >
//       <Card
//         size="small"
//         hoverable
//         style={{
//           minWidth: 100,
//           height: "auto",
//         }}
//         cover={
//           <img
//             alt="example"
//             src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//           />
//         }
//       >
//         <Meta title="HP pavilion" description="HP Laptop" />
//       </Card>
//     </Col>
//     <Col span={4} xs={10} sm={8} md={6} lg={4} xl={2}>
//       <Card
//         size="small"
//         hoverable
//         style={{
//           minWidth: 100,
//           height: "auto",
//         }}
//         cover={
//           <img
//             alt="example"
//             src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//           />
//         }
//       >
//         <Meta title="HP pavilion" description="HP Laptop" />
//       </Card>
//     </Col>
//     <Col span={4} xs={10} sm={8} md={6} lg={4} xl={2}>
//       <Card
//         size="small"
//         hoverable
//         style={{
//           minWidth: 100,
//           height: "auto",
//         }}
//         cover={
//           <img
//             alt="example"
//             src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//           />
//         }
//       >
//         <Meta title="HP pavilion" description="HP Laptop" />
//       </Card>
//     </Col>
//     <Col span={4} xs={10} sm={8} md={6} lg={4} xl={2}>
//       <Card
//         size="small"
//         hoverable
//         style={{
//           minWidth: 100,
//           height: "auto",
//         }}
//         cover={
//           <img
//             alt="example"
//             src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//           />
//         }
//       >
//         <Meta title="HP pavilion" description="HP Laptop" />
//       </Card>
//     </Col>
//   </Row>
// </div>
