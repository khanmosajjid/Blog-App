import { Row,Col } from "reactstrap";
import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <Row className="posts">
    <Col lg={6}>
    <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
    </Col>
    <Col lg={6}>
    <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
    </Col>
    <Col lg={6}>
    <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
    </Col>
    <Col lg={6}>
    <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
    </Col>
    <Col lg={6}>
    <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
    </Col>
    <Col lg={6}>
    <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
    </Col>
    
      
    </Row>
  );
}
