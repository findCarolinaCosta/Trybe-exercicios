import React from 'react';

export default function renderLastUpdatedAt() {
  const { lastUpdated } = this.state;

  return <span>{`Last updated at ${new Date(lastUpdated).toLocaleTimeString()}.`}</span>;
}