import React from 'react';

class ListExample extends React.PureComponent {
  render() {
    const priceList = [1000, 2000, 3000, 4000];
    const prices = priceList.map((price, i) => <div key={`tl_${i}`}>가격 : {price}원</div>);

    return (
      <div>
        <label>가격목록</label>
        {prices}
      </div>
    );
  }
}

export default ListExample;
