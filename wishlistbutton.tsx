'use client';
import { useState } from 'react';

interface Props {
  productId: string;
}

export function WishlistButton({ productId }: Props) {
  const [inWishlist, setInWishlist] = useState(false);

  return (
    <button 
      onClick={() => setInWishlist(!inWishlist)}
      className={`p-2 ${inWishlist ? 'bg-red-500' : 'bg-gray-300'} text-white`}
    >
      {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
    </button>
  );
}
