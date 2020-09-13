import React from 'react';
import Sidebar from './Sidebar';
import ContentArea from './ContentArea';
import '../layout.scss';

function FoundationsPage() {
  return (
    <div className="FoundationsPage">
      <Sidebar />
      <ContentArea />
    </div>
  );
}

export default FoundationsPage;
