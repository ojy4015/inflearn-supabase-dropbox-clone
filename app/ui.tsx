'use client';

import Image from 'next/image';
import Logo from './components/logo';
import SearchComponent from './components/search-component';
import { useState } from 'react';
import FileDragDropZone from './components/file-dragdropzone';
import DropImageList from './components/dropbox-image-list';

export default function UI() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <main className="w-full p-2 flex flex-col gap-4">
      {/* logo */}
      <Logo />
      {/* Search Component */}
      <SearchComponent
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      {/* File Drag&Drop Zone */}
      <FileDragDropZone />
      {/* Dropbox Image List */}
      <DropImageList />
    </main>
  );
}
