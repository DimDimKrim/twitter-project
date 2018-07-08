import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions.js';

class List extends React.Component {

  componentDidMount() {
    this.props.handleFetchPosts();
  }

  render() {
    const { posts, isLoading, error } = this.props;

    if (isLoading) {
      return <div>Is loading</div>;
    }

    if (error) {
      return <div><strong>Error:</strong> {error.message}</div>;
    }

    return (
      <div>
        {this.props.posts.map(post => (
          <div key={post.id}>
            {post.content}
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  store => ({
    posts: store.list,
    isLoading: store.isLoading,
    error: store.error
  }),
  dispatch => ({
    handleFetchPosts: () => dispatch(fetchPosts())
  })
)(List);
