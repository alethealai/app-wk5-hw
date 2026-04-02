import { create } from 'zustand';

export const usePhotoStore = create((set) => ({
  photos: [],

  addPhoto: (uri) => set((state) => ({
    photos: [
      {
        id: String(Date.now()), 
        date: new Date().toLocaleString(),
      },
      ...state.photos, 
    ],
  })),

  deletePhoto: (id) => set((state) => ({
    photos: state.photos.filter((photo) => photo.id !== id),
  })),
}));