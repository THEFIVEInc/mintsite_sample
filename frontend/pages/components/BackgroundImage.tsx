import React from 'react';

type Props = {
  imageUrl: string;
}

const BackgroundImage: React.FC<Props> = ({ imageUrl, children }) => {
  const styles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '70vh',
  };

  return (
    <div style={styles}>
      {children}
    </div>
  );
}

export default BackgroundImage;
