import React from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps): React.JSX.Element | null {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          borderRadius: '12px',
          padding: '24px',
          width: '90%',
          maxWidth: '500px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          animation: 'fadeIn 0.2s ease-out'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <h2 style={{ margin: 0, color: '#001f3f', fontSize: '1.4rem' }}>{title}</h2>
          <button
            onClick={onClose}
            style={{
              background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#5a6a7e', lineHeight: 1
            }}
          >
            &times;
          </button>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
