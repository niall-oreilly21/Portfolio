import React, { Component } from "react";
import { Button, InputGroup, FormControl, Row, Col, ListGroup } from "react-bootstrap";
import Tags from "../../tags.json"; // Assuming tags are an array of strings

export default class SearchBar extends Component<any, { searchQuery: string, tags: string[], suggestions: string[] }> {
    constructor(props: any) {
        super(props);
        this.state = {
            searchQuery: "",
            tags: [], // Start with no tags
            suggestions: [], // To store matching suggestions
        };
    }

    // Handler to update search query and provide suggestions
    handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchQuery = e.target.value;
        const filteredSuggestions = this.getFilteredSuggestions(searchQuery);

        this.setState({ searchQuery, suggestions: filteredSuggestions }, this.filterProjects);
    };

    // Function to get filtered suggestions
    getFilteredSuggestions = (searchQuery: string) => {
        const { tags } = this.state;
        // Return suggestions based on the input
        return Tags.tags.filter(tag => // Assuming Tags.tags contains the array of all tags
            tag.toLowerCase().startsWith(searchQuery.toLowerCase()) &&
            !tags.includes(tag) // Exclude already added tags
        );
    };

    // Handler to add the tag when the user presses "Enter"
    handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && this.state.searchQuery.trim()) {
            this.addTag(this.state.searchQuery);
        }
    };

    // Function to add a tag
    addTag = (tag: string) => {
        const tagLower = tag.toLowerCase(); // Convert input tag to lowercase

        // Check if the input tag matches any valid tag in a case-insensitive manner
        const validTag = Tags.tags.find(t => t.toLowerCase() === tagLower);

        if (validTag && !this.state.tags.includes(validTag)) { // Only add if it's a valid tag and not already included
            this.setState(prevState => ({
                tags: [...prevState.tags, validTag],
                searchQuery: "",
                suggestions: []
            }), this.filterProjects);
        }
    };

    // Function to filter projects based on selected tags
    filterProjects = () => {
        this.setState({}, () => {
            this.props.onFilterProjects(this.state.tags);
        });
    };

    // Function to remove a tag when the button is clicked
    removeTag = (index: number) => {
        this.setState(prevState => {
            const updatedTags = prevState.tags.filter((_, i) => i !== index);
            return { tags: updatedTags, suggestions: this.getFilteredSuggestions(prevState.searchQuery) }; // Update suggestions after removing tag
        }, this.filterProjects);
    };

    // Function to handle suggestion click
    handleSuggestionClick = (tag: string) => {
        this.addTag(tag);
    };

    render() {
        const { searchQuery, tags, suggestions } = this.state;

        return (
            <section className="p-4 pb-4 d-flex justify-content-center align-items-center flex-column" style={{ maxWidth: '500px' }}>
                {/* Search Bar Wrapper with relative position */}
                <div className="w-100 position-relative">
                    {/* Search Bar */}
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Search..."
                            aria-label="Search"
                            value={searchQuery}
                            onChange={this.handleSearchInputChange}
                            onKeyPress={this.handleKeyPress}
                        />
                    </InputGroup>

                    {/* Suggestions dropdown */}
                    {suggestions.length > 0 && (
                        <ListGroup className="position-absolute w-100" style={{ top: '100%', zIndex: 1000 }}>
                            {suggestions.map((suggestion, index) => (
                                <ListGroup.Item
                                    key={index}
                                    action
                                    onClick={() => this.handleSuggestionClick(suggestion)}
                                >
                                    {suggestion}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </div>

                {/* Display added tags */}
                <Row className="w-100 mb-2">
                    {tags.map((tag, index) => (
                        <Col key={index} className="mb-2" xs="auto">
                            <Button variant="primary" className="tag-button">
                                {tag} <span onClick={() => this.removeTag(index)}>&times;</span>
                            </Button>
                        </Col>
                    ))}
                </Row>
            </section>
        );
    }
}
