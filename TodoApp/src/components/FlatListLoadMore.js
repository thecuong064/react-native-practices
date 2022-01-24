import React, {useState, forwardRef} from 'react';
import {FlatList} from 'react-native';

const FlatListLoadMore = forwardRef((props, ref) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleLoadMore = () => {
    if (hasScrolled && props?.onLoadMore) {
      props.onLoadMore();
    }
  };
  return (
    <FlatList
      {...props}
      ref={ref}
      onScroll={() => setHasScrolled(true)}
      onEndReached={handleLoadMore}
    />
  );
});

export default FlatListLoadMore;
