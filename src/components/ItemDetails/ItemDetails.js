import React, { Component } from 'react';
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap';
export default class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} item details{' '}
          {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Media>
                <Media.Left>
                  <img
                    width={150}
                    height={150}  
                    src="https://officechairatwork.com/wp-content/uploads/2018/02/Herman-Miller-Aeron-Chair-Adjustable-Lumbar-Support.jpg"
                    alt="thumbnail"
                  />
                </Media.Left>
                <Media.Body>
                  <p>
                    Essentials by OFM ESS-3085 Racing Style Leather Gaming
                    Chair, Black
                  </p>
                  <Row className="show-block">
                    <Col md={6}>
                      <strong>{`$${this.props.price}`}</strong>
                      <br />
                      <strong className="price-strike">{`$${
                        this.props.price
                      }`}</strong>
                    </Col>
                    <Col md={6}>
                      <strong>Qty: 1</strong>
                    </Col>
                  </Row>
                </Media.Body>
              </Media>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}
