import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <Image source={this.props.user.avatar} alternativeText="User avatar" />
        <p> {this.props.user.name} </p>
        <p> {this.props.user.email} </p>
        <hr />
      </div>
    );
  }
}

export default UserProfile;