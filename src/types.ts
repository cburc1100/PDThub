import React from 'react';

export interface SlideData {
  id: string;
  num: string;
  title: string;
  heading: React.ReactNode;
  desc: React.ReactNode;
  imageUrl?: string;
  imageOpacity?: number;
}
