import React from 'react';

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <img style={{
                width: '200px',
                height: '200px',
            }} src="/img/logo.svg" alt="logo"/>
        </div>
    );
}
