"use client"
import { products, collections } from '@wix/stores';
import { createClient, OAuthStrategy } from '@wix/sdk';
import Cookies from "js-cookie";
import { createContext, ReactNode } from 'react';


const refreshToken = JSON.parse(Cookies.get('refreshToken') || "{}");

const wixClient = createClient({
    modules: { products, collections },
    auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
        tokens: {
            refreshToken, accessToken: { value: "", expiresAt: 0 }
        }
    }),
});

export const WixContext = createContext < WixClient > (wixClient);

export const WixContextProvider = ({ children }) => {
    return (
        <WixContext.Provider value={wixClient}>{children}</WixContext.Provider>
    )
}