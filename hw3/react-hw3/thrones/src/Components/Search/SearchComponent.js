import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import { Card, Row, Col } from 'react-bootstrap';

export class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      character: null,
      notFound: false,
      multiple: false,
      searchItem: {},
      searchItemFound: false,
    };
  }

  filterData = (event) => {
    const foundData = this.state.character.filter((item) =>
      item.fullName.toLowerCase().includes(this.state.query.toLowerCase())
    );
    if (foundData.length !== 0) {
      this.setState({
        searchItemFound: true,
        searchItem: foundData,
        notFound: false,
        multiple: false,
      });
    } else {
      this.setState({
        searchItemFound: false,
        searchItem: {},
        notFound: true,
        multiple: false,
      });
    }
  };

  handleEnterButtonClick = (event) => {
    if (event.keyCode === 13) {
      this.filterData(event);
    } else {
    }
  };

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  };

  componentDidMount() {
    this.searchCharacter();
  }

  searchCharacter = async () => {
    try {
      const response = await axios.get(
        `https://thronesapi.com/api/v2/Characters`
      );
      if (response.data.length > 1) {
        this.setState({
          character: response.data,
          notFound: false,
          multiple: false,
        });
      } else {
        this.setState({ character: null, notFound: true, multiple: false });
      }
    } catch (error) {
      console.error("Error fetching character data:", error);
    }
  };

  render() {
    return (
      <div>
        <InputGroup style={styles.InputGroup} className="mb-3">
          <Form.Control
            placeholder="Enter character name"
            aria-label="Enter character name"
            aria-describedby="basic-addon2"
            onChange={this.handleInputChange}
            onKeyDown={this.handleEnterButtonClick}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={this.filterData}
          >
            Search
          </Button>
        </InputGroup>
        <div style={styles.cardContainer}>
        {this.state.searchItemFound && (
          <Row>
            {this.state.searchItem.map((item, index) => (
              <Col key={index} md={4}>
                <Card style={{ width: '18rem', marginBottom: '1rem' }}>
                  <Card.Img variant="top" src={item.imageUrl} alt={item.fullName} />
                  <Card.Body>
                    <Card.Title>{item.fullName}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
        {this.state.notFound && <p>Character not found.</p>}
       
      </div>
    );
  }
}

export default SearchComponent;


const styles = {
  cardContainer: {
    padding: '30px'
    },
  InputGroup:{
    padding:'5% 10% 0% 10%'
  }
 
};