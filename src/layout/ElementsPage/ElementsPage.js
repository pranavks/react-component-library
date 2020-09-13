import React from 'react';
import Sidebar from './Sidebar';
import ContentArea from './ContentArea';
import '../layout.scss';

function ElementsPage() {
  return (
    <div className="ElementsPage">
      <Sidebar />
      <ContentArea />
    </div>
  );
}

export default ElementsPage;
